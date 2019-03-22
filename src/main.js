import $ from 'jquery';
import './scss/styles.scss';
import { DoctorSearch } from './js/apiLogic.js';
import { ConditionSearch } from './js/apiLogic.js';

// function sorter(obj) {
//   for (let i= 0; i<obj.practices.length; i++) {
//   }
// }

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let doctorInput = $('#doctor').val();
    let ailmentInput = $('#ailments').val();



    const doc = new DoctorSearch();
    const promise = doc.findDoctor(doctorInput);

    promise.then(function(response) {
      const results = JSON.parse(response);
      const resultsArr = results;
      console.log(resultsArr.data[0].practices[0].name);
      console.log(resultsArr.data[0].practices[0].phones[0].number);
      console.log(resultsArr.data[0].practices[0].visit_address.street);
      console.log(resultsArr.data[0].practices[0].visit_address.street2);
      console.log(resultsArr.data[0].practices[0].visit_address.city);
      console.log(resultsArr.data[0].practices[0].visit_address.state);
      console.log(resultsArr.data[0].practices[0].visit_address.zip);
      console.log(resultsArr.data[0].practices[0].accepts_new_patients);
      // const output = sorter(results);
      // console.log(output);

      }, function(error) {
        console.log("Error from API")
      });

    //   const cond = new ConditionSearch();
    //   const promise2 = cond.findCondition(ailmentInput);
    //
    // promise2.then(function(response) {
    //   const results = JSON.parse(response);
    //   console.log(results);
    //   }, function(error) {
    //     console.log("Error from API")
    //   });
  })

});
