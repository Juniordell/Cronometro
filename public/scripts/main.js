var inputTime = Number(localStorage.getItem('inTime'))
var now_before = Number(localStorage.getItem('now'))
var stop_button = document.querySelector('#stop')

var cron = (inputTime * 60 * 1000) + now_before

var x = setInterval( function() {
    var now = new Date().getTime()

    
    var min = document.querySelector('#min')
    var sec = document.querySelector('#sec')
    var hund = document.querySelector('#hund')


    var distance = cron - now


    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    var hundredth = Math.floor((distance % (1000)) / 10)

    inputTime < 10 ? min.innerHTML = `0${inputTime - 1}` : min.innerHTML = inputTime - 1

    seconds < 10 ? sec.innerHTML = `0${seconds}` : sec.innerHTML = seconds
    
    hundredth < 10 ? hund.innerHTML = `0${hundredth}` : hund.innerHTML = hundredth
    
    if (distance < 0 ) {
        var time_left = document.querySelector('.time-left')
        var time = document.querySelector('.time')

        time_left.style.display = 'none'
        time.style.display = 'none'
        stop_button.style.display = 'none'
        timeOut.style.display = 'block'
    }
})

stop_button.addEventListener('click', () => clearInterval(x))

window.addEventListener('storage', () => {
    window.location.reload()   
});

function back() {
    window.location = '/'
}
