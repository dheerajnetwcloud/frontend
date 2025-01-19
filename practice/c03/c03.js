var message = "Good morning!, Please start your day with a smile!";

function showMessage() {
    document.write('<h3>' + message + '</h3>');
    document.write('<p>Have a nice day!</p>');
}

showMessage();


var msg = "Molly the Cat";

document.write('<h3> Lower Case :  ' + msg.toLowerCase() + '</h3>');
document.write('<h3> Upper Case :  ' + msg.toUpperCase() + '</h3>');
document.write('<h3> Length :  ' + msg.length + '</h3>');
document.write('<h3> Character at position 5 :  ' + msg.charAt(5) + '</h3>');
document.write('<h3> First occurence of character "t" :  ' + msg.indexOf('t') + '</h3>');


var hotel = {  
    name: 'Marriot',
    location: 'Bangalore',
    rooms: 100,
    booked: 50,
     available : function(){
        return this.rooms - this.booked;
     }
};

document.write('<h3> Hotel Name :  ' + hotel.name + '</h3>');
document.write('<h3> Available :  ' + hotel.available() + '</h3>');

var hotel2 = new Object();
hotel2.name = 'Taj';
hotel2.location = 'Mumbai';
hotel2.rooms = 200;
hotel2.booked = 100;
hotel2.available = function(){
    return this.rooms - this.booked;
};

document.write('<h3> Hotel Name :  ' + hotel2.name + '</h3>');
document.write('<h3> Available :  ' + hotel2.available() + '</h3>');

var hotel3 = {};
hotel3.name = 'Aloft';
hotel3.location = 'Mumbai';
hotel3.rooms = 200;
hotel3.booked = 100;
hotel3.available = function(){
    return this.rooms - this.booked;
};

document.write('<h3> Hotel Name :  ' + hotel3.name + '</h3>');
document.write('<h3> Available :  ' + hotel3.available() + '</h3>')


function Hotel(name, location, rooms, booked){
    this.name = name;
    this.location = location;
    this.rooms = rooms;
    this.booked = booked;
    this.available = function(){
        return this.rooms - this.booked;
    };
}

var hotel4 = new Hotel('Hyatt', 'Pune', 300, 150);
document.write('<h3> Hotel Name :  ' + hotel4.name + '</h3>');
document.write('<h3> Available :  ' + hotel4.available() + '</h3>');

document.write('<h3> Available :  ' + hotel4.available() + '</h3>');

//window.alert(hotel4.name + ' is located in ' + hotel4.location + ' and has ' + hotel4.available() + ' rooms available.');

document.write('<h3> Available :  ' + hotel4['available'] + '</h3>');

document.write('<h3> Available :  ' + hotel4['available']() + '</h3>');

var today = new Date();

document.write('<h3> Date :  ' + today + '</h3>');