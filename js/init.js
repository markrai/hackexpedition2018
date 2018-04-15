
console.log("Initializing");

var data = function () {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", './data/location.json', false);
  xmlHttp.send(null);
  var information = JSON.parse(xmlHttp.responseText)
  // console.log("Got data",info);
  return information;
}

  var info = data();
  var businessObj = []
  info.map(function (x) {
    var businessData = {
      locId: x.LOCATION_ID,
      businessName: x.LOCATION_NAME,
      businessAddress: x.ADDRESS,
      ownerName: x.OWNER_NAME,
      dateOfEst: x.DATE_OF_ESTABLISHMENT,
      lat: x.LATITUDE,
      lon: x.LONGITUDE
    }
    businessObj.push(businessData)
  })

  var source = $('#sampleArea').html();
  var template = Handlebars.compile(source);
  var $body = $('.content-wrapper');
  $body.append(template(businessObj));



  console.log(businessObj);
