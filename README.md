# Mean Girls App

## Overview 
This App is a repository of some of the most memorable characters in the movie Mean Girls with their hilarious quotes. The app navigates you through three links - home, characters and create-a-character page. 

## Technologies
This app uses React JS with a json server.

## Features
Nav Link 1 Home - displays the app name.
Nav Link 2 Characters - displays character cards with name, picture, quote and an optional delete button.
Nav Link 3 Create New Character - provides a form that enables the user to submit a name, photo link and a quote and when submitted, displays it on the Characters page.

## File Structure
App.js - The page container and the main parent which contains all the routes.
Home.js - Landing page that contains title and information about the app.
NavBar.js - Contains links to different pages
CharacterList.js - Displays all the individual character cards(CharacterCards) in the Characters page.
CharacterCard.js - Fetches data from db.json and displays it as one individual card, with optional delete button.
NewCharacter.js - A form that asks for information and posts to db.json when submitted.