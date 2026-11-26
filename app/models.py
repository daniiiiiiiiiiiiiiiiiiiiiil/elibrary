from sqlalchemy import Column, Integer, String, Date, Text, ForeignKey, Table
from sqlalchemy.orm import relationship
from app.database import Base

# Связующая таблица книги-авторы (многие-ко-многим)
books_aftors = Table(
    "books_aftors",
    Base.metadata,
    Column("id_aftor", Integer, ForeignKey("aftors.id_aftor"), primary_key=True),
    Column("id_books", Integer, ForeignKey("books.id_books"), primary_key=True),
)

# Связующая таблица книги-жанры (многие-ко-многим)
books_dgarnu = Table(
    "books_dgarnu",
    Base.metadata,
    Column("id_books", Integer, ForeignKey("books.id_books"), primary_key=True),
    Column("id_dgarna", Integer, ForeignKey("dgarnu.id_dgarna"), primary_key=True),
)

class Aftor(Base):
    __tablename__ = "aftors"

    id_aftor = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)

    books = relationship("Book", secondary=books_aftors, back_populates="aftors")

class Dgarna(Base):
    __tablename__ = "dgarnu"

    id_dgarna = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    description = Column(String(100), nullable=False)

    books = relationship("Book", secondary=books_dgarnu, back_populates="dgarnu")

class Book(Base):
    __tablename__ = "books"

    id_books = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    data = Column(Date, nullable=False)
    description = Column(String(100), nullable=False)

    aftors = relationship("Aftor", secondary=books_aftors, back_populates="books")
    dgarnu = relationship("Dgarna", secondary=books_dgarnu, back_populates="books")
    user_records = relationship("BookUser", back_populates="book")

class User(Base):
    __tablename__ = "users"

    id_user = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    email = Column(Text, unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)  # Добавлено по требованию п.3

    book_records = relationship("BookUser", back_populates="user")

# Ассоциативный объект для связи книг и пользователей с доп. полями (data, status)
class BookUser(Base):
    __tablename__ = "books_users"

    id_books = Column(Integer, ForeignKey("books.id_books"), primary_key=True)
    id_user = Column(Integer, ForeignKey("users.id_user"), primary_key=True)
    data = Column(Date, nullable=False)
    status = Column(String(20), nullable=False)  # Например: 'читаю', 'прочитано', 'в планах'

    book = relationship("Book", back_populates="user_records")
    user = relationship("User", back_populates="book_records")
