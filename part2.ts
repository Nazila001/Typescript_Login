import { IUser } from "./data_access_layer/Users";
import { UserModel } from "./view/user-model";
import { UserManage } from "./data_access_layer/Users";

{
    let user:UserModel = new UserModel();
    user.name = 'مینا';
    user.family = 'شایان';

    let client:UserManage = new UserManage();
    client.add(user);
    client.read().forEach(element => {
        (document.getElementById("name") as any).innerText += element.name;
    });
}



