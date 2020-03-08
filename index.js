const express = require('express');
const cors = require('cors');
const monk = require('monk');
const app = express();
const ratelimit = require('express-rate-limit');
const db = monk('localhost/meower');
const mews = db.get('mews');
app.use(cors());
app.use(express.json());
//it is a body parser any request that has type 'application/json' will be parsed and added to the body
app.get('/',(req,res) => {
    res.json({
        message: 'Hello World!!!'
    });
});
app.get('/mews', (req, res) => {
  mews
    .find()
    .then( me => {
      res.json(me);
    });
});
function isValid(s){
    return s.name && s.name.toString().trim() !== '' && s.content && s.content.toString().trim() !== '';
}
app.use(ratelimit({
    windowMs: 10 * 1000,
    max: 5
}));
app.post('/mews',(req,res) =>{
    if(isValid(req.body)){
        const mew ={name: req.body.name.toString(),content: req.body.content.toString(),created: new Date()
        };
        console.log(mew);
        mews.insert(mew).then(createdMew => {
            res.json(createdMew);
        });
    }
    else{
        res.status(422); res.json({ message: 'Hey!Name and Content are required!'
        });
    }
});
app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});