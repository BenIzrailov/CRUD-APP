# CRUD-APP

Designed by Benjamin Izrailov (GitHub: MediumBen)

Goal
Using Node, Express, React, Redux, PostgreSQL, and Sequelize, build a RESTful full-stack web application to manage students and campuses. This will cover all of the CRUD operations: Create, Read, Update, and Delete. This will encompass writing models, querying a database with an ORM, designing routes/endpoints and handler functions to process user requests and generate responses, writing out React Components, managing the state of the application with React-Redux, and much more. This will also involve having two individual repositories/applications (a separate server and a separate client), which encourages separation of concerns and modularity. 
Assignment
Complete the following user stories:
As a user I:
[   ] will land on a visually pleasing homepage by default, which allows navigation to view all campuses and all students
can navigate to all campuses view, and
[   ] see a list of all campuses in the database
[   ] see an informative message if no campuses exist
[   ] add a new campus
[   ] with a validated form displaying real-time error messages
[   ] which redirects to the new campus’ single campus view
can navigate to a single campus view, and
[   ] see details about a single campus, including enrolled students (if any)
[   ] see an informative message if no students are enrolled at that campus
[   ] navigate to any student’s single student view 
[   ] delete the campus (and elegantly handle associated students)
[   ] edit campus information (including adding/removing students)
[   ] with a validated form displaying real-time error messages
[   ] which redirects back to the single campus view
can navigate to all students view, and
[   ] see a list of all students in the database
[   ] see an informative message if no students exist
[   ] add a new student
[   ] with a validated form displaying real-time error messages
[   ] which redirects the new student’s single student view
can navigate to a single student view, and
[   ] see details about a single student, including the campus at which they are enrolled (if exists)
[   ] see an informative message if student is not enrolled at a campus
[   ] navigate to single campus view of the student’s enrolled campus
[   ] delete the student
[   ] edit the student’s information (including campus s/he is enrolled at)
[   ] with a validated form displaying real-time error messages
[   ] which redirects back to the single student view
