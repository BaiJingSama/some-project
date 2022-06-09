let div1 = document.createElement('div')
div1.className = 'div1'
div1.innerHTML = '按住我就可以拖动'
div1.style.fontSize = '15px'
document.body.appendChild(div1)

let div1Map = div1.onclick = (x) => {

}

let opened = false

let lastX
let lastY

div1.onmousedown = (e) => {
    lastX = e.x
    lastY = e.y
    opened = true
}
document.onmousemove = (e) => {
    if (opened === true) {
        let deltaX = e.x - lastX
        let deltaY = e.y - lastY
        let resultY = top + deltaY
        let top = parseInt(div1.style.top) || 0
        let left = parseInt(div1.style.left) || 0
        div1.style.top = (top + deltaY < 0 ? 0 : top + deltaY) + 'px'
        div1.style.left = (left + deltaX < 0 ? 0 : left + deltaX) + 'px'
        lastX = e.x
        lastY = e.y
        /*         div1.style.top = (x.y - 50) + 'px'
                div1.style.left = (x.x - 50) + 'px' */
    }
}

document.onmouseup = () => {
    opened = false
}






// if (mouse.x !== )