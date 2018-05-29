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