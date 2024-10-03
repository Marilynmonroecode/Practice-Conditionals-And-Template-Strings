function jobApplicationEligibility (age, yearsExperience, knowsJavascript) {
    if ((age >25 && age <50 && yearsExperience >5 && knowsJavascript===true) || (age <30 && yearsExperience>=3 )) {
        console.log("Eligible for the job")
    
    }
    
    else { console.log("not eligible")}
        

}
jobApplicationEligibility(29,3,true)