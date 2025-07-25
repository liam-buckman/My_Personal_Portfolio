from flask import Flask, render_template, url_for, send_from_directory

app = Flask(__name__, 
            static_url_path='', 
            static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/About-me')
def about():
    return render_template('About-me.html')

@app.route('/Experience')
def experience():
    return render_template('Experience.html')

@app.route('/Projects')
def projects():
    return render_template('Projects.html')

@app.route('/Gallery')
def gallery():
    return render_template('gallery.html')

if __name__ == '__main__':
    app.run(debug=True)