const list_items = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')
var c1 = document.querySelector('#c1')
var c2 = document.querySelector('#c2')
var c3 = document.querySelector('#c3')
var p1 = document.querySelector('#p1')
var p2 = document.querySelector('#p2')
var p3 = document.querySelector('#p3')

let draggedItem = null

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i]

    item.addEventListener('dragstart', function() {
        draggedItem = item
        console.log(event)
        setTimeout(() => {
            item.style.display = 'none'
        }, 1)
    })

    item.addEventListener('dragend', () => {
        setTimeout(function () {
            draggedItem.style.display = 'block'
            draggedItem = null
        }, 0)
    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j]
        list.addEventListener('dragover', e => e.preventDefault())

        list.addEventListener('dragenter', e => {
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
            e.preventDefault()
        })

        list.addEventListener('dragleave', e => {
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
        })

        list.addEventListener('drop', e => {
            list.append(draggedItem)
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
        })

    }
}
function check() {

    if (p1.children[0] == c3 && p2.children[0] == c1 && p3.children[0] == c2) {
        console.log('DEU CERTO CARA!!')
        const now = new Date().getTime()

        console.log(now)
        localStorage.setItem('now', now)
        localStorage.setItem('inTime', 99)
        
    } else {
        console.log('Ainda não :(')
    }
    
}

var reset_button = document.querySelector('.reset-button')

reset_button.addEventListener('mouseover', event => {
    p1.appendChild(c1)
    p2.appendChild(c2)
    p3.appendChild(c3)
})