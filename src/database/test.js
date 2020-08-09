const Database = require('./db');
const createProffy = require('./createProffy');


// () => {} Short function
Database.then(async (db) => {
    
    //Insert values
    proffyValue = {
        name: "Ademir Junior",
        avatar: "https://avatars3.githubusercontent.com/u/68152356?s=460&u=9a3c1c8c3c46c1b86e650d333fe4c480025a38d2&v=4",
        whatsapp: "65992734720",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }
    classValue = {
        //proffy_id virá pelo db
        subject: 1,
        cost: "20"
    }
    classScheduleValues = [
        // class_id virá pelo db
        { 
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues});
    //Consult values inserted

    
    //consult-check the inserted values
        //all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);
        //classes about specific proffy
        // + proffy values
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `);
    // console.log(selectedClassesAndProffys);

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
        
    `)
    // console.log(selectedClassesSchedules);
});