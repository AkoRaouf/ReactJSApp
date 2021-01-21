import { Person } from './person';
import { Teacher } from './teacher';

const person = new Person('Raouf');
console.log(person);

const teacher = new Teacher('Mohamad');
teacher.walk();
teacher.teach();