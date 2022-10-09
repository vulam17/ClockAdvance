let interval = setInterval(getTime,1000)
let date, hour, min, sec, soundAllow = false, newHour = 0
let hourOffset = 0, minOffset = 0, secOffset = 0, r = 0, c = 0
function getTime()
{
    r = window.innerWidth * 0.95 * 0.33 * 0.4
    document.getElementById("cont").style.height = window.innerWidth * 0.333 + "px"
    if(window.innerWidth < 280) 
    {
        document.getElementById("cont").style.height = window.innerWidth * 3 + "px"
        r = window.innerWidth * 0.4
    }
    c = 2 * 3.14 * r
    document.getElementById("hour").setAttribute("r",r)
    document.getElementById("hour").style.strokeDasharray = c + "px"
    document.getElementById("min").setAttribute("r",r)
    document.getElementById("min").style.strokeDasharray = c + "px"
    document.getElementById("sec").setAttribute("r",r)
    document.getElementById("sec").style.strokeDasharray = c + "px"
    document.getElementById("hourbg").setAttribute("r",r)
    document.getElementById("hourbg").style.strokeDasharray = c + "px"
    document.getElementById("minbg").setAttribute("r",r)
    document.getElementById("minbg").style.strokeDashoffset = c + "px"
    document.getElementById("secbg").setAttribute("r",r)
    document.getElementById("secbg").style.strokeDashoffset = c + "px"
    date = new Date()
    hour = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    hourOffset = c - (hour * (c/24))
    minOffset = c - (min * (c/60))
    secOffset = c - (sec * (c/60))
    display()
        if((soundAllow == true) && (newHour == 0))
        {
            document.getElementById("music2").pause()
            document.getElementById("music1").play() 
            console.log("+")
        }
        if((sec < 6) && (min == 00) && (newHour < 1))
        {
            console.log("here")
            document.getElementById("music1").pause()
            document.getElementById("music2").play() 
            newHour++
        }
        else
        {
            newHour = 0
        }
}
function display()
{
    document.getElementById("hourLabel").innerHTML = hour
    document.getElementById("minLabel").innerHTML = min
    document.getElementById("secLabel").innerHTML = sec
    document.getElementById("hour").style.strokeDashoffset = hourOffset + "px"
    document.getElementById("min").style.strokeDashoffset = minOffset + "px"
    document.getElementById("sec").style.strokeDashoffset = secOffset + "px"
}
function playSound()
{
   if(soundAllow == false) 
   {
    soundAllow = true
    document.getElementById("soundbtn").innerHTML = "Sound On"
    document.getElementById("soundbtn").style.backgroundColor = "rgba(255,255,255,0.9)"
   } 
   else
   {
    soundAllow = false
    document.getElementById("soundbtn").innerHTML = "Sound Off"
    document.getElementById("soundbtn").style.backgroundColor = "rgba(255,255,255,0.3)"
    document.getElementById("music1").pause()
    document.getElementById("music2").pause()
   }

}