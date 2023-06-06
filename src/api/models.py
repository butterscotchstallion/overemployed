from sqlalchemy import Integer, String, Column, DateTime, Boolean, ForeignKey
from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column
import Database

db = Database()
Base = db.get_base()


class Character(Base):
    """
    Character model
    """
    __tablename__ = 'characters'
    id: Mapped[int] = mapped_column(Integer(), primary_key=True)
    name = Column(String(20), nullable=False, index=True)
    guid = Column(String(50), nullable=False)
    created_on = Column(DateTime(), default=datetime.now)
    updated_on = Column(DateTime(), default=datetime.now, onupdate=datetime.now)
    experience_gained = Column(Integer, default=0)
