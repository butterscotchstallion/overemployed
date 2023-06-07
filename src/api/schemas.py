from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from uuid import uuid4


class CharactersBase(BaseModel):
    id: int
    name: str
    guid: Optional[str] = str(uuid4())
    created_at: Optional[datetime] = datetime.now()
    updated_at: Optional[datetime] = datetime.now()
    experience_gained: Optional[int] = 0

    class Config:
        orm_mode = True
