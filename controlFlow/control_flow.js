let userRole = "Employee";
let accessLevel;

if (userRole === "Enrolled Member") {
    accessLevel = "Full access granted";
} else if (userRole === "Employee") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "Enrolled member") {
        userMessage = "Dietary services and one-on-one interaction with dietician";
    } else if(userRole == "Employee") {
        userMessage = "Dietary services";
    }
    else if (userRole== Subscriber){
    userMessage = "Partial access to facilitate Dietary Services only";
}}
else {"You Need to enroll or at least subscribe first to avail this facility"}
console.log("Package: ", userMessage);
