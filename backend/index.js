const express = require('express')
const app = express();


app.get("/", (req,res) => {
  res.send("hello from deploying app");
})



app.listen(3010, () => {
  console.log("running server");
});
