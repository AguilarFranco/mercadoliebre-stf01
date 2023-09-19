const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});