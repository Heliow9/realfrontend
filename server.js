var http = require('http');
const express = require('express');
const app = express();

function isSecure(req) {
    if (req.headers['x-forwarded-proto']) {
        return req.headers['x-forwarded-proto'] === 'https';
    }
    return req.secure;
};

app.use((req, res, next) => {
    if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test' && !isSecure(req)) {
        res.redirect(301, `https://www.realenergy.com.br`);
       
    } else {
        next();
    }
});


const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('/', (req, res) => res.sendfile('index.html'));




const port = 21042;
app.listen(port, () => {
    console.log('listening on port 3000')
})
