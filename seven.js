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
const ENCOD = {
    0:"0x7E",1:"0x30",2:"0x6D",3:"0x79",4:"0x33",
    5:"0x5B",6:"0x5F",7:"0x70",8:"0x7F",9:"0x7B"
}

var date = new Date();

var seg_0 = getElements(0);
var seg_1 = getElements(1);
var seg_2 = getElements(2);
var seg_3 = getElements(3);
var seg_4 = getElements(4);
var seg_5 = getElements(5)

window.onload = function (){
    //make the colon blink between clock
    blink();
    elapse();
}

var blink = function(){
    var colon0 = document.getElementById("colon-0").getElementById("g0");
    var colon1 = document.getElementById("colon-1").getElementById("g1");

    let i = 0;
    let alt = [OFFCOLOR,ONCOLOR];
    setInterval(function(){
        colon0.style.fill = alt[i];
        colon1.style.fill = alt[i];
        i = (i+1) % alt.length;
    }, 3000/5);
}

var elapse = function(){
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    setSeconds(s);
    setMinutes(m);
    setHours(h);

    setInterval(function(){
        if (s === 59){ 
            s = 0
            m++;
            setMinutes(m);
            if (m === 59){
                m = 0;
                h++;
                setHours(h);
                if (h === 24){
                    h = 0;
                }
            }
        };
        console.log(s, m , h)
        s++;
        setSeconds(s);
    },1000);
}

function getElements(seg_num){
    seg = ["a","b","c","d","e","f","g"];
    result = {};
    for(let i=0; i<7;i++){
        result[seg[i]] = document.getElementById("seg-"+seg_num).getElementById("seg-"+seg_num+seg[i]);
    }
    return result;
}

function setHours(int){
    int = "" + int;
    if(int.length == 2){
        sevenSegments(ENCOD[int[0]], seg_0)
        sevenSegments(ENCOD[int[1]], seg_1)
    }
    else{
        sevenSegments(ENCOD[0], seg_0)
        sevenSegments(ENCOD[int[0]], seg_1)
    }
}

function setMinutes(int){
    int = "" + int;
    if(int.length == 2){
        sevenSegments(ENCOD[int[0]], seg_2);
        sevenSegments(ENCOD[int[1]], seg_3);
    }
    else{
        sevenSegments(ENCOD[0], seg_2);
        sevenSegments(ENCOD[int[0]], seg_3);
    }
}

function setSeconds(int){
    int = "" + int;
    if(int.length == 2){
        sevenSegments(ENCOD[int[0]], seg_4);
        sevenSegments(ENCOD[int[1]], seg_5);
    }
    else{
        sevenSegments(ENCOD[0], seg_4);
        sevenSegments(ENCOD[int[0]], seg_5);
    }
}

function sevenSegments(encoding, seg){
    seg_enc = ["a","b","c","d","e","f","g"];
    //A
    if(binary((encoding >> 6) & 1)){
        seg.a.style.fill = ONCOLOR;
    }
    else{
        seg.a.style.fill = OFFCOLOR;
    }
    //B
    if(binary((encoding >> 5) & 1)){
        seg.b.style.fill = ONCOLOR;
    }
    else{
        seg.b.style.fill = OFFCOLOR;
    }
    //C
    if(binary((encoding >> 4) & 1)){
        seg.c.style.fill = ONCOLOR;
    }
    else{
        seg.c.style.fill = OFFCOLOR;
    }
    //D
    if(binary((encoding >> 3) & 1)){
        seg.d.style.fill = ONCOLOR;
    }
    else{
        seg.d.style.fill = OFFCOLOR;
    }
    //E
    if(binary((encoding >> 2) & 1)){
        seg.e.style.fill = ONCOLOR;
    }
    else{
        seg.e.style.fill = OFFCOLOR;
    }
    //F
    if(binary((encoding >> 1) & 1)){
        seg.f.style.fill = ONCOLOR;
    }
    else{
        seg.f.style.fill = OFFCOLOR;
    }
    //G
    if(binary((encoding >> 0) & 1)){
        seg.g.style.fill = ONCOLOR;
    }
    else{
        seg.g.style.fill = OFFCOLOR;
    }
}

function binary(int){
    if (int === 1){
        return true;
    }
    return false;
}