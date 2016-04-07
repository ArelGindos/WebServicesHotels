'use strict';

var EventEmitter = require('events').EventEmitter,
    express = require('express'),
    eventsConfig = require('./config').events;

var logData;

class Hotel extends EventEmitter {
    constructor(hotelData) {
        super();
        this.data = {
            hotel: hotelData.name,
            location: hotelData.location,
            rating: hotelData.rating ? hotelData.rating : 0
        };

        this.on(eventsConfig.ADD, function() {
            this.printHotelData();
        });

        this.on(eventsConfig.REMOVE, function() {
            if(this.data.rating <= 0) {
                var errMsg = "Can't go lower then 0 :( "
                console.log(errMsg);
                logData += errMsg;
            }
            else {
                this.data.rating--;
            }
            this.printHotelData();
        });
    }

    addStar() {
        this.data.rating++;
        this.emit(eventsConfig.ADD);
    }

    removeStar() {
       this.emit(eventsConfig.REMOVE);
    }

    printHotelData() {
        logData += this.data;
        console.log(this.data);
    }
}

module.exports = Hotel;











