const courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    }, {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    }, {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    }, {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    }, {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
]

function findPROG200(course) {
    return course.CourseId === 'PROG200'
}

const prog200 = courses.find(findPROG200)
console.log('PROG200 start date:', prog200.StartDate)

function findPROJ500(course) {
    return course.CourseId == 'PROJ500'
}

const proj500 = courses.find(findPROJ500)
console.log('PROJ500 course title:', proj500.Title)

function courses50OrLess(course) {
    return +course.Fee <= '50.00'
}

const coursesUnder50 = courses.filter(courses50OrLess);
for (const course of coursesUnder50) {
    console.log('Title of courses under $50:', course.Fee, course.Title)
}

function classesInClassroom1(course) {
    return course.Location == 'Classroom 1'
}

const classroom1Classes = courses.filter(classesInClassroom1)
for (const course of classroom1Classes) {
    console.log('Classes held in Classroom 1:', course.CourseId)
}