# Burger Eater

Burger Eater is a full stack web application in which users add burgers, "eat" them, and then delete them from the list of devoured burgers. This applications makes use of the MVC framework to handle routing, modeling, and rendering of user views.

## Develop

Clone the repository and then `npm install` the dependencies.

```
git clone <this repo>
cd /burger
npm install
```
If you are serving this project locally, note that you will need to create a `.env` file and include your database password. You can use the `schema.sql` file to construct your database and table, and then populate it using the `seeds.sql` file. Once you've constructed the database, run `node server.js` or `npm start` to fire up the server and use the application at the localhost. 

## Technologies Used
- JavaScript
- Node.js
- Express
- Handlebars
- HTML/CSS
- dotenv
- MySQL
- Heroku + JawsDB (for deployment)

## Contribute

This was built by Kenny Whitebloom (https://github.com/calemonte) as part of a coding class, but if you are interested in contributing, feel free to open a pull request from a new branch.

## Notes

The Heroku deployment is currently not working properly. I will update this once the issue has been resolved.