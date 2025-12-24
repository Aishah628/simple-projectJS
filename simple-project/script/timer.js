
const Years=document.getElementById(`year`).textContent=new Date().getFullYear();
const Month=document.getElementById(`month`).textContent=new Date().getMonth();
const Day=document.getElementById(`days`).textContent=new Date().getDay();
const Hour=document.getElementById(`hour`);
const Minute=document.getElementById(`minutes`);
const Second=document.getElementById(`second`);

const targetDate=new Date(2025,12,1,0,0,0).getTime();
 function timer(){
    const CurrentDate=new Date().getTime();
    let distance= targetDate - CurrentDate;
    
 
    const oneSecond=1000;
    const oneMinute=oneSecond*60;
    const oneHour=oneMinute*60;
    const oneDay=oneHour*24;
    const oneMonth=oneDay*30;
    const oneYear=oneDay*365;
   
    const years=Math.floor(distance/oneYear);
    const month=Math.floor((distance % oneYear)/oneMonth);
    const days=Math.floor((distance%oneMonth)/oneDay);
    const hours=Math.floor((distance % oneDay) /oneHour);
    const minutes=Math.floor((distance%oneHour)/oneMinute);
    const seconds=Math.floor((distance%oneMinute)/oneSecond);

         Years.innerHTML=years;
         Month.innerHTML=month;
         Day.innerHTML = days;
         Hour.innerHTML = hours;
         Minute.innerHTML = minutes;
         Second.innerHTML = seconds;
       
     }

 setInterval(timer,1000);

/*
const Years  = document.getElementById('year');
const Month  = document.getElementById('month');
const Day    = document.getElementById('days');
const Hour   = document.getElementById('hour');
const Minute = document.getElementById('minutes');
const Second = document.getElementById('second');

const targetDate = new Date("November 30 2025 00:00:00").getTime();

function timer(){
    
    const currentDate = new Date().getTime();
    let distance = targetDate - currentDate;

    if (distance < 0) distance = 0;

    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour   = oneMinute * 60;
    const oneDay    = oneHour * 24;
    const oneMonth  = oneDay * 30; 
    const oneYear   = oneDay * 365;

    const years   = Math.floor(distance / oneYear);
    const r1      = distance % oneYear;

    const months  = Math.floor(r1 / oneMonth);
    const r2      = r1 % oneMonth;

    const days    = Math.floor(r2 / oneDay);
    const r3      = r2 % oneDay;

    const hours   = Math.floor(r3 / oneHour);
    const r4      = r3 % oneHour;

    const minutes = Math.floor(r4 / oneMinute);
    const r5      = r4 % oneMinute;

    const seconds = Math.floor(r5 / oneSecond);

    Years.innerHTML  = years;
    Month.innerHTML  = months;
    Day.innerHTML    = days;
    Hour.innerHTML   = hours;
    Minute.innerHTML = minutes;
    Second.innerHTML = seconds;

    console.log(years,months,days,hours,minutes,seconds)
}

setInterval(timer, 1000);
*/