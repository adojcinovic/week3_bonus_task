var first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')
var fourth = document.getElementById('fourth')
var fifth = document.getElementById('fifth')

var array = [first, second, third, fourth, fifth]

array.forEach((e) => {
    var flag = true
    e.addEventListener('click', () => {
        flag ? e.className = 'selected-div' : e.className = 'hidden'
        flag = !flag
    })
})
