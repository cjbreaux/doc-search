export class DoctorSearch {

  findDoctor(searchTerm, apiKey) {
    return function(docName) {
      return new Promise(function(resolveFunction, rejectFunction) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?${searchTerm}=${docName}&location=45.5122%2C-122.6587&user_location=45.5122%2C-122.6587&skip=0&user_key=${apiKey}`

        request.onload = function() {
          if (this.status === 200) {
            resolveFunction(request.response);
          } else {
            rejectFunction(Error(request.statusText));
          }
        }

        request.open("GET", url, true);
        request.send();
      });
    }
  }
