const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser= require('body-parser');
const PORT = process.env.PORT || 8000;
const db = require('./db')
const router = require('./routers/index')


//DB Connection
db()



//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true, limit: "500mb" }));
app.use(express.json());

//cors
app.use(cors());


//api
app.use('/api', router)



// app.get('*',(req, res) => {
//     try{
//         res.send("Backend is running")
//     } catch (err) {
//         res.send('Oops! error occured')
//     }
    
// });


//server listening
app.listen(PORT, ()=> {
    console.log(`Stackoverflow clone id running on port ${PORT}`)
}) 