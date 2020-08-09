const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
//-------------------------------------------------------
//Funcionalidades
function getSubject(subjectNumber){
    const Position = +subjectNumber -1
    return subjects[Position]
}
function convertHoursToMinutes (time){
    const [hour, minutes] = time.split(':'); //Ex.: "09:00" split to ["09","00"]
    return Number((hour * 60)) + minutes; //"Numbers" convert the string to numbers
}

//-------------------------------------------------------
//Exportando dados
module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}