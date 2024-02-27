 let h1ele=document.querySelector('h1')
// console.log(h1ele)

let div=document.querySelector('.main')
let btn=document.querySelector('button')

console.log(div)
console.log(btn)
console.log(main.firstElementChild)
console.log(main.lastElementChild)

console.log(main.parentElement)
console.log(main.previousElementSibling)
console.log(main.nextElementSibling)


h1ele.innerHTML+='<h1>practice</h1>'

//add event listener
btn.addEventListener('click',()=>{

    //change content
    h1ele.textContent="hello"

    div.children[0].textContent="new Heading";

    //change styles
    h1ele.style.color="blue"
    h1ele.style.backgroundColor="green"
    h1ele.style.fontSize="60px"

    //add children
    div.innerHTML+='<h3>practice</h3>'

})


