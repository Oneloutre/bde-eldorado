from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here
    # return index.html
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.route('/easteregg')
def easteregg():
    return render_template('easteregg.html')

@app.route('/sponsors')
def sponsors():
    return render_template('sponsors.html')

@app.route('/mentions-legales')
def mentions():
    return render_template('mentions-legales.html')

if __name__ == '__main__':
    app.run(port=8000)
