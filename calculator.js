const result = document.querySelector(".result");
const num = document.querySelectorAll('.one');
const oper = document.querySelectorAll('.oper');
const eql = document.querySelector('.eql');
const clear = document.querySelector('.clear');
const sq = document.querySelector('.sq');
const del = document.querySelector('.del');



var currentString = result.innerText;
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function () {
        //    num.innerHTML+= currentString;
        // num[i].innerText += result.innerText;
        currentString = result.innerText += num[i].innerText;
    })
}

for (let i = 0; i < oper.length; i++) {
    oper[i].addEventListener('click', function () {
        result.innerText += oper[i].innerText;
    })
}


eql.addEventListener('click', function () {
    result.innerText = eval(currentString);
})


clear.addEventListener('click', function () {
    result.innerText = "  ";
}) 

sq.addEventListener('click', function(){
    result.innerText = currentString * currentString;
})



del.addEventListener('click', function(){
    
    result.innerText= result.innerText.slice(0,-1)

})
