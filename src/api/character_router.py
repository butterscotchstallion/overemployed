from fastapi import APIRouter, Depends
import logging as log
from sqlalchemy.orm import Session
import schemas
from models import Characters, db

log.basicConfig(level=log.INFO)
ws_router = APIRouter()

@ws_router.get("/api/characters/", response_model=list[schemas.CharactersBase])
def read_users(skip: int = 0, limit: int = 100, session: Session = Depends(db.get_session)):
    return Characters.get_users(session, skip=skip, limit=limit)
