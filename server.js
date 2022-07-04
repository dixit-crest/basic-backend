const express = require("express")
const CONSTANTS = require("./constants")
const userRoutes = require("./routes/userRoutes")
const app = express()
const cors = require("cors");

const mongoose = require("mongoose")
const messages = require("./constants/messages")
app.use(cors())
mongoose.connect(CONSTANTS.DB_STRING)
const db = mongoose.connection

db.once("open", () => console.log(messages.DB_CONNECTED))
db.on("error", () => console.log(messages.DB_CONNECTION_ERROR))

app.use(express.json())
app.use("/users", userRoutes)

app.listen(CONSTANTS.PORT, () => {
    console.log(`Listening on port ${CONSTANTS.PORT}`);
})