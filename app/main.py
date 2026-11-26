from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from datetime import date

from app.database import get_db
from app.models import User, Book, Aftor, Dgarna, BookUser
from app.security import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user
)

app = FastAPI(title="Library API")


# --- Схемы данных (Pydantic) ---

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class BookStatusCreate(BaseModel):
    id_books: int
    status: str


# --- Маршруты авторизации ---

@app.post("/users/", summary="Регистрация пользователя")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # Проверяем, не занят ли email
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email уже зарегистрирован")

    db_user = User(
        name=user.name,
        email=user.email,
        password_hash=hash_password(user.password)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"id_user": db_user.id_user, "name": db_user.name, "email": db_user.email}


@app.post("/login", response_model=Token, summary="Вход и получение токена")
def login(
        form_data: OAuth2PasswordRequestForm = Depends(),
        db: Session = Depends(get_db)
):
    # OAuth2PasswordRequestForm использует поле username, передаем туда email
    user = db.query(User).filter(User.email == form_data.username).first()

    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверный email или пароль",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Создаем токен, записывая ID пользователя в поле 'sub'
    access_token = create_access_token(data={"sub": str(user.id_user)})
    return {"access_token": access_token, "token_type": "bearer"}


# --- Публичные маршруты ---

@app.get("/books/", summary="Получить все книги с авторами и жанрами")
def get_books(db: Session = Depends(get_db)):
    books = db.query(Book).all()
    result = []
    for b in books:
        result.append({
            "id_books": b.id_books,
            "name": b.name,
            "data": b.data,
            "description": b.description,
            "aftors": [f"{a.name} {a.last_name}" for a in b.aftors],
            "dgarnu": [g.name for g in b.dgarnu]
        })
    return result


# --- Защищенные маршруты (требуют токен) ---

@app.post("/books/assign/", summary="Добавить книгу в список текущего пользователя")
def assign_book_to_user(
        item: BookStatusCreate,
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)  # Проверка токена
):
    record = BookUser(
        id_user=current_user.id_user,  # Берем ID из токена, а не из тела запроса
        id_books=item.id_books,
        data=date.today(),
        status=item.status
    )
    db.add(record)
    db.commit()
    return {"message": "Статус книги обновлен", "status": item.status}


@app.get("/users/me/books", summary="Книги авторизованного пользователя")
def get_my_books(
        db: Session = Depends(get_db),
        current_user: User = Depends(get_current_user)  # Проверка токена
):
    records = db.query(BookUser).filter(BookUser.id_user == current_user.id_user).all()
    if not records:
        raise HTTPException(status_code=404, detail="Записи не найдены")
    return [
        {
            "book": r.book.name,
            "status": r.status,
            "date": r.data
        }
        for r in records
    ]
