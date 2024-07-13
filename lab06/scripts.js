"use strict";
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 }
];
let car = {};
car.manufacturer = 'manufacturer';
car.model = 'madel;';
const car1 = {};
car1.manufacturer = 'manufacturer';
car1.model = 'model';
const car2 = {};
car2.manufacturer = 'manufacturer';
car2.model = 'model';
const arrayCars = [{
        cars: [car1, car2]
    }];
let student1 = {
    id: 1,
    name: 'John',
    group: 4,
    marks: [{ subject: 'Math', mark: 3, done: true }, { subject: 'English', mark: 5, done: false }]
};
let student2 = {
    id: 2,
    name: 'Carl',
    group: 3,
    marks: [{ subject: 'Math', mark: 9, done: true }, { subject: 'Russian', mark: 1, done: true }]
};
let student3 = {
    id: 3,
    name: 'Max',
    group: 4,
    marks: [{ subject: 'Math', mark: 2, done: true }, { subject: 'English', mark: 9, done: false }, { subject: 'Russian', mark: 5, done: true }]
};
let group = {
    students: [student1, student2, student3],
    studentsFilter: function (group) {
        return this.students.filter((student) => student.group == group);
    },
    marksFilter: function (mark) {
        return this.students
            .filter((student) => student.marks
            .some(obj => obj.mark === mark));
    },
    deleteStudent: function (id) {
        let indexToRemove = this.students.findIndex((student) => student.id === id);
        if (indexToRemove !== -1) {
            this.students.splice(indexToRemove, 1);
        }
    },
    mark: 9,
    group: 4
};
console.log(group.students);
group.deleteStudent(3);
console.log(group.students);

console.log("group filter");
console.log(group.studentsFilter(group.group));
console.log("mark filter");
console.log(group.marksFilter(group.mark));
