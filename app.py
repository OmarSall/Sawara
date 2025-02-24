from flask import Flask, render_template

app = Flask(__name__)

# Sample menu data
menu_items = [
   
]

@app.route('/')
def home():
    return render_template()


if __name__ == '__main__':
    app.run(debug=True)
