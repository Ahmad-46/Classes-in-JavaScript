// creating a class

class student{
    constructor(naam,year){
        this.name = naam;
        this.b_y = year;
    }
    //method 
    age(){
        let date = new Date();
        let umaar = date.getFullYear() - this.b_y;
        return umaar;
    }
}
 
// creating object for the class
student1 = new student("Ahmad",2010);
document.getElementById("studen1").innerHTML = `My name is ${student1.name}. i was born in ${student1.b_y} and I am ${student1.age()} years old.`;

student2 = new student("abdul",2010);
document.getElementById("student2").innerHTML = `My name is ${ student2.name}. i was born in ${student2.b_y} and I am ${student2.age()} year old`;