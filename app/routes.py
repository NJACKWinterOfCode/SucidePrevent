from flask import render_template
from app import app

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/choose")
def choose():
    return render_template("choose.html")

@app.route("/chat")
def chat():
    return render_template("chat.html")

@app.route("/quotes")
def quotes():
    return render_template("quotes.html")



