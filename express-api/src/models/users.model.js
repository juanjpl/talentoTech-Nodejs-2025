export class User{
    constructor(name, email){
        this.id= crypto.randomUUID(),
        this.name=name;
        this.email=email;
    }

    /*
    set name(value){
        if(typeof value !== "string"){
            return 
        }
        this.name=value;
    }
        */
}