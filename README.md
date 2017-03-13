# winter-app


# Requirements
Install the following 2 softwares

1.    Node http://nodejs.org/ (Server)
2.    MongoDB https://www.mongodb.org/ (Database) 

# Install
Run the following commands and the application will start automatically

1.    npm install -g gulp
2.    npm install 
3.    gulp (gulp develop for production)

# Why lean
Lean option returns plain javascript objects, not Mongoose documents. It meas those objects don't have any save method or getters and setter, this is why with lean is way faster. 
