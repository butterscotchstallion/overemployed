from typing import Type

from sqlalchemy.orm import Session
from password_utils import check_password
import models


def get_user_by_guid(db: Session, guid: str) -> Type[models.Users] | None:
    return db.query(models.Users).filter(models.Users.guid == guid).first()


def get_users(db: Session, limit: int, skip: int) -> list:
    return db.query(models.Users).offset(skip).limit(limit).all()


def update_user_by_guid(db: Session, guid: str, user: models.Users) -> int:
    return db.query(models.Users).filter(models.Users.guid == guid).update(user)


def verify_credentials(db: Session, user: models.Users) -> bool:
    """
    1. Get user by username and password
    2. Hash supplied password and compare to the one stored in the
    DB
    :param db: Session
    :param user: models.User instance
    :return: bool
    """
    existing_user = get_user_by_guid(db, user.guid)
    if existing_user:
        return check_password(user.password, existing_user.password)
    else:
        return False
