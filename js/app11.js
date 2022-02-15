
var dayname = ["วัน อาทิตย์","วัน จันทร์","วัน อังคาร","วัน พุธ","วัน พฤหัส","วัน ศุกร์","วัน เสาร์"]
var monthname = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
"กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]

var endtime = [560,610,660,710,760,810,860,910,960,1010];

function getClassUpdate(){
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

    var classlist = [
        [""],
        ["ประวัติศาสตร์","พละ","คณิตเพิ่มเติม","คณิตเพิ่มเติม","พักเที่ยง","สังคม","คณิตพื้นฐาน","เคมี","เคมี"],
        ["ฟิสิกส์","ฟิสิกส์","ภาษาไทย","คณิตเพิ่มเติม","พักเที่ยง","ภาษาอังกฤษ","แนะแนว","IS","IS"],
        ["การงานอาชีพ","คณิตเพิ่มเติม","เคมี","ภาษาอังกฤษ","พักเที่ยง","ว่าง","ว่าง","ว่าง","ว่าง"],
        ["คอมพิวเตอร์","คอมพิวเตอร์","ชีวะ","ชีวะ","พักเที่ยง","คณิตเพิ่มเติม","คณิตเพิ่มเติม","ประวัติศาสตร์","ภาษาอังกฤษ"],
        ["ภาษาอังกฤษ Teacher","คณิตพื้นฐาน","ฟิสิกส์","ฟิสิกส์","พักเที่ยง","ภาษาไทย","สังคม","ชีวะ","ว่าง"]
    ]
    var minutesleft = endtime[classnumber]-time-1;
    var secondsleft = 60-seconds-1
    minutesleft = ("0" + minutesleft).slice(-2);
    secondsleft = ("0" + secondsleft).slice(-2);

    document.getElementById('clockblock').innerText = minutesleft + " : " + secondsleft + " นาที" ;
    if (classnumber==99 || (day==0 || day==6)){
        document.getElementById('clockblock').innerText = "00:00";
        return "ไม่มีเรียน" ; 
    }
    else return classlist[day][classnumber];
}
function getNextClassUpdate(){
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
        ["อาเซียน","ประวัติศาสตร์","ภาษาอังกฤษ","ภาษาไทย","พักเที่ยง","คอมพิวเตอร์","คอมพิวเตอร์","ว่าง","ว่าง"],
        ["การเขียน","พละ","สังคม","ภาษาอังกฤษ Teacher","พักเที่ยง","ภาษาอังกฤษ","คณิตพื้นฐาน","สังคม","ว่าง"],
        ["การงานอาชีพ","แนะแนว","ภาษาไทย","อาเซียน","พักเที่ยง","ว่าง","ว่าง","ว่าง","ว่าง"],
        ["สังคม","ภาษาอังกฤษ","เคมี","เคมี","พักเที่ยง","การเขียน","สังคม","คณิตพื้นฐาน","IS"],
        ["นาฏศิลป์","เคมี","IS","IS","พักเที่ยง","การงานอาชีพ","การงานอาชีพ","ว่าง","ว่าง"]
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
    var time = (60*hours)+minutes+50;
    var classname = getClassUpdate()
    var nextclassname = getNextClassUpdate();
    if(time == 560 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 610 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 660 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 710 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 760 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 810 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 860 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 910 && seconds < 1.2) ShowAlertTimeNotification()
    else if(time == 960 && seconds < 1.2) ShowAlertTimeNotification()
    year+=543;
    console.log(time)
    console.log(seconds)
    document.getElementById('classname-display').innerText = "วิชา " + classname ;
    document.getElementById('datetimedisplayer').innerText = dayname[day] + " ที่ " + realdate + " " + monthname[month] + " " + year ;
    document.getElementById('nextclass').innerText = "คาบต่อไปคือ : " + nextclassname ;
    setTimeout( "CountdownClock()", 1000);
}
function getClassName(){
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

    var classlist = [
        [""],
        ["อาเซียน","ประวัติศาสตร์","ภาษาอังกฤษ","ภาษาไทย","พักเที่ยง","คอมพิวเตอร์","คอมพิวเตอร์","ว่าง","ว่าง"],
        ["การเขียน","พละ","สังคม","ภาษาอังกฤษ Teacher","พักเที่ยง","ภาษาอังกฤษ","คณิตพื้นฐาน","สังคม","ว่าง"],
        ["การงานอาชีพ","แนะแนว","ภาษาไทย","อาเซียน","พักเที่ยง","ว่าง","ว่าง","ว่าง","ว่าง"],
        ["สังคม","ภาษาอังกฤษ","เคมี","เคมี","พักเที่ยง","การเขียน","สังคม","คณิตพื้นฐาน","IS"],
        ["นาฏศิลป์","เคมี","IS","IS","พักเที่ยง","การงานอาชีพ","การงานอาชีพ","ว่าง","ว่าง"]
    ] 
    if (classnumber==99 || (day==0 || day==6)){
        return "ไม่มีเรียน" ; 
    }
    else return classlist[day][classnumber];
}
function getNextClassName(){
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
        ["อาเซียน","ประวัติศาสตร์","ภาษาอังกฤษ","ภาษาไทย","พักเที่ยง","คอมพิวเตอร์","คอมพิวเตอร์","ว่าง","ว่าง"],
        ["การเขียน","พละ","สังคม","ภาษาอังกฤษ Teacher","พักเที่ยง","ภาษาอังกฤษ","คณิตพื้นฐาน","สังคม","ว่าง"],
        ["การงานอาชีพ","แนะแนว","ภาษาไทย","อาเซียน","พักเที่ยง","ว่าง","ว่าง","ว่าง","ว่าง"],
        ["สังคม","ภาษาอังกฤษ","เคมี","เคมี","พักเที่ยง","การเขียน","สังคม","คณิตพื้นฐาน","IS"],
        ["นาฏศิลป์","เคมี","IS","IS","พักเที่ยง","การงานอาชีพ","การงานอาชีพ","ว่าง","ว่าง"]
    ] 
    if (classnumber==99 || (day==0 || day==6))return "ไม่มีเรียน" ; 
    else return classlist[day][classnumber];
}
function ShowAlertTimeNotification() {
    var name = getClassName()
    var nextname = getNextClassName()
    console.log(name);
    console.log(nextname);
    if(name == nextname)
    {
        const ClassAlert = new Notification("วิชานี้ยังเหลืออีก 1 คาบนะ",
        {
            body: "วิชาเดิม",
            
            icon : "/ClassAlarm.png"
        })
    }
    else
    {
        const ClassAlert = new Notification("คาบนี้จบแล้ว เริ่มเรียนคาบถัดไปได้!",
        {
            body: "คาบต่อไปคือ " + nextname,
            icon : "/ClassAlarm.png"
        })
    }
}

if(Notification.permission !== "denied") 
{
    Notification.requestPermission().then(permission => 
    {
        console.log(permission);
    })
}