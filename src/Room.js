function Room (slots) {
    this.name = slots.name;
    this.reservedDates = [];
}
Room.prototype.reserveRoom = function (dateStart, dateEnd) {
    if (checkValidDateInterval(dateStart, dateEnd)) {
        y = dateStart.getFullYear();
        m = dateStart.getMonth();
        d = dateStart.getDate();
        var dateTemp = new Date(y, m, d);
        while (dateTemp.getTime < dateEnd.getTime) {
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
    if (dateStart < dateEnd)
        return true;
    else return false;
}