function Room (params) {
    this.setRoomNumber(params.num);
    this.currentAvailability = params.currentAvailability;
    this.setReservedDates(params.dates);
    this.characteristics = params.characteristics;
    this.hotelOwner = params.hotelOwner;
};
//colllection of all the rooms, initially an empty map
Room.instances = {};

Room.getHotelOwner = function () {
    return this.hotelOwner;
}
//room availability setter and checker
Room.prototype.setCurrentAvailability = function (availability) {

};
Room.checkAvailabilityOnDay = function (dayInquired) {
    var isAvailable = true;
    var querryDay = dayInquired.getDate(),
        querryMonth = dayInquired.getMonth(),
        querryYear = dayInquired.getFullYear();
    
    var startDate = null, endDate = null;
    var i = 0, j = 0;
    //go throug all the dates
    for (i = 0; i < this.reservedDates.length; i++) {
        startDate = this.reservedDates[i][0];
        endDate = this.reservedDates[i][1];

        if(startDate){}
        
    }
};
Room.isDateInInterval = function (dateToCheck, startDate, endDate){
    var isIn = true;
    var day = dateToCheck.getDate();
    var mon = dateToCheck.getMonth();
    var year = dateToCheck.getFullYear();
    if (startDate.getFullYear() === endDate.getFullYear()) {
        if (year != startDate.getFullYear()) { return false; }
        else if (startDate.getMonth() === endDate.getMonth()) {
            if (mon != startDate.getMonth()) { return false;}
            (day >= startDate.getDate() && day <= endDate.getDate())
            ? isIn = true : isIn = false;
            return isIn;
        } else { //mora togas mesecite da se razlicni
            
        }
    }
};
Room.prototype.toString = function () {
    return "Room: { number: " + this.roomNumber + "}";
}
//testing
Room.instances = {};
Room.generateRooms = function () {
    Room.instances["301"] = new Room({ num: "301", currentAvailability: true, dates: [] });
    Room.instances["302"] = new Room({ num: "302", currentAvailability: true, dates: [] });
    Room.instances["303"] = new Room({ num: "303", currentAvailability: true, dates: [] });
}
