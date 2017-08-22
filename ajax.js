document.addEventListener("DOMContentLoaded", function() {
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');
  var button4 = document.getElementById('button4');
  var button5 = document.getElementById('button5');
  var button7 = document.getElementById('button7');
  var button8 = document.getElementById('button8');
  var button9 = document.getElementById('button9');
  var button10 = document.getElementById('button10');
  var findButton23 = document.querySelector('#step3456');
  var findButton7 = document.querySelector('#step7');
  var findButton8 = document.querySelector('#step8');
  var findButton9 = document.querySelector('#carList');
  var findButton10 = document.querySelector('#stretch');
  button1.addEventListener('click', function(){
    $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/',
     method: 'get',
     dataType: 'text'
   });
 })

 button2.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/ping',
     method: 'get',
     dataType: 'timezone'
   }).done(function(responseData){
     console.log("Request succeeded!", responseData);
     var response = document.createElement('section');
     response.innerText= responseData;
     findButton23.append(response);
   });
 });
 button3.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/pong',
     method: 'get',
     dataType: 'text'
   }).fail(function(errorMsg){
     console.log(errorMsg);

     var error = document.createElement('p');
     error.innerText = "Fail!";
     findButton23.append(error);
   });
 });

 button4.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/',
     method: 'get',
     dataType: 'text'
   }).always(function(){
     console.log("Hey the request finished!");
   });
 });
//you can try /ping and /pong
 button5.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/ping',
     method: 'get',
     dataType: 'text'
   }).done(function(){
     console.log('Complete');
   }).fail(function(){
     console.log('Fail!');
   }).always(function(){
     console.log('It\'over');
   });
 });

 button7.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/count',
     method: 'get',
     dataType: 'text'
   }).done(function(responseData){
     var count = document.createElement('section');
     count.innerText = responseData;
     findButton7.append(count);
     console.log(responseData);
   });
 });

 button8.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/time',
     method: 'get',
     data: {
       timezone: 'America/Mexico_City'
     },
     dataType: 'text'
   }).done(function(responseData){
     var timeZone = document.createElement('section');
     timeZone.innerText = responseData;
     findButton8.append(timeZone);
     console.log(responseData);
   });
 });

 button9.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/a_car',
     method: 'get',
     dataType: 'HTML'
   }).done(function(responseData){
     var car = document.createElement('li');
     car.innerHTML = responseData;
     findButton9.append(car);
     console.log(responseData);
   });
 });

 button10.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/pong',
     method: 'get',
     dataType: 'text'
   }).fail(function(jqXHR, textStatus, errorThrown){
     console.log(jqXHR, textStatus, errorThrown);
   })
 })

 button11.addEventListener('click', function(){
   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/count',
     method: 'get',
     data: {amount: 1000}
     dataType: 'text'
   }).done(function(responseData){
     var amount = document.createElement('section');
     amount.innerText = responseData;
     findButton10.append(amount);
     console.log(responseData);
   });
 });

});
