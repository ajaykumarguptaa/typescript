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
    }
}
let metalBottle = new MetalBottleMaker("Tumbler", 1990, 55000);
console.table(metalBottle);
metalBottle.getValue();
//# sourceMappingURL=obj.js.map