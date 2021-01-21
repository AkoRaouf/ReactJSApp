class Person {
    constructor(name){
        this.name = name;
    }
    
    walk() {
        console.log('walk');
    }
}

class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    
    teach(){
        console.log('teach');
    }
}

const person = new Person('Raouf');
console.log(person);

const teacher = new Teacher('Mohamad');
teacher.walk();
teacher.teach();