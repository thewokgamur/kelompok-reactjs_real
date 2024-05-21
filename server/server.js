//node index.js
const express = require('express')
const mysql = require("mysql");
const cors = require('cors')
const multer = require('multer') //http://expressjs.com/en/resources/middleware/multer.html npm install --save multer
 
const app = express();
exports.app = app;
app.use(cors())
app.use(express.json())
app.use(express.static('public'));
 
const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "P"
})
 
con.connect(function(err) {
    if(err) {
        console.error("Error in Connection", err);
    } else {
        console.log("Connected");
    }
})
 
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images")
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})
 
const upload = multer({storage})

app.get("/product", (req, res) => {
    const sql = "SELECT * FROM product";
    con.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


app.post('/create', upload.single('file'), (req, res) => {
    if(!req.body || !req.body.name || !req.body.price) {
        return res.json({Error: "Name and price are required"});
    }
    if(!req.file) {
        return res.json({Error: "File is required"});
    }
    const sql = "INSERT INTO product (`name`,`price`,`deskripsi`,`image`) VALUES (?, ?,?, ?)"; 
    const values = [
        req.body.name,
        req.body.price,
        req.body.deskripsi,
        req.file.filename
    ]
    con.query(sql, values, (err, result) => {
        if(err) {
            console.error("Error in query", err);
            return res.json({Error: "Error in query"});
        }
        return res.json({Status: "Success"});
    })
})
 
app.listen(3001, () => {
  console.log("Server is running")
})

