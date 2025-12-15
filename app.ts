// var a=12;
var a=13;
// a = "ajay"
console.log(a)
let b="aman";
console.log(b);

// basic data type primitive and reference 
// y=[1,2,3,4,5];

let name1: string="aman";


//! array

let arr=[1,2,3,"ajay",{name:"ajay"},{name:34}]
console.log(arr)

// let narr2:number[]=[1,2,3,4,"ajay"] //*  set the number have some fixed booundary 


//? tuple have fixed size and set the position on (koun kaha aie gaa) {yaha pe size 2 ka hai 0,1 index 0=> string , 1=> number} Ishq Ustad Karte Naizab Mein Fixia Ki Aire Banani Ho Aur Hame Pata Ho Ki Taipei Kaunsa Define Karna Hai.
let arr3: [string , number]

 //arr3=[2,"tina"] //! this is wrong !!!!!!!

 arr3=["ajay",45]


 
 //? Enumeration --------------------------------------------
 
//* Iran kielu Bayer Mehta's Kendra Propertiesorvsky Value Said Karijati Hai. Or jahabi use Karna Ho Hum Uska Uz Kar Sakte


//!Enum ka use tab hota hai jab hume pata ho ki kisi variable ke liye sirf kuch fixed values hi allowed hongi.

//{Enum (Enumeration) TypeScript ka ek feature hai jiska use hum fixed set of named values ko define karne ke liye karte hain.}
// Isse code zyada readable, safe aur error-free ho jata hai.

//👉 Simple words me:
//Enum = limited aur predefined values ka group

 enum UserRoles{
  ADMIN="admin",
  GUST="guest",
  SUPER_ADMIN="siper_admin"
 }

 UserRoles.ADMIN

 console.log(UserRoles.ADMIN)

enum StatusCode{
  ABANDONED=" Abundant status quo 500",
  NOTFOUND=" 404 not hound"
}


const enum HttpMethod {
  GET,
  POST,
  PUT,
  DELETE
}

let method = HttpMethod.GET;



enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED"
}

function checkStatus(status: OrderStatus) {
  if (status === OrderStatus.Delivered) {
    console.log("Order delivered");
  }
}

checkStatus(OrderStatus.Pending);



enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let role: UserRole = UserRole.Admin;
console.log(role); // ADMIN





enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // 0



//!-------type interfaces 
//? defines the shape of an object

interface User{
  name: string,
  email:string,
  password:string,
}
function abcd(obj:User){

}
abcd({name:"ajay",email:"ajay@gamil.com",password:"1234567"})


interface NewUser{
    name:string,
    email:string,
    password:string,
    gender?:string //optional
}

function newUser(obj1:NewUser){
 return console.table(obj1)
}
newUser({name:"Ajay",email:"ajay@gmail.com",password:"12sdwe3"})



//!!! ----------extend inhetit the featue if othe interface of object

interface userExtend{
  name:string,
  emai:string,
  password:string,
  gender?:string
}

interface Admin extends userExtend{
   admin:boolean,
   IsActive:boolean
}