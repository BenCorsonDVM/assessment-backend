const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//COMPLIMENT
const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

//FORTUNE
const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune)

//ADD A RANDOM USER
const {addARandomUser} = require('./controller')

app.post("/api/users", addARandomUser)
//UPDATE RANDOM USER
const {updateRandomUser} = require('./controller')

app.put('/api/users/:username', updateRandomUser)
//DELETE RANDOM USER
const {deleteRandomUser} = require('./controller')

app.delete('/api/users/:username', deleteRandomUser)


app.listen(4000, () => console.log("Server running on 4000"));

