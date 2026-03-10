import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const port = 8383;

const file = 'data.json';

function readFile() {
	let data = JSON.parse(fs.readFileSync(file));
	return data;
}

function writeFile(data) {
	fs.writeFileSync(file, JSON.stringify(data));
}

app.get('/', (req, res) => {
	res.status(200).json({ info: readFile()});
})

app.post('/', (req, res) => {
	const { parcel } = req.body;
	if (!parcel) {
		return res.status(400).send({ status: 'failed' });
	}

	res.status(200).send({ status: 'recieved' });
	writeFile(parcel);
})

app.listen(port, () => console.log(`Server started on port ${port}`));