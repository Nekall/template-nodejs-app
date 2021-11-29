## Basic Template NodeJS

NodeJS―Express―MySQL

🌱

**A simple NodeJS template with :**

 - An authentication system (Not Complet)
 - ⋯


**Installed libraries :**
 - bcrypt
 - body-parser
 - cors
 - express
 - jsonwebtoken
 - mariadb
 - sequelize
 - serve-favicon
 - (**Dev libraries** : *morgan, nodemon*)

*NB: responses of this back are in French.*

**Installation :**

Download this repo,
Create "private_key.js" in "auth" folder, with inside :
`module.exports = "CUSTOM_PRIVATE_KEY"` (Custom you key, obviously).
And finally change all "Template" string.
  (package.json → change all your infos **or** reset a package.json with "npm init";
  sequelize.js → Name of DB;
  home.html → change the text)

―

⚠️ You need XAMPP to run this back locally. ⚠️
If you button "Got to Application doesn't work :"
`http://localhost/phpmyadmin/`
