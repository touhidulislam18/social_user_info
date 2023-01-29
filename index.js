const express = require('express')
const format = require('date-format')

const app = express()

const PORT = 4000 || process.env.PORT

app.get("/", (req, res)=> {
    res.send("<h1>Hello Touhid</h1>")
})


app.get("/api/v1/instagram", (req, res)=> {
    const instaInfo = {
        username: "touhidulislam1810",
        followers: 5,
        follow: 3,
        date: format.asString("dd-MM-yyyy hh:mm:ss", new Date())
    };
    res.status(200).json(instaInfo)
})

app.get("/api/v1/facebook", (req, res)=> {
    const instaInfo = {
        username: "touhidulislam1810",
        followers: 4000,
        follow: 1500,
        date: format.asString("dd-MM-yyyy hh:mm:ss", new Date())
    };
    res.status(200).json(instaInfo)
})

app.get("/api/v1/linkedin", (req, res)=> {
    const instaInfo = {
        username: "touhidulislamrana",
        followers: 2000,
        follow: 350,
        date: format.asString("dd-MM-yyyy hh:mm:ss", new Date())
    };
    res.status(200).json(instaInfo)
})

app.get("/api/v1/:token", (req, res)=> {
    const apiValue = req.params.token 
    res.status(200).json({
        success: "true",
        param: apiValue
    })
})


app.listen(PORT, () => {
    console.log(`Service is running on ${PORT}`)
})