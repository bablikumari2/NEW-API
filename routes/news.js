const express = require('express')
const axios = require('axios');

const router=express.Router()



router.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=4183824d24737afcaf09bd21221a0a6f';

      

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})




    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

router.post('/search',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=4183824d24737afcaf09bd21221a0a6f`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})





    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


module.exports=router