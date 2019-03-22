import $ from 'jquery';
import './scss/styles.scss';
import { DoctorSearch } from './js/apiLogic.js';
import { ConditionSearch } from './js/apiLogic.js';

function sorter(obj) {
  obj.data.forEach(function(doc){
    return {'name': doc.practices[0].name}
  })
}

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let doctorInput = $('#doctor').val();
    let ailmentInput = $('#ailments').val();
    console.log(doctorInput);
    console.log(ailmentInput);


    const doc = new DoctorSearch();
    const promise = doc.findDoctor(doctorInput);

    promise.then(function(response) {
      const results = JSON.parse(response);
      // console.log(results);
      const resultsArr = results;
      // const output = sorter(results);
      console.log(resultsArr.data);

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
