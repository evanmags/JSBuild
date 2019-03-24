const express = require("express"),
      app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/download/curly/:v", (req, res)=>{
  let file = __dirname + `/curly_files/curly.${req.params.v}.zip`
  res.download(file);
})

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("up and running");
});
