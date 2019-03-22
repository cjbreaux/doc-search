import $ from 'jquery';
import './scss/styles.scss';
import {displayInfo} from './js/functions.js';
import { Search } from './js/apiLogic.js';


$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    $('.results').empty();
    let doctorInput = $('#doctor').val();
    let ailmentInput = $('#ailments').val();
    $('#doctor').val('');
    $('#ailments').val('');

    const doc = new Search();
    const promise = doc.findDoctor(doctorInput,ailmentInput);

    promise.then(function(response) {
      let results = JSON.parse(response);
      // if(doctorInput != ''){
      // }
      displayInfo(results);


      }, function(error) {
        console.log("Error from API")
      });
  })

});
