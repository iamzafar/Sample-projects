# Sample web-project for data visualization
You can view a [website](https://mzt14.github.io/Sample-projects/) to check the data.
All data was obtained from [OpenData Baltimore](https://data.baltimorecity.gov/).

- Following chart displays 911 phone calls in every hour;
- Hours are displayed as 24 hour period;
- Dataset contains information for the year of 2015. Program calculates number of calls for every hour and displays it as a percentage on the pie chart.
- [d3pie](https://github.com/benkeen/d3pie) is used to create a pie chart.

## Project Setup
index.html is the main pages where data is presented. For this project AngularJS as a front-end framework.
All javascript code is written in the main.js file. At the beginning, module is created and named as *app*. 
There is a service, ApiService, which used to get the JSON data using an API. **DataController** is a controller which manages all functionality for the displaying of the chart.