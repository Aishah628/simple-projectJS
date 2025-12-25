let Z=document.getElementById('z');
let result=document.getElementById('result');
let calculateBnt= document.getElementById('calculatore-btn');
calculateBnt.addEventListener('click',()=>{
    let XValue=parseFloat(document.getElementById('x').value);
    let YValue=parseFloat(document.getElementById('y').value);

    if(! isNaN(XValue && ! isNaN(YValue))){
    Z.value=(XValue + YValue /100).toFixed(2);
    result.innerHTML=`${XValue} % of ${YValue} is <span>${Z.value}</span>`
    }
    else{
        result.innerHTML='Inputs Cannot be empty!';

    }
})

