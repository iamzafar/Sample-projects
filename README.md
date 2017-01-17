# Sample web-project for data visualization
You can view a [website](https://mzt14.github.io/Sample-projects/) to check the data.
All data was obtained from [OpenData Baltimore](https://data.baltimorecity.gov/).

- Following chart displays 911 phone calls in every hour;
- Hours are displayed as 24 hour period;
- Dataset contains information for the year of 2015-2016. Program calculates number of calls for every hour and displays it as a percentage on the pie chart.
- [d3pie](https://github.com/benkeen/d3pie) library is used to create a pie chart.
- Segment of a pie chart can be selected and moved.
- Gruntfile.js is used to test a script.

## Project Setup
index.html is the main pages where data is presented. For this project AngularJS is used as a front-end framework.
All javascript code is written in the main.js file. At the beginning, module is created and named as *app*. 

There is a service, ApiService, which used to get the JSON data using an API. **DataController** is a controller which manages all functionality for the displaying of the chart.

![pie-chart](https://cloud.githubusercontent.com/assets/7651335/22007931/bdbd943c-dc44-11e6-9912-44dd3f21f1b1.PNG)

The controller for the table is **TableController**. Table is populated with the JSON data obtained by the *ApiService*. 	

![table](https://cloud.githubusercontent.com/assets/7651335/22007937/c6b96c46-dc44-11e6-93ad-475396fc36fa.PNG)

A user can search and sort the data in the table. Search function is implemented using [search filter](https://docs.angularjs.org/guide/filter). Once the table is populated, user can search any information, and the table will be paginated accordingly. Initially search filter was included in the *ng-repreat* following way: `ng-repeat="record in array|filter:search`. However, this implementation did not include the pagination. Then code was changed to: `dir-paginate="record in array|orderBy:sortKey:reverse|filter:search` where `dir-paginate` is used for pagination of the page.

![searching](https://cloud.githubusercontent.com/assets/7651335/22007942/cb584de4-dc44-11e6-9d33-2ed0c782da1b.PNG) 

To sort the data, [orderBy](http://www.w3schools.com/angular/ng_filter_orderby.asp) filter was used. I have created *sort()* function  in *main.js* which accepts parameter. Based on this parameter the table will be sorted. There is up and down arrow on the column name which indicates how the data is sorted.

![sorting](https://cloud.githubusercontent.com/assets/7651335/22007940/c8afd06c-dc44-11e6-8ac2-ca2401fc34ae.PNG)



