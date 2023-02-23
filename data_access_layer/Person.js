"use strict";
exports.__esModule = true;
exports.PersonManage = void 0;
var PersonManage = /** @class */ (function () {
    function PersonManage() {
        //lsv : Person[] = new Array<Person>();
        this.lsv = [{ name: "مینا", family: "رضایی", username: "minarezaeei" }];
    }
    PersonManage.prototype.add = function () {
    };
    PersonManage.prototype.addAll = function () {
        var _a;
        //let array = [{name:"مینا", family:"رضایی",username:"minarezaeei"}] 
        //this.lsv.push(...array);
        (_a = this.lsv).push.apply(_a, this.lsv); //how to add a item into an array
    };
    PersonManage.prototype.update = function () {
        if (this.lsv.length > 0) {
            var tr_1;
            this.lsv.forEach(function (item) {
                tr_1 += "<tr><td>" + item.username + "</td>";
                tr_1 += "<td>" + item.family + "</td>";
                tr_1 += "<td><button onclick=" + "post('edit') class='btn py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>" + "ویرایش" + "</button>"
                    + "<button onclick=" + "info(" + item.username + ") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "نمایش" + "</button>"
                    + "<button onclick=" + "deletePerson(" + item.username + ") class='btn py-0 px-1 btn-danger'>" + "حذف" + "</button>"
                    + "</td></tr>";
            });
        }
        else {
            document.getElementById(".tbody").innerHTML = "";
        }
    };
    PersonManage.prototype.findPerson = function (id) {
    };
    PersonManage.prototype.edit = function (modal) {
    };
    return PersonManage;
}());
exports.PersonManage = PersonManage;
