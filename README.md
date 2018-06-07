![cf](http://i.imgur.com/7v5ASc8.png) 43: Socket IO and Realtime

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
* Submit a pull request to this repository
* Submit a link to your pull request on canvas
* Submit a question, observation, and how long you spent on canvas 
  
## Learning Objectives  
* Students will learn to add realtime connections from thier cilent to their server

#### Feature Tasks  
Create an application that allows users to chat with each other in realtime.

### Model 
* Create a history model that defines what a speech bubble can display in a chat room

#### backend
* Add Socket IO to your backend, with a means for adding subscriber handlers 
* Subsribe to events dispatched from the frontend
  * In your subscibers publish data to the frontend to update the chat

#### frontend 
* Add Socket IO to your frontend, with a means for adding subsciber handlers
* Subscribe to the backend events
  * Update the store when the backend sends payloads

#### Documentation  
Write a description of the project in your README.md, including detailed
instructions for how to build your app. 

