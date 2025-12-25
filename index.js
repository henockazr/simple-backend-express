import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/students.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Server Express.js started succesfully');
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});