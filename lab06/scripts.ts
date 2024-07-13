
// task 1
type user = {
    id: number,
    name: string,
    group: number
}
const array: user[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11}
]

// task 2
type CarsType = {
    manufacturer?: string,
    model?: string
}
let car: CarsType = {};
car.manufacturer = 'manufacturer';
car.model = 'madel;'

// task 3
type ArrayCarsType = {
    cars: Array<CarsType>
}

const car1: CarsType = {};
car1.manufacturer = 'manufacturer';
car1.model = 'model'

const car2: CarsType = {}
car2.manufacturer = 'manufacturer'
car2.model = 'model'

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}]
let arr: ArrayCarsType = {cars:[car1,car2]}



// task 4
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type DoneType = boolean
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type MarkType = {
    subject: string,
    mark: MarkFilterType,       // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType,     // может принимать значенеия от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array<StudentType>    // массив студентов типа StudentsType
    studentsFilter: (group: number) => Array<StudentType>,     // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>,      // фильтр по оценке
    deleteStudent: (id: number) => void,       // удалить студента по id исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}


let student1: StudentType = {
    id: 1,
    name: 'John',
    group: 4,
    marks: [{ subject: 'Math', mark: 3, done: true },{ subject: 'English', mark: 5, done: false }]
}
let student2: StudentType = {
    id: 2,
    name: 'Carl',
    group: 3,
    marks: [{ subject: 'Math', mark: 9, done: true },{ subject: 'Russian', mark: 1, done: true }]
}
let student3: StudentType = {
    id: 3,
    name: 'Max',
    group: 4,
    marks: [{ subject: 'Math', mark: 2, done: true },{ subject: 'English', mark: 9, done: false },{ subject: 'Russian', mark: 5, done: true }]
}

let group: GroupType = {
    students: [student1, student2, student3],
    studentsFilter: function (group: number): Array<StudentType> {
        return this.students.filter((student: StudentType): boolean => student.group == group)
    },
    marksFilter: function (mark: number): Array<StudentType> {
        return this.students
            .filter((student: StudentType): boolean => student.marks
                .some(obj=>obj.mark === mark))
    },
    deleteStudent: function(id: number): void {
        let indexToRemove: number = this.students.findIndex((student: StudentType): boolean => student.id === id)

        if(indexToRemove !== -1){
            this.students.splice(indexToRemove, 1)
        }
    },
    mark: 9,
    group: 4
}

console.log(group.students)
group.deleteStudent(3)

console.log("group filter");
console.log(group.studentsFilter(group.group));

console.log("mark filter");
console.log(group.marksFilter(group.mark));












