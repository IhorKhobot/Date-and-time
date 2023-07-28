let mode = 'mode'
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')
const content = document.getElementById('content')



function format(a) {

    const now = new Date()
    if(a === 'date') {
        return now.toLocaleDateString()
    }
    if(a==='time') {
        return now.toLocaleTimeString()
    }
    if(a==='full') {
        return now.toLocaleString()
    }
    if(a==='mode') {
        return 'Choose mode'
    }
}



setInterval(() => {
    content.textContent = format(mode)
},10)

full.onclick = function() {
    mode = 'full'
}
time.onclick = function() {
    mode = 'time'
}
date.onclick = function() {
    mode = 'date'
}