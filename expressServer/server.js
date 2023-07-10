const { clear } = require("console");
const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(request, response) {
  const filePath = path.join("C:", "Users", "SHOAIB", "Desktop", "Git_Task", "Muhmmad-shoaib", "Movies", "index.html");
  response.sendFile(filePath);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3000');
});

