let interval = setInterval(getTime,1000)
let date, hour, min, sec, soundAllow = false, newHour = 0
let hourOffset = 0, minOffset = 0, secOffset = 0, r = 0, c = 0, dotHourCX = 0, dotHourCY = 0, dotHourAlpha = 0
dotMinCX = 0, dotMinCY = 0, dotMinAlpha = 0,dotSecCX = 0, dotSecCY = 0, dotSecAlpha = 0
function getTime()
{
    r = window.innerWidth * 0.33 * 0.4
    document.getElementById("cont").style.height = window.innerWidth * 0.333 + "px"
    document.getElementById("hour").setAttribute("stroke-width",20)
    document.getElementById("min").setAttribute("stroke-width",20)
    document.getElementById("sec").setAttribute("stroke-width",20)
    document.getElementById("hourbg").setAttribute("stroke-width",22)
    document.getElementById("minbg").setAttribute("stroke-width",22)
    document.getElementById("secbg").setAttribute("stroke-width",22)
    document.getElementById("dothour").setAttribute("r",20)
    document.getElementById("dotmin").setAttribute("r",20)
    document.getElementById("dotsec").setAttribute("r",20)
    if(window.innerWidth < 500) 
    {
        document.getElementById("hour").setAttribute("stroke-width",10)
        document.getElementById("min").setAttribute("stroke-width",10)
        document.getElementById("sec").setAttribute("stroke-width",10)
        document.getElementById("hourbg").setAttribute("stroke-width",12)
        document.getElementById("minbg").setAttribute("stroke-width",12)
        document.getElementById("secbg").setAttribute("stroke-width",12)
        document.getElementById("dothour").setAttribute("r",10)
        document.getElementById("dotmin").setAttribute("r",10)
        document.getElementById("dotsec").setAttribute("r",10)
    }
    if(window.innerWidth < 250) 
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

    dotMinAlpha = (2 * Math.PI/60) * min
    dotMinCX = window.innerWidth / 6 + Math.cos(dotMinAlpha) * r
    dotMinCY = window.innerWidth / 6 + Math.sin(dotMinAlpha) * r

    dotSecAlpha = (2 * Math.PI/60) * sec
    dotSecCX = window.innerWidth / 6 + Math.cos(dotSecAlpha) * r
    dotSecCY = window.innerWidth / 6 + Math.sin(dotSecAlpha) * r

    if(window.innerWidth < 250) 
    {
        dotHourCX = window.innerWidth / 2 + Math.cos(dotHourAlpha) * r
        dotHourCY = window.innerWidth / 2 + Math.sin(dotHourAlpha) * r 
        dotMinCX = window.innerWidth / 2 + Math.cos(dotMinAlpha) * r
        dotMinCY = window.innerWidth / 2 + Math.sin(dotMinAlpha) * r 
        dotSecCX = window.innerWidth / 2 + Math.cos(dotSecAlpha) * r
        dotSecCY = window.innerWidth / 2 + Math.sin(dotSecAlpha) * r
    }
    document.getElementById("dothour").setAttribute("cx",dotHourCX)
    document.getElementById("dothour").setAttribute("cy",dotHourCY)
    document.getElementById("dotmin").setAttribute("cx",dotMinCX)
    document.getElementById("dotmin").setAttribute("cy",dotMinCY)
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