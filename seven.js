/*
to-do
- read in time 
- draw segement

-segement function for each seg
*/


//A ((0x7E >> 6) & 1)
//B ((0x7E >> 6) & 1)
//C ((0x7E >> 6) & 1)
//D ((0x7E >> 6) & 1)
//E ((0x7E >> 6) & 1{)
//F ((0x7E >> 6) & 1)
//G ((0x7E >> 6) & 1)
//if 1 turn on 
//if 0 turn off     

const OFFCOLOR = "rgba(141, 1, 1, 0.3)";
const ONCOLOR = "rgba(245, 21, 21, 1)";
var colon = document.getElementById("colon-0").getElementById("g0"); 

var seg_0 = getElements(0);
var seg_1 = getElements(1);
var seg_2 = getElements(2);
var seg_3 = getElements(2);

window.onload = function (){
    //make the colon blink between clock
    blink();
    elapse();
}

var blink = function(){
    let i = 0;
    let alt = [OFFCOLOR,ONCOLOR];
    setInterval(function(){
        colon.style.fill = alt[i];
        i = (i+1) % alt.length;
    }, 3000/5);
}

var elapse = function(){
    
}

function getElements(seg_num){
    seg = ["a","b","c","d","e","f","g"];
    result = {};
    for(let i=0; i<7;i++){
        result[seg[i]] = document.getElementById("seg-"+seg_num).getElementById("seg-"+seg_num+seg[i]);
    }
    return result;
}