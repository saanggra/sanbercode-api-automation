import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get Token Scenario", () => {
    let token;
    it("Positive - Success Get Token", async () => {
        const payload = {
            "username" : "admin",
            "password" : "password123"
        }
        //send request
        const response = await request (baseUrl)
            .post("/auth") //endpoint
            .send(JSON.stringify(payload)) //request body
            .set("Content-Type", "aplication/json") //header   
            
        expect((await response).status).to.equal(200)
        //console.log((await response).body)
        token = (await response).body.token
        //console.log(await token)
    })

    //it("Positive - Success Implement Token", async () => {
        //console.log(await token)
    //})

    //it("Positive - Success Put Token", async () => {
        //put method
        //const response = await request(baseUrl)
            //.put("/booking/"+bookingId)
            //.send(payload)
            //.set("Cookie", token)
        //console.log(await token)
   // })
})

it("Import token", async () => {
    const token = await createToken()
    console.log(await token)
    
})

//it Get Token
//it Create
//it Get
//it Delete
//flow CRUD di API Automation