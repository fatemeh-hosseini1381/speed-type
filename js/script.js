let letter=[
    "Hi fatemeh",
    "i wish you have good time",
    "how old are you?",
    "hey",
    "you",
    "like"
]
let num =[
    1,2,4,6,7,8
]
let diferent=Math.floor(Math.random()*letter.length)
let numM=Math.floor(Math.random()*num.length)
console.log(diferent);
num=num[numM]
letter=letter[diferent]
let concat=letter.concat(num)
let p=document.querySelector(".text>p").innerHTML=concat
let text_erea=document.querySelector(".text-type>textarea")
let clock=document.querySelector(".clock>.timer")
let text_type=document.querySelector(".text-type")
let stop_timer=document.querySelector(".stop")
console.log(stop_timer);
let stop;
let flage=false;
let time=[0,0,0,0]
const starttime=()=>{
 let data_time=`${time[0]}:${time[1]}:${time[2]}`
   time[3]++
   time[0]=Math.floor(time[3]/6000)
   time[1]=Math.floor((time[3]/100) - (time[0]*60))
   time[2]=Math.floor(time[3]-(time[0]*600 + time[1]*100))
   let zero= add_zero(time[0],time[1],time[2])
   clock.innerHTML=zero
}
const add_zero=(x,y,z)=>{
    x = x < 10 ? '0' + x : x;
    y = y < 10 ? '0' + y : y;
    z = z < 10 ? '0' + z : z;
    return `${x}:${y}:${z}`;    
}
const finaly_time_clock=()=>{
    if(!flage){
    stop= setInterval(starttime,10)
    }
    flage=true
    console.log(clock);
 }
 const compare =()=>{
    let value_text_area=text_erea.value
    let match_type = p.substring(0, value_text_area.length);
    console.log(match_type);
    if(p===value_text_area){
        text_type.style.borderColor="green"
        console.log(green);
    }else if (match_type===value_text_area){
        text_type.style.borderColor="yellow"
    }
    else{
        text_type.style.borderColor="red"
    }
    
 }
stop_timer.addEventListener("click",()=>{
    clearInterval(stop)
})
text_erea.addEventListener("keypress", finaly_time_clock)
text_erea.addEventListener("keyup",compare )
