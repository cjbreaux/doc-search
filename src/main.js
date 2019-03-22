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



    const doc = new DoctorSearch();
    const promise = doc.findDoctor(doctorInput);

    promise.then(function(response) {
      const results = JSON.parse(response);
      const resultsArr = results;
      console.log(resultsArr.data[0].practices[0].name);
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
