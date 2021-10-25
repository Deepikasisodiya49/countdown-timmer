var dayselem=document.querySelector('#dayselem');
var hourselem=document.querySelector('#hourselem');
var minuteselem=document.querySelector('#minuteselem');
var secondselem=document.querySelector('#secondselem');
setInterval(function(){
    var todays=new Date();
    var future=new Date(2021,12,1,0,0,0);
    var diff=future-todays;
    var seconds=Math.floor(diff/1000);
    var minutes=Math.floor((diff/(1000*60)));
    var hours=Math.floor((diff/(1000*60*60)));
    var days=Math.floor((diff/(1000*60*60*24)));
  hours=hours%24;
    minutes=minutes%60;
    seconds=seconds%60;
   dayselem.textContent=days;
   hourselem.textContent=hours;
   minuteselem.textContent=minutes;
   secondselem.textContent=seconds;
},1000);

