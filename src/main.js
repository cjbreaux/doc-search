import $ from 'jquery';
import './scss/styles.scss';
// import { DoctorSearch } from './js/apiLogic.js';


$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    console.log("test");
  })
});
