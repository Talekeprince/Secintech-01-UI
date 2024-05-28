const express = express.require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('API is runing')
})

app.get('/app/chats', (req, res) => {
    res.send()
})

app.listen(5000, 'server started on port 5000');


