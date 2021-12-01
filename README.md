## Basic Template NodeJS

NodeJS―Express―MySQL

🌱

**A simple NodeJS template with :**

 - Authentication system <br />
 ↪ Register <br />
 ↪ Login <br />
*(Logout in front, so no need for a logout route, an expiration of the jwt within 24 hours is enough.)* <br />

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

Download this repo, <br />
Create "private_key.js" in "auth" folder, with inside : <br />
`module.exports = "CUSTOM_PRIVATE_KEY"` (Custom you key, obviously). <br />
And finally change all "Template" string. <br />
  (package.json → change all your infos **or** reset a package.json with "npm init"; <br />
  sequelize.js → Name of DB; <br />
  home.html → change the text) <br />

―

⚠️ You need XAMPP to run this back locally. ⚠️<br />
If you button "Got to Application doesn't work :"<br />
`http://localhost/phpmyadmin/`
