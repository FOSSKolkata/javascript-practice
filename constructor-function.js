function Person(){
    this.firstName = 'Abhijit';
    this.lastName = 'Sarkar'
    this.age = 45;
}

Person.prototype = {
    fullname : function (){
        return `${this.firstName}  ${this.lastName}`;
    }
}

var jim = new Person();
display(jim);
display(jim.__proto__);
display(Person.prototype)
display(jim.fullname());