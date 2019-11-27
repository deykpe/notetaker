const express = require('express')
const port = 8080
const app = express();
const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");

 app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes); 













app.listen(port, ()=> {
    console.log('App is listening on port', port)
})