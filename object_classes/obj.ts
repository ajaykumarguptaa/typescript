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