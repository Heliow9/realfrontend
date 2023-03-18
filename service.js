const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

let transporter = nodemailer.createTransport({
    host: "smtps.uhserver.com",
    port: 465,
    secure: true,
    auth: {
        user: "faleconosco@realenergy.com.br",
        pass: "real@0102"
    }

});

app.post('/sendmailfale', (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let motivo = req.body.motivo;
    let menssage = req.body.menssage;
    transporter.sendMail({
        from: `${nome} <faleconosco@realenergy.com.br>`,
        to: "faleconosco@realenergy.com.br",
        subject: motivo,
        text: menssage

    }).then((message) => {
        res.json({
            "result": `Mensagem enviada com sucésso!`
        })
    }).catch((err) => {
        res.send(err)
    })
})

app.get('/', (req, res) => {
    res.json({"author" : "Helio Livramento", "Domain": "realenergy.com.br"})
})

app.listen(21055, () => {
    console.log('Server Online')
})