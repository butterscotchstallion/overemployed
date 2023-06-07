from fastapi import FastAPI
from db import Database
import logging as log
from character_router import character_router


db = Database()
engine = db.get_engine()
base = db.get_base()
log.basicConfig(level=log.INFO)
base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(character_router)
