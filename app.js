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
//!-------type interfaces 
//? defines the shape of an object
//# sourceMappingURL=app.js.map