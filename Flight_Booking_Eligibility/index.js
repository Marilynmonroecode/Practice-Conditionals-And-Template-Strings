function bookingEligibility (age, hasPassport, isFlightAvailable) {
    if (age>=18 && age<=70) {
        if (hasPassport===true){
            if(isFlightAvailable===true){
                console.log("Booking successful")
            }
        }
    }

    else{
        return"Booking failed"
    }
}
console.log(bookingEligibility(12,true,true))
