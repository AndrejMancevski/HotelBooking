function Hotel (slots) {
    this.name = slots.name;
    this.rooms = [];
    if (slots.rooms !== undefined) {
        this.rooms = slots.rooms;
    }
}
Hotel.prototype.toString = function () {
    var str = "";
    str += "Hotel " + this.name + " has the following rooms:";

    this.rooms.forEach(function (room) {
        str += room.toString() + "\n";
    });
    return str;
}
Hotel.prototype.addRoom = function (room) {
    this.rooms.push(room);
}
/*--- generate test data ---*/
Hotel.instances = {};

Hotel.saveAll = function () {
    var hotelTable = "";
    var numOfHotels = Object.keys(Hotel.instances).length;
    hotelTable = JSON.stringify(Hotel.instances);
    localStorage['hotelsTable'] = hotelTable;
    console.log(numOfHotels + " hotels stored");
}

Hotel.prototype.createTestData = function () {
    Hotel.instances['Hotel1'] = new Hotel({ name: "First Place" });
    Hotel.instances['Hotel2'] = new Hotel({ name: "Hotel down the Street" });
    Hotel.instances['Hotel3'] = new Hotel({ name: "Marriottoottop" });

    Hotel.saveAll();
}