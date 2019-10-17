// CODE here for your Lambda Classes

class Person{
    constructor(personAtt){
        this.name = personAtt.name;
        this.location = personAtt.location;
        this.age = personAtt.age;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};

class Instructor extends Person{
    constructor(instAtt){
        super(instAtt);
        this.specialty = instAtt.specialty;
        this.favLanguage = instAtt.favLanguage;
        this.catchPhrase = instAtt.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}.`
    }
};

class Student extends Person{
    constructor(studAtt){
        super(studAtt);
        this.previousBackground = studAtt.previousBackground;
        this.className = studAtt.className;
        this.favSubjects = studAtt.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
};

class ProjectManager extends Instructor{
    constructor(PMAtts){
        super(PMAtts);
        this.gradClassName = PMAtts.gradClassName;
        this.favInstructor = PMAtts.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standup times!`
    }
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`
    }
};

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: `Don't forget the homies.`,
});

const tom = new Student({
    name: 'Tom',
    location: 'Seattle',
    age: 24,
    previousBackground: 'Art Student',
    className: 'WEB25FT',
    favSubjects: ['JavaScript', 'Painting', 'History']
});

const edith = new ProjectManager({
    name: 'Edith',
    location: 'Denver',
    age: 29,
    favLanguage: 'Ruby',
    specialty: 'Web Apps',
    catchPhrase: 'You go, girl!',
    gradClassName: 'WEB6',
    favInstructor: 'Josh',
});

console.log(fred.speak());
console.log(fred.demo('JavaScript'));

console.log(tom.speak());
console.log(tom.sprintChallenge('JavaScript'));

console.log(edith.speak());
console.log(edith.debugsCode(tom, 'JavaScript'));