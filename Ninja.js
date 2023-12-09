class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.force = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Nombre: ", this.name,  "\nhealth: ", this.health, "\nspeed: ", this.speed, "\nforce: ", this.force);
    }
    drinkSake (){
        this.health += 10;
    } 
}

class  Sensei extends Ninja {
    constructor(name){
        super(name);
        super.health = 200;
        super.force = 10;
        super.speed = 10;
        this.sabiduria = 10;
    }
    speakWisdom (){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const superSensei = new Sensei("Master Splinter");

superSensei.showStats();
superSensei.speakWisdom();