const express = require('express');
const app = express();//middleware
const PORT = 3000;

app.use(express.json() ); //now every request will go throw this expresjeson middleware and will convert the bosdy  to json and make abailaba in our post callback

app.get('/tshirt', (req, res) => {
   res.status(200).send({
       tshirt:'👕',
       size: 'large'
   })
});

app.listen(
  PORT,
  () => console.log(`Server is running on http://localhost:${PORT}`)
);

app.post('/tshirt/:id' , (req,res) => {

    const { id }  = req.params;
    const{ logo } = req.body;

    if (!logo){
        res.status(418).send({message:'We need a logo!'})

    }

    res.send({
        tshirt:`👕 with your ${logo} and ID of ${id}`,
    });

});