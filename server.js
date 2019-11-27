const express = require('express')
const port = 8080
const app = express();

 app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 













app.listen(port, ()=> {
    console.log('App is listening on port', port)
})