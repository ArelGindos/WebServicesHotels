'use strict';var Hotel = require('./hotel_rating');

//A client app for testing hotel rating module//hotels data
var hotel1Data = {
    name: 'Malkat Shva',
    location: 'Eilat',
    rating: 5};

var hotel2Data = {
    name: 'Lodox',
    location: 'Ramat Gan',
    rating: 0
};

var richHotel = new Hotel(hotel1Data);richHotel.addStar();
richHotel.removeStar();richHotel.removeStar();richHotel.addStar();

var cheapHotel = new Hotel(hotel2Data);cheapHotel.addStar();cheapHotel.removeStar();cheapHotel.removeStar(); // if rating == 0 =>will get an error msg
