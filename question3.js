import express from 'express'

const app = express();

const port = 3000

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! John Maverick P. Villarta' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

