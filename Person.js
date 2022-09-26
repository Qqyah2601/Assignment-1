class Person{
    name
    age
    address
    tribe
    constructor(name, age, address, tribe){
        this.name=name;
        this.age=age;
        this.address=address;
        this.tribe=tribe;
    }
}
// Inheritance was applied here //
class Student extends Person{
    school
    course
    constructor(school, course){
        super();
        this.school =school;
        this.course=course;
    }
}

class Accountholder extends Person{
    accounttype
    bank
    accountno
    constructor(accounttype, bank, accountno){
        super();
        this.accounttype=accounttype;
        this.bank=bank;
        this.accountno=accountno;
    }
}

class Jobapplicant extends Person{
    JobRole
    JobId
    constructor(JobRole, JobId){
        super();
        this.JobRole= JobRole;
        this.JobId=JobId
    }
}