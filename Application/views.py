import json
from flask import Flask, render_template
app = Flask('weibot', static_folder="Application/static", template_folder="Application/templates")

# index page
@app.route("/")
def show_index_page():
    return render_template("index.html")


@app.route("/test", methods=["GET", "POST", "PUT"])
def test():
    return json.dumps({
        'imageURL': 'static/assets/images/elliot.jpg',
        'carType': 'Mini Cooper 2003',
        'milage': '14k',
        'price': '15000',
    })
