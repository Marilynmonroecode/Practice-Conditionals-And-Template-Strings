function Access(age) {
    if (age >= 18 && age < 65) {
        console.log("Access Granted");
    } else if (age < 18) {
        console.log("Access denied. You are too young");
    } else if (age > 65) {
        console.log("Access denied. You are too old");
    } else {
        console.log("Invalid age");
    }
}

// Call the function with the age you want to test
Access(16);
