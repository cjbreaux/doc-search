import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      if ((doctorInput) || (ailmentInput)) {
        displayInfo(results);
      }

    }, function(error) {
      $('.results').html(`There seems to be an error processing your request: ${error.message}`);
    });
  });
});
