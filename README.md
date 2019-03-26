## Project Title
Doctor Search

#### Names of Author(s)
Chris Breaux

#### Date of Completion

3.22.2019

### Description

This project will utilize the BetterDoctor API to create a web application that will allow the user to find doctors in their area. Searching by name will retrieve a list of doctors that meet the search criteria and searching by ailment will find doctors that are able to treat that condition. The learning objectives for this project include working with APIs and asynchrony.

### Specs

Specification | Input | Output
------------- | ----- | ------
Enter medical issue and receive a list of doctors in the Portland area | High Blood Pressure | Doctor Dan, <br> Medical Maria, <br> Healthy Harriet
Enter a name and receive a list of doctors in the Portland area | Harriet | Healthy Harriet, <br> Harriet Smith
If response includes any doctors, the following information should be presented: first name, last name, address, phone number, website, whether the doctor is accepting new patients | Dan | Doctor Dan <br> 1234 Hospital Rd, Portland OR 97214 <br> 503 - 111 - 1111 <br> www.drdan.com <br> Accepting new patients
Error message for invalid API call | Anxiety | Error: There was an error processing your request
If query response doesn't contain any doctors, return a notification | Xenomorphoplasia | Sorry, there aren't any doctors near you that meet the search criteria.


### Technologies and Resources

* HTML  
* Sass
* JavaScript
* jQuery
* Webpack v4.19.1


### Responsiveness



### Setup Instructions
* Clone file from https://github.com/cjbreaux/doc-search.git
* Navigate to the cloned folder in the terminal.
* While in the project folder, run the following in the terminal:
 ```html
$ npm i
```
* After the files have downloaded, run the following:
```html
$ npm start
```
* Grab an API key from https://developer.betterdoctor.com/
* Create a .env file in the root project directory.
* In your .env file, copy the following: 
```html
exports.apiKey = YOUR_API_KEY_GOES_HERE
```
* Be sure to add in your unique API key obtained from https://developer.betterdoctor.com/

### Stretch Goals

* Custom Styling
* Refactor code to parse data more effectively

### License

GNU License

Copyright (c) 2019 **Chris Breaux**
