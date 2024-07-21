//ini adalah api automation menggunakan common js
const Request = require("supertest");
const { expect } = require("chai");

const baseUrl = "https://restful-booker.herokuapp.com";

//describe the test suite
describe("Get All Booking", () => {
    it('Positive-success get all booking', () => {
        const response = request(baseUrl)//base url
            .get("/booking")//endpoint

        //Assertion pake chai
        expect(response.status).to.equal(200)

    })
})