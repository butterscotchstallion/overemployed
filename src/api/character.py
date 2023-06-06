from sqlalchemy.orm import Session
import models


def get_character_by_guid(db: Session, guid: str):
    return db.query(models.Character).filter(models.Character.guid == guid).first()
