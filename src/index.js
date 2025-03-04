const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mjoaopaulonamorim:FOw1eYS4wnd3pB4h@starwars-api.q2qdw.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api');
app.use(express.json());

const Film = mongoose.model('Film', { 
    id:String,
    tittle: String, 
    description:String,
    image_url: String,
    trailer_url: String

});


app.get('/',async(req, res)=>{

    const films = await Film.find()
    return res.send(films)
})

app.post("/", async(req,res)=>{
    const film = new Film({
        tittle: req.body.tittle,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url

    })
    await film.save()
    return res.send(film)
})

app.delete("/:id", async(req, res)=>{
    const film = await Film.findByIdAndDelete(req.params.id)
    return res.send(film)
})

app.put("/", async(req,res)=>{
        const film = await Film.findByIdAndUpdate(req.params.id,{
        
        })
})
app.listen(port, ()=>{
    console.log(`App running`)
})
