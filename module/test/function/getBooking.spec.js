import request from "supertest";
import { baseUrl } from "../../data/config.js"

async function getBookingAll(){
    const response = await request(baseUrl)//base url
        .get("/booking")//endpoint

    return (await response)
}

async function getBookingParams(paramFirstName,paramLastName){
    let response = await request(baseUrl)//base url
        .get(`/booking`+`?firstname=${paramFirstName}&lastname=${paramLastName}`)//endpoint with query param
      
    return (await response)
}

async function getBookingId(bookingId){
    let response = await request(baseUrl)//base url
        .get(`/booking/${bookingId}`)//endpoint with id path

    return (await response)
}

export const getBooking = {
    all : getBookingAll,
    params : getBookingParams,
    id : getBookingId,  
}