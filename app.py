from Application.views import app

# turn on dev mode for development
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)