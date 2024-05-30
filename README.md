# MINDFUL 
![mindful repo banner](./frontend/mindful-frontend/src/assets/mindful_repo_banner.png)


### Description
  - mindful is a web application that is designed to support users in managing their mental well being by offering an intergrated platform for self-assessment, education.
  - It employs a recommendation algorithm to deliver personalized action plans to users derived from user self-assessments.

### KEY FEATURES
1. Self-assessment
-  Users can take validated quizzes and surveys to assess their mental health status.

2. Recommendation Algorithm: 
- mindful then utilizes an algorithm at the backend to analyzes user self-assessment and then provides a customized action plan with personalized recommendations

2. Educational Resources
- mindful offers  recommendation on books, apps, and community events to support the users mental health journey..

  
### Technology Stack

- **Frontend**: [Vite + React](./frontend/mindful-frontend/README.md)
- **Backend**: [Python Flask](./backend/README.md)
- **Database**: MySQL
- **Integration**: RESTful APIs

### Project Structure
```
.
├── backend
│   ├── api
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── answers.json
│   │   ├── personalizer.py
│   │   ├── submit_answers.py
│   │   ├── user_login.py
│   │   └── user_registration.py
│   └── storage
│       └── users_schema.sql
├── frontend
│   └── mindful-frontend
│       ├── README.md
│       ├── index.html
│       ├── node_modules
│       ├── package-lock.json
│       ├── package.json
│       ├── public
│       ├── src
│       └── vite.config.js
└── README.md
```
#### Installation
1. Clone the repository: `git clone https://github.com/vincent-mugendi/mindful.git`
2. Install dependacies
  - Make sure you have python3 and mysql installed
  - Install Flask and Flask-MySQLdb: `cd backend/api` then `pip install flask flask-mysqldb`
  - Install frontend dependancies: `cd frontend/mindful-frontend` then `npm install`
3. Run schema script for database setup: `cd backend/storage` then run the sql schema.

#### How to run
1. Start the Vite React server for the frontend: `cd frontend/mindful-frontend` then `npm run dev`
2. Ensure the Flask server is running for backend APIs: `cd backend/api` then start Flask Server
3. Ensure MySQL Server is running for database storage: `sudo service mysql start`

## AUTHORS
- Vincent Mugendi [@vincent-mugendi]()
- Fortunate Kio [@fortunatekio]()

## Contribution

Contributions are welcome. If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.