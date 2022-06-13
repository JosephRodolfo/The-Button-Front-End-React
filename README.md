# The Button

For use with Node.js API backend here: https://github.com/JosephRodolfo/The-Button-Backend-MySQL-NodeJS. 

This is a deceptively simple game based on pushing the button from the television series ***LOST*** (https://lostpedia.fandom.com/wiki/Pushing_the_button) and the online game The Button (https://en.wikipedia.org/wiki/The_Button_(Reddit)). Players push a button which then resets the timer to a random number in the future which is set in a MySQL database. The front end then calculates the remaining time and displays that as a slowly decrementing progress bar, which is common to all players. In addition, there's a secret /admin route with authentication for an admin to set the frequency of server calls to update the players end date (in case the button expires or another player presses it) and to update how long in the future the buttons expiration date will be set. Authentication uses cookies. 

It's built using MySQL, React, Javascript, SCSS, Socket.io, and a few more, with a goal being making components reusable, and making the components focused purely on visual rendering with logic and calculation seperated out into controllers. 
