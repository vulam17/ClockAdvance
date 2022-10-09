let interval = setInterval(getTime,1000)
let date, hour, min, sec, soundAllow = false, newHour = 0
let hourOffset = 0, minOffset = 0, secOffset = 0, r = 0, c = 0, dotHourCX = 0, dotHourCY = 0, dotHourAlpha = 0
dotMinCX = 0, dotMinCY = 0, dotMinAlpha = 0,dotSecCX = 0, dotSecCY = 0, dotSecAlpha = 0
function getTime()
{
    r = window.innerWidth * 0.95 * 0.33 * 0.4
    document.getElementById("cont").style.height = window.innerWidth * 0.333 + "px"
    //console.log(Math.sin(Math.PI/2))
    
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
    dotHourAlpha = (2 * Math.PI/24) * hour
    dotHourCX = window.innerWidth / 6 + Math.cos(dotHourAlpha) * r
    dotHourCY = window.innerWidth / 6 + Math.sin(dotHourAlpha) * r
    document.getElementById("dothour").setAttribute("cx",dotHourCX)
    document.getElementById("dothour").setAttribute("cy",dotHourCY)

    dotMinAlpha = (2 * Math.PI/60) * min
    dotMinCX = window.innerWidth / 6 + Math.cos(dotMinAlpha) * r
    dotMinCY = window.innerWidth / 6 + Math.sin(dotMinAlpha) * r
    document.getElementById("dotmin").setAttribute("cx",dotMinCX)
    document.getElementById("dotmin").setAttribute("cy",dotMinCY)

    dotSecAlpha = (2 * Math.PI/60) * sec
    dotSecCX = window.innerWidth / 6 + Math.cos(dotSecAlpha) * r
    dotSecCY = window.innerWidth / 6 + Math.sin(dotSecAlpha) * r
    document.getElementById("dotsec").setAttribute("cx",dotSecCX)
    document.getElementById("dotsec").setAttribute("cy",dotSecCY)


    hourOffset = c - (hour * (c/24))
    minOffset = c - (min * (c/60))
    secOffset = c - (sec * (c/60))
    display()
        if((soundAllow == true) && (newHour == 0))
        {
            document.getElementById("music2").pause()
            document.getElementById("music1").play() 
        }
        if((sec < 6) && (min == 00) && (newHour < 1))
        {
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