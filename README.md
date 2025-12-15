<h1 align="center"> CS-465 </h1>
<p align="center"> Full Stack Development </p>
<p align="center"> Design and develop a full stack application through the utilization of programming language frameworks </p>

<p align="center">
<img alt="image" src="snhu.png" width="150" height="150" />
</p>

## Table of Contents
- [Course Description](#-course-description-)
- [Module 1](#-module-one-)
- [Module 2](#-module-two-)
- [Module 3](#-module-three-)
- [Module 4](#-module-four-)
- [Module 5](#-module-five-)
- [Module 6](#-module-six-)
- [Module 7](#-module-seven-)
- [Architecture](#-architecture-)
- [Functionality](#-functionality-)
- [Testing](#-testing-)
- [Reflection](#-reflection-)

## <h1 align="center"> Course Description </h1>
Students will design and develop a full stack application through the utilization of programming language frameworks. In creating a full stack application, students will also be responsible for developing a database as well as the code that interfaces their application to the database. This is the first course in a two-course sequence.

## <h1 align="center"> Module One </h1>
Produce a working shell of the customer-facing web application that is rendered in the browser.

## <h1 align="center"> Module Two </h1>
Organize the default code and folder layout into a structure that reflects a Model View Controller (MVC) approach to the software design.

## <h1 align="center"> Module Three </h1>
Replace static HTML with templates that will utilize JSON to format and display information.

## <h1 align="center"> Module Four </h1>
Create a database and then connect the database to the server. In turn, the server will deliver the data to the browser for the customer who uses the Travlr Getaways website.

## <h1 align="center"> Module Five </h1>
This application will separate the RESTful endpoints.

## <h1 align="center"> Module Six </h1>
Use an Angular command line interface (CLI) to build components and a data service for the client-facing, front-end single-page application (SPA).

## <h1 align="center"> Module Seven </h1>
Add security functionality for secure login authentication.

## <h1 align="center"> Architecture </h1>
This full stack project utilized various types of frontend artchitecture's. Express HTML was used for server-rendered pages which can be simple to setup and useful for read-only pages where there is little to no user interactions or requests. This comes with a downside that the entire document reloads when the user switches pages, causing a slower load time. The client-side Java Script enhaced the Express implemntation by adding interactivity to server-rendered pages (like adding or editing a vacation card), this lets us make dynamic behavior without the full front-end framework. Finally we used a single-page application (SPA) for the Angular admin page which allows client-rendered views and calling the REST API for requets. This lets us implement authentication workflows and smoother interactivity without full page loads.

Finally, the backend using a NoSQL MongoDB database for a more flexible schema on data that can be edited, more easily than a relational DB. MongoDB works very well with JS and allows the Express backend to flow easily with the DB.

## <h1 align="center"> Functionality </h1>
The front end is tied together with JSON which is not a progamming lanugage, but a data format that is easily human ledgable with a good structure for data. JavaScript uses the data from a JSON to put everything together in a seamless method.

To improve effeciency, I refactored the code to implement Handlebars and Express, this introduced the routes and view templates which get injected server-side and removed duplicate nav partials. This also lets us update locatsion with the DB instead of having to just edit the HTML file.

## <h1 align="center"> Testing </h1>
Postman was the main source of testing data requests from the client to the server to ensure one could login, create an account, edit and add a trip card without using a browser to test every time.

## <h1 align="center"> Reflection </h1>
This project has shown me the complexities of full-stack development. While this project was mainly working with pre-existing code and templates, I believe taking on a project that involves full stack would be easier than it would have been prior to this project. I had previous experience in JavaScript, however this course has thought me the dynamic and good use-cases of JS. I also learned about Angular vs Express and how one may be better than the other for certain uses.
