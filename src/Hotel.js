function Hotel( slots) {
    this.setHotelName(slots.name);
    this.hotelID = params.hotelID;
    this.numOfAvailableRooms = params.numOfAvailableRooms;
}
Hotel.prototype.setHotelName = function (nameStr) {
    this.name = nameStr;
};
Hotel.prototype.setHotelId = function (id) {
    this.id = id;
};
Hotel.prototype.getAvailableRoomsInHotel = function (hotel) {
    var available = 0, keys = [], i = 0;
    keys = Object.keys(Room.instances);
    var room = null;
    for (i = 0; i < keys.lengt; i++) {
        room = Room.instances[keys[i]];
        if (room.getHotelOwner() == this.hotelID) {
            
        }
    }
};

Hotel.prototype.toString = function () {
    var i = 0, str = "";
    str = "Hotel \"" + this.name + "\" has the rooms:\n";
    for (i = 0; i < this.rooms.length; i++) {
        //console.log("in for cycle");
        str += this.rooms[i].toString() + "\n";
    }
    return str;
};


//testing
Hotel.instances = {};
Hotel.generateTestData = function () {
    //console.log("In the func");
    var testRooms = [
        new Room({ num: "301", currentAvailability: true, dates: [] }),
        new Room({ num: "302", currentAvailability: true, dates: [] }),
        new Room({ num: "303", currentAvailability: true, dates: [] })
    ];
    var newHotel = new Hotel({ name: "Fancy Hotel", numOfAvailableRooms: 3, rooms: testRooms });
    var newHotel2 = new Hotel({ name: "The Best", numOfAvailableRooms: 3, rooms: testRooms });
    console.log(newHotel.toString());
    console.log(newHotel2.toString());
};
//Hotel.generateTestData();

Hotel.doSomething = function () {
    var el = document.getElementById('myCarousel');

    el.addEventListener("slide.bs.carousel", function () {
        document.getElementById("textPlace").innerHTML = "TEXT TEXT TEXT";
    });
};