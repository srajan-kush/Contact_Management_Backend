const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contact.routes"));
app.use("/api/auth",require("./routes/user.routes"));
app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
})

