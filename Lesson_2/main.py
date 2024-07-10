from flask import Flask, render_template


app = Flask(__name__)


@app.route(f'/')
def main():
    return render_template('task_lesson_2.html')


if __name__ == '__main__':
    app.run(debug=True)
