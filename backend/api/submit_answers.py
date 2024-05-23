from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/api/submit-answers', methods=['POST'])
def submit_answers():
    # Get data from request body
    data = request.get_json()

    # Implement logic to store data in backend (storage folder or database)
    # Example: Save data to a JSON file
    with open('answers.json', 'w') as f:
        json.dump(data, f, indent=4)

    return jsonify({'message': 'Answers submitted successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True)
