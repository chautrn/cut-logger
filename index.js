const app = require('express')();
const mysql = require('mysql');
const PORT = 5000;

app.set('view engine', 'ejs');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'KevinChau3$',
	database: 'hairnlinesalon'
});

db.connect(err => console.log(err));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	db.query('INSERT INTO clients VALUES ()')
});

app.get('/clients/:id', (req, res) => {
	let result;
	db.query('SELECT * FROM clients WHERE id = ? LIMIT 1', [req.params.id], (error, results, fields) => {
		res.render(__dirname + '/templates/client.ejs', {first: results[0].first});
	});
	
});

const server = app.listen(PORT, () => {
	console.log('server online');
});
