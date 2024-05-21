from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Purity@1974'
app.config['MYSQL_DB'] = 'mindful_users_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# Error handling decorator
def handle_database_errors(f):
    def decorated_function(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    return decorated_function

@app.route('/api/register', methods=['POST'])
@handle_database_errors
def register():
    data = request.json
    
    # Validate input
    if not all(key in data for key in ('username', 'email', 'password')):
        return jsonify({'error': 'Missing required fields'}), 400
    
    username = data['username']
    email = data['email']
    password = data['password']

    # Check for existing user
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM users WHERE username = %s OR email = %s', (username, email))
    existing_user = cursor.fetchone()
    if existing_user:
        return jsonify({'error': 'User already exists'}), 409

    # Hash password
    hashed_password = generate_password_hash(password)

    # Insert new user
    cursor.execute('INSERT INTO users (username, email, password) VALUES (%s, %s, %s)', (username, email, hashed_password))
    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'User registered successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
