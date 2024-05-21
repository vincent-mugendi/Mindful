from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'qwertyupi5'
app.config['MYSQL_DB'] = 'mindful_users_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = generate_password_hash(data.get('password'))

    cursor = mysql.connection.cursor()
    cursor.execute('INSERT INTO users (username, email, password) VALUES (%s, %s, %s)', (username, email, password))
    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'User registered successfully'})

if __name__ == '__main__':
    app.run(debug=True)
