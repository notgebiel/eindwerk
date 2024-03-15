const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const passport = require('./pp');
const session = require('express-session');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUnitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.send('hello from server');
})

//send data to front-end
app.get('/api/data', (req, res) => {
    const data = {
        message: 'server linked',
        timestamp: new Date()
    }
    res.json(data);
})

//receive data from front-end
app.post('/api/data/receive', (req, res) => {
    const receivedData = req.body;
    console.log('Received data: ', receivedData);

    res.json({message: 'Data received!'});
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})