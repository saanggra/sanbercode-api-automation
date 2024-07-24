//contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = "sally"
const paramLastName = "brown"
const bookingId = "78"

//describe the test suite
describe("Get All Booking", () => {
    it('Positive-success get all booking', async () => {
        let response = await request(baseUrl)//base url
            .get("/booking")//endpoint

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        //expect ((await response).body).to.include('bookingid')
        //console.log((await response).body)
                
    })

    it('Positive-success get all booking with param', async () => {
        let response = await request(baseUrl)//base url
            .get(`/booking`+`?firstname=${paramFirstName}&lastname=${paramLastName}`)//endpoint with query param

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        //expect ((await response).body).to.include('bookingid')
        //console.log((await response).body)
                
    })

    it('Positive-success get all booking id', async () => {
        let response = await request(baseUrl)//base url
            .get(`/booking/${bookingId}`)//endpoint with id path

            console.log(`/booking/${bookingId}`)

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        //expect ((await response).body).to.include('bookingid')
        console.log((await response).body)
                
    })
})

describe("Get Booking Scenario by Function", () => {
    it("success Get Booking all by function", async () => {
        const response = await getBooking.all();
        console.log((await response).status)

        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})