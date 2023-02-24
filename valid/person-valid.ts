import { Person } from "../view/person-model";

export class PersonValid{
    validData(person:Person): boolean {   //recognizing that data is valid or no  / validation data
        return this.name(parent.name) &&
        this.family(person.family) &&
        this.username(person.username) &&
        this.post(person.post)
    }

    private username(us:string) : boolean{
        if(us.length >= 4 )
            return true
        else return false
    }

    private name(na:string) : boolean{
        if(na.length >= 3 )
            return true
        else return false
    }

    private family(fa:string) : boolean{
        if(fa.length >= 3 )
            return true
        else return false
    }

    private post(po:string) : boolean{
        if(po.length >= 10 )
            return true
        else return false
    }
}
