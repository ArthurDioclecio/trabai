import { infos } from "./function.js";
const host='https://dattebayo-api.onrender.com'



fetch(`${host}/characters`, {
    method: "GET",
    headers: {
        Accept:"application/json"
    }
}).then((response)=>{
    return response.json()
}).then((data)=>{
    let ids = data
    
   

    var id = []
    for (let count = 0; count < ids.characters.length; count++){
        id.push(ids.characters[count].id)
        
    }
    console.log(id)

    console.log("oi")

    var info = []

    async function lista() {
    
    for (let i =0; i < id.length; i++){

        const temp = await infos(id[i])
        info.push(temp)
     }


    }
     
    lista().then(() => {
        console.log(info)
    }).catch((error)=>{
        console.log.apply(error)
    })


}).catch((error)=>{
    console.log.apply(error)
})
