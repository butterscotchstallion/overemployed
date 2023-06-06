from fastapi import APIRouter, Depends
import logging as log

from sqlalchemy.orm import Session

import schemas
from models import Character

log.basicConfig(level=log.INFO)
ws_router = APIRouter()


@app.get("/api/users/", response_model=list[schemas.UserBase])
def read_users(skip: int = 0, limit: int = 100, session: Session = Depends(db.get_session)):
    return Character.get_users(session, skip=skip, limit=limit)
