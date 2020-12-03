let mycanv=document.getElementById('mycanv');
let canv=document.getElementById('canv');
let circle=document.getElementById('circle');
let circle2=document.getElementById('circle2');
let input1=document.getElementById('inp1');
let input2=document.getElementById('inp2');
let input3=document.getElementById('inp3');
let input4=document.getElementById('inp4');
let input_subject1=document.getElementById('subject1');
let input_subject2=document.getElementById('subject2');
let input_subject3=document.getElementById('subject3');
let input_subject4=document.getElementById('subject4');
let data_color=document.getElementById('data-color');

let btn=document.getElementById('btn');
let path=canv.getContext('2d');
let datacolor=data_color.getContext('2d');
let circle1=circle.getContext('2d');
let circleTwo=circle2.getContext('2d');
let chart=mycanv.getContext('2d'),
w = mycanv.width,
h = mycanv.height;

var arrdata=[input_subject1,input_subject2,input_subject3,input_subject4];


let x=h/100;
let y=70,
line=60;

let draw1=document.getElementById('draw1');
let draw2=document.getElementById('draw2');
let draw3=document.getElementById('draw3');
let draw4=document.getElementById('draw4');


// to draw chart //////////
let getChart=function()
{
    chart.beginPath();
    chart.moveTo(20,h-20);
    chart.lineTo(20,0);
    chart.moveTo(20,h-20);
    chart.lineTo(w,h-20);

   chart.stroke();
    
    chart.fillStyle='red';
    chart.fillRect(70,h-20-input1.value*x,40,input1.value*x);
     chart.fillStyle='blue';
    chart.fillRect(140,h-20-input2.value*x,40,input2.value*x);
    chart.fillStyle='yellow';
    chart.fillRect(210,h-20-input3.value*x,40,input3.value*x);
    chart.fillStyle='green';

    chart.fillRect(280,h-20-input4.value*x,40,input4.value*x);

    
    for(var i=0;i<=100;i+=10)
    {
         chart.font="50px";
         chart.fillStyle="black";
         chart.fillText(i,20,h-i*x-10);
          
    }
    for(var i=0;i<arrdata.length;i++)
    {
        
         chart.font="20px Arial";
         chart.fillStyle="black";
         chart.fillText(arrdata[i].value,y,h-5);
         y+=70;
          
    }
    
}


// to draw linePath //////////

let getLinePath=function()
{


    path.beginPath();
    path.moveTo(20,h-20);
    path.lineTo(20,0);
    path.moveTo(20,h-20);
    path.lineTo(w,h-20);

path.moveTo(60,h-20-input1.value*x);
path.lineTo(120,h-20-input2.value*x);
path.lineTo(180,h-20-input3.value*x);
path.lineTo(240,h-20-input4.value*x);
path.stroke();

for(var i=0;i<=100;i+=10)
{
     path.font="50px";
     path.fillStyle="black";
     path.fillText(i,20,h-i*x-10);
      
}
for(var i=0;i<arrdata.length;i++)
    {
        
        
         path.font="20px Arial";
         path.fillStyle="black";
         path.fillText(arrdata[i].value,line,h-5);
         line+=60;
          
    }

}

// to draw circlePath //////////

let getCircle=function()
{
    circle1.fillStyle="red";
    circle1.beginPath();
    let end1=2*Math.PI*input1.value/100;
    circle1.arc(200,200,90,0,end1);
    circle1.lineTo(200,200)
    circle1.fill();
    circle1.closePath();
    
    
    circle1.fillStyle="blue";
    circle1.beginPath();
    let end2=2*Math.PI*input2.value/100+end1;
    circle1.arc(200,200,90,end1,end2);
    circle1.lineTo(200,200)
    circle1.fill();
    circle1.closePath();
    
    circle1.fillStyle="yellow";
    circle1.beginPath();
    let end3=2*Math.PI*input3.value/100+end2;
    circle1.arc(200,200,90,end2,end3);
    circle1.lineTo(200,200)
    circle1.fill();
    circle1.closePath();
    
    
    
    circle1.fillStyle="green";
    circle1.beginPath();
    let end4=2*Math.PI*input4.value/100+end3;
    circle1.arc(200,200,90,end3,end4);
    circle1.lineTo(200,200)
    circle1.fill();
    circle1.closePath();
    
}





let getCircle2=function()
{
    circleTwo.fillStyle="red";
    circleTwo.beginPath();
    let end1=2*Math.PI*input1.value/100;
    circleTwo.arc(200,200,90,0,end1);
    circleTwo.lineTo(200,200)
    circleTwo.fill();
    circleTwo.closePath();
    
    
    circleTwo.fillStyle="blue";
    circleTwo.beginPath();
    let end2=2*Math.PI*input2.value/100+end1;
    circleTwo.arc(200,200,90,end1,end2);
    circleTwo.lineTo(200,200)
    circleTwo.fill();
    circleTwo.closePath();
    
    circleTwo.fillStyle="yellow";
    circleTwo.beginPath();
    let end3=2*Math.PI*input3.value/100+end2;
    circleTwo.arc(200,200,90,end2,end3);
    circleTwo.lineTo(200,200)
    circleTwo.fill();
    circleTwo.closePath();
    
    
    
    circleTwo.fillStyle="green";
    circleTwo.beginPath();
    let end4=2*Math.PI*input4.value/100+end3;
    circleTwo.arc(200,200,90,end3,end4);
    circleTwo.lineTo(200,200)
    circleTwo.fill();
    circleTwo.closePath();
    

    circleTwo.fillStyle="white";
    circleTwo.beginPath();
    circleTwo.arc(200,200,20,0,2*Math.PI);
    circleTwo.lineTo(200,200)
    circleTwo.fill();
    circleTwo.closePath();



}



btn.onclick=function()
{
var sumofgrade=parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value) + parseInt(input4.value);
    if(sumofgrade == 100){
        if(input_subject1.value != '' && input_subject2.value != '' && input_subject3.value != '' && input_subject4.value != '')
            {
                    if(draw1.checked)
                    {
                        getChart();
                    }  

                    if(draw2.checked){
                        getLinePath();
                    }
                    
                    if(draw3.checked){
                        getCircle();
                    }  
                    
                    if(draw4.checked){
                        getCircle2();
                    }
                    
                    let mycolors=['red','blue','yellow','green'],
                    inputs=[input1,input2,input3,input4],
                    input_subjects=[input_subject1,input_subject2,input_subject3,input_subject4];
                  
                    for(var i=1;i<5;i++)
            {
                    
                    datacolor.fillStyle=mycolors[i-1]
                    datacolor.beginPath();
                    datacolor.arc(150,50*i,5,0,2*Math.PI);
                    datacolor.fill()
                    datacolor.closePath()
                    datacolor.fillStyle='Black'
                    datacolor.fillText(input_subjects[i-1].value,160,50*i)
                    datacolor.fillText(inputs[i-1].value+'%',190,50*i)
            }

            }
        else{
            alert('error please enter name of subjects')
        }    
    
    }
    else{
        alert('error the sum of numbers must equall to 100 ')

    }



   

}



