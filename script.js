var array = [...document.querySelectorAll('#box')]

console.log(box);

array.forEach((element) => {
    var flag = true
    element.addEventListener('click', () => {
        flag ? element.className = 'selected-div' : element.className = 'hidden'
        flag = !flag
    })
})
