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


class Device{
  name:string;
  price:number;

  constructor(){
    this.name="ajay",
    this.price=12000
  }
}

let d1=new Device();
let d2=new Device();

console.table(d1);
console.table(d2);

//! constructor-------------
//----------------------------------------------
class HumanMaker{
  age=0
constructor(public name:string,handsom:boolean){
}
}
let  ob1=new HumanMaker("ajay",true)
//---------------------------------------------
class HumanMaker2{
  constructor(public name:string,public age:number=0){
  }
}

let ob2=new HumanMaker2('ajay')
console.log(ob2)
//-------------------------------------------
class bottelMaker{
  constructor(public brand:string, public material:string, public color:string , public price:number){}
}
let b3=new bottelMaker("miltion","glass",'violet',700)
console.table(b3)

let b4=new bottelMaker("cello","palstic","blue",230)

//----------------------------------------------------


class Music{
  public name;
  public artist;
  public palylist;
  public length;
  public free;

  constructor( name:string,  artist:string,  playlist:string,  length:string, free:string){
      this.artist=artist,
      this.name=name,
      this.length=length,
      this.free=free,
      this.palylist=playlist
  }
}

const music1=new Music("jai jai shyama jai jai shyma jai jai shree vrindavan dham","guru Maharaj","moksh","5 mint","yes",)
console.table(music1)

//! this key word....

console.log("This key word..................................\n\n")

class ABcd{
  name="ajay";
  changeSomeStuff(){
    console.log(this.name)
    this.changeSomeMoreStuff()
  }
  changeSomeMoreStuff(){
    console.log("hey")
  }
}
const onjs=new ABcd()

console.log(onjs)


//!   classes Object and Public & Private Access Modifier

console.log("\n\nclasses Object and Public & Private Access Modifier\n");

// console.log("* Public");
console.log("\n1. protected\n\n")


class BottleMaker {
  constructor(private name:string){
  }
}

const Boottle=new BottleMaker("trumbler")
// Boottle.name="water bottel"

console.log(Boottle)


console.log("\n2. protected\n\n")

class BottleMAker2{
     constructor(private name:string){
      this.name=name
     }
     changing(){
      this.name="ajay"
     }
}

let b1=new BottleMAker2("Milton")
console.log(b1)
b1.changing()
console.log(b1)

console.log("\n extend the property of parent class \n\n")

class NewBottle {
  public name: string;
  protected founderName: number;
  protected free:boolean=true;
  private findme:string="koun create kea hai"

  constructor(name: string, founderName: number) {
    this.name = name;
    this.founderName = founderName;
  }
}


class MetalBottleMaker extends NewBottle {
  public price: number;

  constructor(name: string, founderName: number, price: number) {
    super(name, founderName);
    this.price = price;
  }

  getValue() {
    console.log(this.name);        
    console.log(this.founderName);  
    console.log(this.free)
    // console.log(this.findme)
  }
}

let metalBottle = new MetalBottleMaker("Tumbler", 1990, 55000);
console.table(metalBottle);
metalBottle.getValue();
