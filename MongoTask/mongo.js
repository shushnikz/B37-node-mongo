// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors

db.zenClass.insertMany([
    {_id:10,user: "Chaitanya",codekata: 30,attendance: "Present",topics: "MongoDB",tasks: "Create Database of Zen class",task_submitted: "Yes",company_drives: "15 oct 2020",Appeared: "Yes",month: "October",mentors: 16},
    {_id:11,user: "Aruna",codekata: 20,attendance: "Present",topics: "MongoDB",tasks: "Retrive tha data from database",task_submitted: "Yes",company_drives: "19 oct 2020",Appeared: "No",month: "October",mentors: 10},
    {_id:12,user: "Aziya",codekata: 35,attendance: "present",topics: "MongoDB",tasks: "MongoDB Greater than less than",task_submitted: "Yes",company_drives: "22 oct 2020",Appeared: "Yes",month: "October",mentors: 19},
    {_id:13,user: "Shahid",codekata: 26,attendance: "Absent",topics: "MongoDB",tasks: "Create Database of Zen class",task_submitted: "No",company_drives: "29 oct 2020",Appeared: "No",month: "October",mentors: 9},
    {_id:14,user: "Rahul",codekata: 38,attendance: "Absent",topics: "MongoDB",tasks: "MongoDB Greater than less than",task_submitted: "No",company_drives: "01 nov 2020",Appeared: "No",month: "November",mentors: 12},    
])

db.zenClass.find({}).pretty()

// Find all the topics and tasks which are thought in the month of October
db.zenClass.find({month: {$in:["October"]}},{_id: 1,topics: 1,tasks: 1,month: 1}).pretty()

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zenClass.find({company_drives: {$gt: "15 oct-2020",$lt: "31-oct-2020"}}).pretty()

// Find all the company drives and students who are appeared for the placement
db.zenClass.find({Appeared: {$in: ["Yes"]}},{_id: 1,user: 1,company_drives:1}).pretty()

// Find the number of problems solved by the user in codekata
db.zenClass.aggregate([{$match: {topics: "MongoDB"}},({$group: {_id: "$tasks",totalproblemsSolved: {$sum: "$codekata"}}})]).pretty()

// Find all the mentors with who has the mentee's count more than 15
db.zenClass.find({mentors: {$gt:15}}).pretty()

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenClass.find({attendance: {$eq: "Absent"},task_submitted: {$eq: "No"},company_drives: {$gt: "15 oct-2020",$lt: "31-oct-2020"}}).pretty()

