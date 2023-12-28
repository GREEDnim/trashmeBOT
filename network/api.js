const axios=require('axios')

const api=axios.create({
    "baseURL":"https://roastedby.ai/api",
    "headers":{
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

module.exports=api;