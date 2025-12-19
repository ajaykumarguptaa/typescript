"use strict";
//classe and objects 
//class defination
// constructor 
// access modifiers { public,private,protected}
// read only proprty
// Optional property
//Perametric Proerty
// getter and setter method
// statric member 
// Abstract class and methods
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    name;
    price;
    constructor() {
        this.name = "ajay",
            this.price = 12000;
    }
}
let d1 = new Device();
let d2 = new Device();
console.table(d1);
console.table(d2);
//! constructor-------------
//----------------------------------------------
class HumanMaker {
    name;
    age = 0;
    constructor(name, handsom) {
        this.name = name;
    }
}
let ob1 = new HumanMaker("ajay", true);
//---------------------------------------------
class HumanMaker2 {
    name;
    age;
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
}
let ob2 = new HumanMaker2('ajay');
console.log(ob2);
//-------------------------------------------
class bottelMaker {
    brand;
    material;
    color;
    price;
    constructor(brand, material, color, price) {
        this.brand = brand;
        this.material = material;
        this.color = color;
        this.price = price;
    }
}
let b3 = new bottelMaker("miltion", "glass", 'violet', 700);
console.table(b3);
let b4 = new bottelMaker("cello", "palstic", "blue", 230);
//----------------------------------------------------
class Music {
    name;
    artist;
    palylist;
    length;
    free;
    constructor(name, artist, playlist, length, free) {
        this.artist = artist,
            this.name = name,
            this.length = length,
            this.free = free,
            this.palylist = playlist;
    }
}
const music1 = new Music("jai jai shyama jai jai shyma jai jai shree vrindavan dham", "guru Maharaj", "moksh", "5 mint", "yes");
console.table(music1);
//! this key word....
console.log("This key word..................................\n\n");
class ABcd {
    name = "ajay";
    changeSomeStuff() {
        console.log(this.name);
        this.changeSomeMoreStuff();
    }
    changeSomeMoreStuff() {
        console.log("hey");
    }
}
const onjs = new ABcd();
console.log(onjs);
//!   classes Object and Public & Private Access Modifier
console.log("\n\nclasses Object and Public & Private Access Modifier\n");
// console.log("* Public");
console.log("\n1. protected\n\n");
class BottleMaker {
    name;
    constructor(name) {
        this.name = name;
    }
}
const Boottle = new BottleMaker("trumbler");
// Boottle.name="water bottel"
console.log(Boottle);
console.log("\n2. protected\n\n");
class BottleMAker2 {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    changing() {
        this.name = "ajay";
    }
}
let b1 = new BottleMAker2("Milton");
console.log(b1);
b1.changing();
console.log(b1);
console.log("\n extend the property of parent class \n\n");
class NewBottle {
    name;
    founderName;
    free = true;
    findme = "koun create kea hai";
    constructor(name, founderName) {
        this.name = name;
        this.founderName = founderName;
    }
}
class MetalBottleMaker extends NewBottle {
    price;
    constructor(name, founderName, price) {
        super(name, founderName);
        this.price = price;
    }
    getValue() {
        console.log(this.name);
        console.log(this.founderName);
        console.log(this.free);
        // console.log(this.findme)
    }
}
let metalBottle = new MetalBottleMaker("Tumbler", 1990, 55000);
console.table(metalBottle);
metalBottle.getValue();
console.log("\nRead only in object....................\n");
class Users {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    tryToChangeName(name) {
        this.name = name;
    }
}
const changeName = new Users("ajay");
console.log(changeName);
changeName.tryToChangeName("aman");
console.log(changeName.name);
console.log("\n Optional property......\n");
class Users2 {
    name;
    age;
    gender;
    //? parametrised constructor.....
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let user = new Users2("ajay", 21, "female");
console.table(user);
console.log("\n Getter And Setter ..............\n");
console.log("\n\n Getter..............\n");
class User3 {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this._name = _name;
        this.age = age;
    }
    // getName(){
    //   return(
    //     console.log("Getter Method Work",this.age,this.name)
    //   )
    // }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
const new_User = new User3("Aman", 45);
// console.log(new_User.getName())
// new_User.setName("Ajay kumar gupta")
console.log(new_User.name);
new_User.name = "aman gupta";
console.log(new_User.name);
console.log("\n Static mamber ..............\n");
console.log("\n if we use static in any class then we use any object without instintiated Math.pi no need to new key word \n");
class statics {
    static version = 68.5;
    static getRendomNumber() {
        return Math.floor(Math.random() * 9999);
    }
}
console.log(statics.version);
console.log(statics.getRendomNumber());
const staticss = new statics;
console.log(statics.getRendomNumber());
//# sourceMappingURL=obj.js.map