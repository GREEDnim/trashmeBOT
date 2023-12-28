const API= require('./api')

async function getResponse(prompt){

    try{
        const response =await API.post('/generate',{
            "userMessage":{
                "role":"user",
                "content":prompt
            },
            "history":[],
            "style":"default"
        })
        
        const message = response?.data?.content;
        console.log(response);
        if(!message) throw new Error("no response from api");

        return message;
    
    }catch(e){
        console.log(e.message);
        return "shut, loser"
    }
   
}

module.exports={
    getResponse
}
