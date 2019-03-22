import $ from 'jquery';
import './scss/styles.scss';
import { DoctorSearch } from './js/apiLogic.js';


$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let doctorInput = $('#doctor').val();
    let ailmentInput = $('#ailments').val();
    console.log(doctorInput);
    console.log(ailmentInput);


    const doc = new DoctorSearch();
    const promise = doc.findDoctor();

    promise.then(function(response) {
      const results = JSON.parse(response);
      console.log(results);
      }, function(error) {
        console.log("Error from API")
      });

  })

});
