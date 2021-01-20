const person = {
    name:'Raouf',
    talk(){
        console.log(this);
    },
    walk(){}
}

person.walk();

const square = function (number){
    return number * number;
}

const square = (number) => number * number;

const jobs = [
    {id: 1, IsActive: false},
    {id: 2, IsActive: true},
]

var activeJobs = jobs.filter(job => job.IsActive);