from fastapi import APIRouter, Depends
import logging as log
from sqlalchemy.orm import Session
import schemas
from character import get_character_by_guid
from models import db

log.basicConfig(level=log.INFO)
character_router = APIRouter()


@character_router.get("/api/characters", response_model=list[schemas.CharactersBase])
def get_characters(skip: int = 0, limit: int = 100, session: Session = Depends(db.get_session)):
    return get_characters(session, skip=skip, limit=limit)


@character_router.get("/api/characters/<guid>", response_model=list[schemas.CharactersBase])
def get_character(guid, session: Session = Depends(db.get_session)):
    return get_character_by_guid(session, guid)


@character_router.post("/api/characters/<guid>", response_model=list[schemas.CharactersBase])
def get_character(guid, session: Session = Depends(db.get_session)):
    return update_character_by_guid(session, guid)
