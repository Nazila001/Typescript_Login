export class Person{
    username: string;
    name : string;
    family : string;
    pass? : string;
}

export interface IPerson {
    update();
    add();
    addAll();
    findPerson(id:number) : IPerson;
    edit(modal);
}
