var arrow1 = document.getElementById('arrow1')
var first = document.getElementById('first')
var firstAnswer = document.getElementById('one')
var question1 = document.getElementById('question1')

console.log(firstAnswer);

console.log(arrow1);
var flag = true

first.addEventListener('click', () => {
    flag ? firstAnswer.className = 'visible' : firstAnswer.className = 'hidden';
    flag ? arrow1.className = 'rotate' : arrow1.className = '';
    flag ? question1.className = 'bold' : question1.className = ''
    flag = !flag
    console.log(flag);
})

