from datetime import date
from app.database import SessionLocal
from app.models import Aftor, Dgarna, Book, User, BookUser
from app.security import hash_password
from app.database import engine, Base
Base.metadata.create_all(bind=engine)


def seed_data():
    db = SessionLocal()
    if db.query(User).first():
        print("Данные уже существуют.")
        return

    # 1. Авторы
    aftor1 = Aftor(name="Фёдор", last_name="Достоевский")
    aftor2 = Aftor(name="Михаил", last_name="Булгаков")
    db.add_all([aftor1, aftor2])

    # 2. Жанры
    genre1 = Dgarna(name="Классика", description="Классическая художественная литература")
    genre2 = Dgarna(name="Роман", description="Крупное повествовательное произведение")
    db.add_all([genre1, genre2])

    # 3. Книги и связи с авторами/жанрами
    book1 = Book(
        name="Преступление и наказание",
        data=date(1866, 1, 1),
        description="Социально-психологический роман",
        aftors=[aftor1],
        dgarnu=[genre1, genre2]
    )
    book2 = Book(
        name="Мастер и Маргарита",
        data=date(1967, 1, 1),
        description="Мистический роман",
        aftors=[aftor2],
        dgarnu=[genre1, genre2]
    )
    db.add_all([book1, book2])

    # 4. Пользователи (с хешированием паролей)
    user1 = User(name="Алексей", email="alex@example.com", password_hash=hash_password("pass1234"))
    user2 = User(name="Мария", email="maria@example.com", password_hash=hash_password("qwerty99"))
    db.add_all([user1, user2])
    db.commit()

    # 5. Записи о чтении книг пользователями
    record1 = BookUser(id_books=book1.id_books, id_user=user1.id_user, data=date.today(), status="прочитано")
    record2 = BookUser(id_books=book2.id_books, id_user=user2.id_user, data=date.today(), status="читаю")
    db.add_all([record1, record2])
    db.commit()

    print("База библиотеки успешно заполнена тестовыми данными!")

if __name__ == "__main__":
    seed_data()
