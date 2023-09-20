from flask import Flask
from path_finder import find_path

app = Flask(__name__)

@app.route('/')
def home():
    print(find_path())
    return find_path()

if __name__ == '__main__':
    app.run(debug=True)
