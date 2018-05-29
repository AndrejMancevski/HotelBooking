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