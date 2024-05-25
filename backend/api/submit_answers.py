import sys
import os

# Add the parent directory of 'api' to the module search path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from api.personalizer import determine_cluster

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/api/submit-answers', methods=['POST'])
def submit_answers():
    # Get data from request body
    data = request.get_json()
    print(f"Received Answers: {data}")

    # Determine the user cluster using the personalizer algorithm
    user_cluster = determine_cluster(data)
    print("User Cluster:", user_cluster)  # Log the user cluster

    # Save answers to a JSON file
    with open('answers.json', 'w') as f:
        json.dump(data, f, indent=4)

    return jsonify({'message': 'Answers submitted successfully!', 'cluster': user_cluster}), 201

if __name__ == '__main__':
    app.run(debug=True)
