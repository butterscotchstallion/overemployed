from sqlalchemy.orm import Session
import models


def get_character_by_guid(db: Session, guid: str):
    return db.query(models.Characters).filter(models.Characters.guid == guid).first()


def get_characters(db: Session, limit: int, skip: int):
    return db.query(models.Characters).offset(skip).limit(limit).all()


def update_character_by_guid(db: Session, guid: str, user: models.Characters):
    return db.query(models.Characters).filter(models.Characters.guid == guid).update(user)
