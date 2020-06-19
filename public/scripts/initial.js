const title = document.querySelector('.counter h1')

function typeWriter(element) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 120 * i)
    });
}

typeWriter(title)

function change() {

    var inputTime = document.querySelector("#time").value
    var now = new Date().getTime()
    var inputNum = Number(inputTime)

    if (!(inputNum > 0)) {
        var modal = document.getElementById("modal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block"
        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    } else {

        localStorage.setItem('inTime', inputTime)
        localStorage.setItem('now', now)
        window.location = '/time'
    }

}





