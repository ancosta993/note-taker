# Note Taker Starter Code
Click here for [here](https://note-taker-anthony.herokuapp.com/) for the deployed application. Only the backend was designed in this git repository. The front end was cloned from https://github.com/coding-boot-camp/miniature-eureka

## Description
This is a note taking and keeping application. User can add title and description. The user can then save the inputed information by clicking he save icon. The saved title and the first line of description is shown on the left hand side of the screen. Adding multiple notes will list them on top of each other on the left hand side. The use can use the "plus" sign on top right of the screen for adding new notes.

## Table of Contents
- **[Description](#description)**
- **[Tools](#tools)**
- **[Installation Instruction](#installation)**
- **[Usage Information](#usage)**
- **[Function](#function)**

## Tools
The backend was coded with Node.js  
Libraries used:  
- express.js for server
- file system (fs.js) for writing and reading data in file

## Installation
There is no installation required. The user needs to make a GET request (or just visit) the URL at https://note-taker-anthony.herokuapp.com. The application will start itself.

## Usage
- When user vists the given URL, the homepage is shown at first.
- Clicking on `Get Started` button shown the notes screen
- Left side, there are saved notes with their title, one line description, and a trash icon for delete.
- Right side, the user can type in a title and description. 
- Once user types in description, a save button appears on top left that the user can click to save their notes.
- The user can add new note by clicking on the "cross" icon after typing them.

## Function
Note: Only the backend server was designed in this git repository. The front end was cloned from https://github.com/coding-boot-camp/miniature-eureka
The design focuses on mostly the GET, POST, and DELETE methods for the routes. The data is written using file system in a .json file.  
### GET
- GET method is used for displaying all the saved notes on the left hand side. Once the request is made, the application uses the fs module to read the .json data file and send the API to the front end.

### POST
- POST method is used for adding user note to the data. Once this request is made, fs module is used to write the data in json format to the .json file. Every note gets assigned an unique id based on the current number of notes in the .json file.

### DELETE
- DELETE method is used for deleting a note from the data file. This particular note is no longer sent by GET method. The front end makes this request with an id. This id is then matched with the id of any note in the file. Once the id is matched, the note is deleted from the file.

