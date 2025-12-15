"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var a=12;
var a = 13;
// a = "ajay"
console.log(a);
let b = "aman";
console.log(b);
// basic data type primitive and reference 
// y=[1,2,3,4,5];
let name1 = "aman";
//! array
let arr = [1, 2, 3, "ajay", { name: "ajay" }, { name: 34 }];
console.log(arr);
// let narr2:number[]=[1,2,3,4,"ajay"] //*  set the number have some fixed booundary 
//? tuple have fixed size and set the position on (koun kaha aie gaa) {yaha pe size 2 ka hai 0,1 index 0=> string , 1=> number} Ishq Ustad Karte Naizab Mein Fixia Ki Aire Banani Ho Aur Hame Pata Ho Ki Taipei Kaunsa Define Karna Hai.
let arr3;
//arr3=[2,"tina"] //! this is wrong !!!!!!!
arr3 = ["ajay", 45];
//? Enumeration --------------------------------------------
//* Iran kielu Bayer Mehta's Kendra Propertiesorvsky Value Said Karijati Hai. Or jahabi use Karna Ho Hum Uska Uz Kar Sakte
//!Enum ka use tab hota hai jab hume pata ho ki kisi variable ke liye sirf kuch fixed values hi allowed hongi.
//{Enum (Enumeration) TypeScript ka ek feature hai jiska use hum fixed set of named values ko define karne ke liye karte hain.}
// Isse code zyada readable, safe aur error-free ho jata hai.
//👉 Simple words me:
//Enum = limited aur predefined values ka group
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "siper_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN;
console.log(UserRoles.ADMIN);
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = " Abundant status quo 500";
    StatusCode["NOTFOUND"] = " 404 not hound";
})(StatusCode || (StatusCode = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
    HttpMethod[HttpMethod["PUT"] = 2] = "PUT";
    HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
let method = HttpMethod.GET;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
function checkStatus(status) {
    if (status === OrderStatus.Delivered) {
        console.log("Order delivered");
    }
}
checkStatus(OrderStatus.Pending);
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["User"] = "USER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
let role = UserRole.Admin;
console.log(role); // ADMIN
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move); // 0
function abcd(obj) {
}
abcd({ name: "ajay", email: "ajay@gamil.com", password: "1234567" });
function newUser(obj1) {
    return console.table(obj1);
}
newUser({ name: "Ajay", email: "ajay@gmail.com", password: "12sdwe3" });
function adminData(ExtendObj) {
    console.table(ExtendObj);
}
adminData({ name: "Ajay", email: "Aman@gmail.com", password: "186012", admin: true, IsActive: false });
//# sourceMappingURL=app.js.map