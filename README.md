# The Button

For use with Node.js API backend here: https://github.com/JosephRodolfo/The-Button-Backend-MySQL-NodeJS. 

This is a deceptively simple game based on pushing the button from the television series ***LOST*** (https://lostpedia.fandom.com/wiki/Pushing_the_button) and the online game The Button (https://en.wikipedia.org/wiki/The_Button_(Reddit)). Players push a button which then resets the timer to a random number in the future which is set in a MySQL database. The front end then calculates the remaining time and displays that as a slowly decrementing progress bar, which is common to all players. In addition, there's a secret /admin route with authentication for an admin to set the frequency of server calls to update the players end date (in case the button expires or another player presses it) and to update how long in the future the buttons expiration date will be set. Authentication uses cookies. 

It's built using MySQL, React, Javascript, SCSS, Socket.io, and a few more, with a goal being making components reusable, and making the components focused purely on visual rendering with logic and calculation seperated out into controllers. I tried some new things in React like useCallback, return statements for component unmounteed in useEffect, and memos and more. There's no complex state management at the moment like Redux or Context, but there was no need for prop drilling either. It's a work in progress but soon to be available online! The design is intended to be Windows 95 era.

To run locally, you would install npm dependencies and set .env variables with two seperate ports and start with npm run start.

![Screenshot 2022-06-13 at 21-38-33 The Button](https://user-images.githubusercontent.com/38168806/173475123-77c748f0-fd5f-490e-ab2c-ac747c7b380f.png)
