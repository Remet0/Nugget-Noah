
let showTime;
let elapsed = new Date();
let temp = elapsed.getTime();
let timer = (1561075001619 +11490000000) - temp; 
console.log(temp);
console.log(timer);
function time(){
    timer --
    $('#timer').html(timer);
}

showTime = setInterval(time, .1);
