let hr=document.getElementById('hour');
let min=document.getElementById('minute');
let sec=document.getElementById('seconds');


function Time()
{
    let date=new Date()
     let hh=date.getHours();
     let mm=date.getMinutes();
     let ss=date.getSeconds();

     let rotation_1=30*hh+(mm/2)+180;
     let rotation_2= 6*mm+180;
     let rotation_3=6*ss+180;

     hr.style.transform=`rotate(${rotation_1}deg)`
     min.style.transform=`rotate(${rotation_2}deg)`
     sec.style.transform=`rotate(${rotation_3}deg)`
}

setInterval(Time,1000);