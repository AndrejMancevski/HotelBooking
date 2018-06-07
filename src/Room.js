function Room (slots) {
    this.name = slots.name;
    this.reservedDates = [];
    this.originalId = ++Room.globalIds;
}
Room.prototype.reserveRoom = function (dateStart, dateEnd) {
    if (checkValidDateInterval(dateStart, dateEnd)) {
        //console.log("if passed");
        y = dateStart.getFullYear();
        m = dateStart.getMonth();
        d = dateStart.getDate();
        var dateTemp = new Date(y, m, d);
        while (dateTemp.getTime() < dateEnd.getTime()) {
            this.reservedDates.push(dateTemp);
            dateTemp.setDate(dateTemp.getDate() + 1);
        }
        this.reservedDates.push(dateEnd);
    }
    else {
        console.log("Invalid date interval!");
    }
};
var checkValidDateInterval = function (dateStart, dateEnd) {
    if (dateStart.getTime() < dateEnd.getTime()) {
        return true;
    }
    else { return false; }
}
/*reserving a room for a new interval*/

Room.prototype.addNewReservation = function (dateStart, dateEnd) {
    
}

Room.globalIds = "1000";

Room.prototype.toString = function () {
    var str = "";
    str += "Name: " + this.name + "\n";
    str += "RoomID: " + this.originalId + "\n";
    if (this.reservedDates.length == 0) {
        str += "This room has not been reserved";
    } else {
        str += "Dates reserved: \n";
        this.reservedDates.forEach (function (date) {
            str += date + "\n";
        });
    }
    return str; 
}

/*Getters and setters*/
Room.prototype.getId = function () {
    return this.originalId;
}
Room.prototype.getName = function () {
    return this.name;
}
/*--- generate data ----*/
Room.instances = {};

Room.saveAll = function () {
    var roomTable = "";
    numOfRooms = Object.keys(Room.instances).length;
    roomTable = JSON.stringify(Room.instances);
    localStorage["roomsTable"] = roomTable;
    console.log(numOfRooms + " rooms stored");
}

Room.prototype.createTestData = function () {
    Room.instances['h1r1'] = new Room({ name: "Room A" });
    Room.instances['h1r1'].reserveRoom(new Date(2018, 5, 21), new Date(2018, 5, 28));

    Room.instances['h1r2'] = new Room({ name: "Room B" });
    Room.instances['h1r2'].reserveRoom(new Date(2018, 5, 7), new Date(2018, 5, 14));

    Room.instances['h1r3'] = new Room({ name: "Room C" });
    Room.instances['h1r3'].reserveRoom(new Date(2018, 4, 10), new Date(2018, 4, 28));

    Room.instances['h2r1'] = new Room({ name: "Room 1" });
    Room.instances['h2r1'].reserveRoom(new Date(2018, 8, 4), new Date(2018, 8, 12));

    Room.instances['h2r2'] = new Room({ name: "Room 2" });
    Room.instances['h2r2'].reserveRoom(new Date(2018, 5, 2), new Date(2018, 5, 9));

    Room.instances['h2r3'] = new Room({ name: "Room 3" });
    //Room.instances['h1r1'].reserveRoom(new Date(2018, 5, 21), new Date(2018, 5, 28));

    Room.instances['h3r1'] = new Room({ name: "Room Alpha" });
    Room.instances['h3r1'].reserveRoom(new Date(2018, 7, 9), new Date(2018, 7, 10));

    Room.instances['h3r2'] = new Room({ name: "Room Beta" });
    //Room.instances['h3r2'].reserveRoom(new Date(2018, 5, 21), new Date(2018, 5, 28));

    Room.instances['h3r3'] = new Room({ name: "Room Gamma" });
    Room.instances['h3r3'].reserveRoom(new Date(2018, 0, 21), new Date(2018, 11, 28));
    
    Room.saveAll();
    return Room.instances;
}