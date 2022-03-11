const express = require('express');

const databaseConnection = require("./db")
const userRoute = require("./routes/user")

const app = express();

app.use(express.json({ extended: false }))

databaseConnection();


// app.use((req, res, next) => {
//     console.log('Logger');
//     next()
// })
// app.get('/', (req, res) => {
//     res.json({ name: 'Hassan', id: "1" })
// })
// app.get('/users', (req, res) => {
//     res.status(200).send({
//         success: true
//     })
// })

app.use('/api/v1/', userRoute)

app.use((req, res) => {
    res.status(404).send({
        message: "API route not found",
        route: `${req.hostname}${req.url}`
    })
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on 127.0.0.1:${port}`))