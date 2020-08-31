const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 5000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'KevinChau3$',
	database: 'hairnlinesalon'
});

db.connect(err => console.log(err));

app.get('/', (req, res) => {
	res.render(__dirname + '/templates/home.ejs');
});

app.post('/', (req, res) => {
	db.query('INSERT INTO clients VALUES ()')
});

app.get('/clients/:id', (req, res) => {
	db.query('SELECT * FROM clients WHERE id = ? LIMIT 1', [req.params.id], (error, results, fields) => {
		res.render(__dirname + '/templates/client.ejs', {first: results[0].first});
	});
});

app.get('/allnames', (req, res) => {
	db.query('SELECT CONCAT(first, " ", last) as name FROM clients', (error, results, fields) => {
		res.send(results.map(i => i.name));
	});
});

const server = app.listen(PORT, () => {
	console.log('server online');
});
