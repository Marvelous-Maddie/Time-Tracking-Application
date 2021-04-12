# Time Tracking Application
 
Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
       <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#backend">Backend</a></li>
       <li><a href="#frontend">Frontend</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This project is about a simple time tracking application. Originally, it was build within 8.5 hours for a coding test and has been later modified. There were a lot of learning outcomes during the project, e. g. how to make a timer or how to implement search functionality.

### Built With

Frontend:
* [React.js] (https://reactjs.org/)
* [React Router] (https://reactrouter.com/)
* [Bootstrap] (https://getbootstrap.com/)
* [Botswatch] (https://bootswatch.com/darkly/)

Backend:
* [Express.js] (https://expressjs.com/)
* [MongoDB] (https://www.mongodb.com/)
* [Mongoose] (https://mongoosejs.com/)
* [CORS] (https://www.npmjs.com/package/cors)
* [Dotenv] (https://www.npmjs.com/package/dotenv)

### Features

Original features:
<ul>
 <li>Navbar</li>
 <li>A Timer, that can be started, stopped, restarted and reseted</li>
 <li>Add task functionality, that saves duration, description and timestamp of a task to the db (backend only)</li>
 <li>A list of all tracked tasks</li>
 <li>Search functionality for all tracked tasks</li>
 <li>Complete Express backend with connection to MongoDB</li>
</ul>

Later additions:
<ul>
 <li>Timer displayed like 00:00:00</li>
 <li>Add task functionality, that saves duration, description and timestamp of a task to the db</li>
 <li>Pagination for the All tasks-list</li>
</ul>
 

## Getting startetd
### Prerequisites

Please make sure you have the latest version of npm installed:
  ```sh
  npm install npm@latest -g
  ```
  
### Backend

First clone the repo:
   ```sh
   git clone https://github.com/Marvelous-Maddie/Time-Tracking-Application.git
   ```
   
Go to the backend folder:
   ```sh
   cd tracker-backend
   ```

Install NPM packages:
   ```sh
   npm install
   ```
   
Start the backend:
   ```sh
   node index.js
   ```
   
### Frontend

Go to the fontend folder:
   ```sh
   cd..
   cd tracker-frontend
   ```

Install NPM packages:
   ```sh
   npm install
   ```
   
Start the frontend:
   ```sh
   npm start
   ```
   
### Acknowledgements
* [Flaticon] (www.flaticon.com)
