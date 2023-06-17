from sqlalchemy.orm import Session
import models


def get_user_by_guid(db: Session, guid: str):
    return db.query(models.Users).filter(models.Users.guid == guid).first()


def get_users(db: Session, limit: int, skip: int):
    return db.query(models.Users).offset(skip).limit(limit).all()


def update_user_by_guid(db: Session, guid: str, user: models.Users):
    return db.query(models.Users).filter(models.Users.guid == guid).update(user)
