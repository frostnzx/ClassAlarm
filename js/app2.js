
var dayname = ["วัน อาทิตย์","วัน จันทร์","วัน อังคาร","วัน พุธ","วัน พฤหัส","วัน ศุกร์","วัน เสาร์"]
var monthname = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
"กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]

var endtime = [560,610,660,710,760,810,860,910,960,1010];

function getClass(){
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var day = rtClock.getUTCDay();
    var seconds = rtClock.getSeconds();
    var time = (60*hours)+minutes ;
    var classnumber = 99 ; 

    if(time>=510 && time<560)classnumber=0 
    else if(time>=560 && time<610)classnumber=1 
    else if(time>=610 && time<660)classnumber=2 
    else if(time>=660 && time<710)classnumber=3 
    else if(time>=710 && time<760)classnumber=4 
    else if(time>=760 && time<810)classnumber=5 
    else if(time>=810 && time<860)classnumber=6 
    else if(time>=860 && time<910)classnumber=7 
    else if(time>=910 && time<960)classnumber=8 

    var minutesleft = endtime[classnumber]-time-1;
    var secondsleft = 60-seconds-1
    minutesleft = ("0" + minutesleft).slice(-2);
    secondsleft = ("0" + secondsleft).slice(-2);

    document.getElementById('clockblock').innerText = minutesleft + " : " + secondsleft + " นาที" ;

    var classlist = [
        [""],
        ["ประวัติศาสตร์","พละ","คณิตเพิ่มเติม","คณิตเพิ่มเติม","พักเที่ยง","สังคม","คณิตพื้นฐาน","เคมี","เคมี"],
        ["ฟิสิกส์","ฟิสิกส์","ภาษาไทย","คณิตเพิ่มเติม","พักเที่ยง","ภาษาอังกฤษ","แนะแนว","IS","IS"],
        ["การงานอาชีพ","คณิตเพิ่มเติม","เคมี","ภาษาอังกฤษ","พักเที่ยง","ว่าง","ว่าง","ว่าง","ว่าง"],
        ["คอมพิวเตอร์","คอมพิวเตอร์","ชีวะ","ชีวะ","พักเที่ยง","คณิตเพิ่มเติม","คณิตเพิ่มเติม","ประวัติศาสตร์","ภาษาอังกฤษ"],
        ["ภาษาอังกฤษ Teacher","คณิตพื้นฐาน","ฟิสิกส์","ฟิสิกส์","พักเที่ยง","ภาษาไทย","สังคม","ชีวะ","ว่าง"]
    ] 
    if (classnumber==99 || (day==0 || day==6))return "ไม่มีเรียน" ; 
    else return classlist[day][classnumber];
}
function getNextClass(){
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var day = rtClock.getUTCDay();
    var time = (60*hours)+minutes+50 ;
    
    var classnumber = 99 ; 
    if(time>=510 && time<560)classnumber=0 
    else if(time>=560 && time<610)classnumber=1 
    else if(time>=610 && time<660)classnumber=2 
    else if(time>=660 && time<710)classnumber=3 
    else if(time>=710 && time<760)classnumber=4 
    else if(time>=760 && time<810)classnumber=5 
    else if(time>=810 && time<860)classnumber=6 
    else if(time>=860 && time<910)classnumber=7 
    else if(time>=910 && time<960)classnumber=8 

    var classlist = [
        [""],
        ["ประวัติศาสตร์","พละ","คณิตเพิ่มเติม","คณิตเพิ่มเติม","พักเที่ยง","สังคม","คณิตพื้นฐาน","เคมี","เคมี"],
        ["ฟิสิกส์","ฟิสิกส์","ภาษาไทย","คณิตเพิ่มเติม","พักเที่ยง","ภาษาอังกฤษ","แนะแนว","IS","IS"],
        ["การงานอาชีพ","คณิตเพิ่มเติม","เคมี","ภาษาอังกฤษ","พักเที่ยง","ว่าง","ว่าง","ว่าง","ว่าง"],
        ["คอมพิวเตอร์","คอมพิวเตอร์","ชีวะ","ชีวะ","พักเที่ยง","คณิตเพิ่มเติม","คณิตเพิ่มเติม","ประวัติศาสตร์","ภาษาอังกฤษ"],
        ["ภาษาอังกฤษ Teacher","คณิตพื้นฐาน","ฟิสิกส์","ฟิสิกส์","พักเที่ยง","ภาษาไทย","สังคม","ชีวะ","ว่าง"]
    ] 
    if (classnumber==99 || (day==0 || day==6))return "ไม่มีเรียน" ; 
    else return classlist[day][classnumber];
}
function CountdownClock(){
    var rtClock = new Date();
    var day = rtClock.getUTCDay();
    var realdate = rtClock.getDate();
    var month = rtClock.getMonth();
    var year = rtClock.getFullYear();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var classname = getClass()
    var nextclassname = getNextClass();

    year+=543;

    document.getElementById('classname-display').innerText = "วิชา " + classname ;
    document.getElementById('datetimedisplayer').innerText = dayname[day] + " ที่ " + realdate + " " + monthname[month] + " " + year ;
    document.getElementById('nextclass').innerText = "คาบต่อไปคือ : " + nextclassname ;
    setTimeout( "CountdownClock()", 100);
}