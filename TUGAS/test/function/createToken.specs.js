import request from "supertest"
import { baseUrl } from "../../data/config.js"

export async function createToken(){
    
        const payload = {
            "email" : "Virtual.cheers@gmail.com",
            "password" : "vcs123456"
        }
        //send request
        const response = await request (baseUrl)
            .post("/authentications") //endpoint
            .send(JSON.stringify(payload)) //request body
            .set("Content-Type", "aplication/json") //header   
            
        const token = (await response).body.token
        return token
}