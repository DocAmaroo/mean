# Packages
```bash
npm i -g nodemon @angular/cli@latest
```

## On /mean/api
```bash
<<<<<<< HEAD
npm i --save express mongodb mongoose body-parser cors
=======
npm i --save express mongodb mongoose body-parser cors dotenv
>>>>>>> origin/Thominou
```

## On /mean/front
```bash
npm i --save jquery bootstrap @fortawesome/fontawesome-free
```

# Install MongoDB
Installation instruction [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

# Environnement file
```bash
# On /mean/api create a new .env file
touch .env
nano .env

# copy and paste this
PORT=8888
DB_CONNECTION=mongodb://localhost:27017/SUPERVENTES
```

# Run scripts to create & add elements on database
```
#on /mean
./creationBase.sh
``` 

# Angular.json
Add this line on Angular.json
```json5
//...
"styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/@fortawesome/fontawesome-free/css/all.css"
    ],
    "scripts": [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
//...
```
# Start NodeJS Server
```bash
sudo systemctl start mongod
npm run dev
```

# Start Angular
```bash
<<<<<<< HEAD
npm serve -o
=======
ng serve -o
>>>>>>> origin/Thominou
```
