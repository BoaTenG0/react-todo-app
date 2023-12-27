const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

//post for login
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
  // const values = [req.body.email, req.body.password];
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json("Login Successful");
    } else {
      return res.json("Login Failed, No Record");
    }
  });
});
//post for login
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO users (`email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.phone, req.body.email];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("created");
  });
});

//retrieve data from database
app.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//post data to de database
app.post("/create", (req, res) => {
  const sql = "INSERT INTO users (`name`, `phone`, `email`) VALUES (?)";
  const values = [req.body.name, req.body.phone, req.body.email];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("created");
  });
});

//update data to de database
app.put("/update/:id", (req, res) => {
  const sql = "UPDATE users set `name` = ?, `phone` =?, `email`=? WHERE id = ?";
  const values = [req.body.name, req.body.phone, req.body.email];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json("updated");
  });
});
//delete data to de database
app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json("deleted");
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8080");
});
