from fastapi import APIRouter, Depends
import logging as log
from sqlalchemy.orm import Session
import schemas
from models import Characters, db

log.basicConfig(level=log.INFO)
character_router = APIRouter()


@character_router.get("/api/characters", response_model=list[schemas.CharactersBase])
def get_characters(skip: int = 0, limit: int = 100, session: Session = Depends(db.get_session)):
    return Characters.get_users(session, skip=skip, limit=limit)
