import $ from 'jquery';

export function displayInfo(resultsObj) {
  if (resultsObj.data.length > 0) {
    resultsObj.data.forEach(function(ele) {
      $('.results').append(`${ele.profile.first_name}  ${ele.profile.last_name}, ${ele.profile.title} <br>
                            ${ele.practices[0].visit_address.street} <br>
                            ${ele.practices[0].visit_address.city}, ${ele.practices[0].visit_address.state} ${ele.practices[0].visit_address.zip} <br>
                            Tel: ${ele.practices[0].phones[0].number} <br>`)
      if (ele.practices[0].website != undefined ) {
        $('.results').append(`${ele.practices[0].website} <br>`)
      }
      if (ele.practices[0].accepts_new_patients === true) {
        $('.results').append(`Accepting new patients <br><br>`)
      }
    })
  } else {
    $('.results').append(`Sorry, there aren't any results that match your request.`)
  }
}
