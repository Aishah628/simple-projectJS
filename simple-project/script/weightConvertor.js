let kgRef=document.getElementById('kg');
let lbRef=document.getElementById('lb');
let ozRef=document.getElementById('oz');

let convertFromKg=()=>{
    let kg=kgRef.value;
    //toFixed(2) limits the dicmal to 2 digits
    lbRef.value=(kg*2.205).toFixed(2);
    ozRef.value=(kg*35.274).toFixed(2);

};

kgRef.addEventListener("input",convertFromKg);

let convertFromlb=()=>{
    let lb=lbRef.value;
    //toFixed(2) limits the dicmal to 2 digits
    kgRef.value=(lb/2.205).toFixed(2);
    ozRef.value=(lb*16).toFixed(2);

};
lbRef.addEventListener("input",convertFromlb);

let convertFromoz=()=>{
    let oz=ozRef.value;
    //toFixed(2) limits the dicmal to 2 digits
    kgRef.value=(oz/35.274).toFixed(2);
    lbRef.value=(oz/16).toFixed(2);

};
ozRef.addEventListener("input",convertFromoz);

window.addEventListener('load',convertFromKg);