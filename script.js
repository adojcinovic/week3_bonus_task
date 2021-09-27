var array = [...document.querySelectorAll('#box')]

console.log(box);

array.forEach((e) => {
    var flag = true
    e.addEventListener('click', () => {
        flag ? e.className = 'selected-div' : e.className = 'hidden'
        flag = !flag
    })
})
