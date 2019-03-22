import $ from 'jquery';
import './scss/styles.scss';
import { DoctorSearch } from './js/apiLogic.js';
import { ConditionSearch } from './js/apiLogic.js';

// function sorter(obj) {
//   let newArr = [];
//   for (let i= 0; i<obj.data.length; i++) {
//     newArr.push({'first_name' : obj.data[i].profile.first_name, 'last_name' : obj.data[i].profile.last_name, 'phone' : obj.data[i].practices[0].phones[0].number})
//   }
//   return newArr;
// }


function setName(obj) {
  for (let i = 0; i<obj.data.length; i ++) {
    console.log(`${obj.data[i].profile.first_name}  ${obj.data[i].profile.last_name}, ${obj.data[i].profile.title}`);
  }
}


function displayInfo(resultsObj) {
  if (resultsObj.data.length > 0) {
    resultsObj.data.forEach(function(ele) {
      $('.results').append(`${ele.profile.first_name}  ${ele.profile.last_name}, ${ele.profile.title} <br>
                            ${ele.practices[0].visit_address.street} <br>
                            ${ele.practices[0].visit_address.city}, ${ele.practices[0].visit_address.state} ${ele.practices[0].visit_address.zip} <br><br>`)
    })
  }
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
      console.log(resultsArr.data[0].profile.first_name);
      console.log(resultsArr.data[0].practices[0].phones[0].number);
      console.log(resultsArr.data[0].practices[0].visit_address.street);
      console.log(resultsArr.data[0].practices[0].visit_address.street2);
      console.log(resultsArr.data[0].practices[0].visit_address.city);
      console.log(resultsArr.data[0].practices[0].visit_address.state);
      console.log(resultsArr.data[0].practices[0].visit_address.zip);
      console.log(resultsArr.data[0].practices[0].accepts_new_patients);
      // const output = sorter(results);
      // console.log(output);
      displayInfo(results);

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
