const title = document.getElementById('main-title');
// console.log(title);

//select element by it's class time
const paragraph = document.getElementsByClassName('intro-text');
// console.log(paragraph[0]);
// console.log(paragraph[1]);
// console.log(paragraph[2]);


// select element using querySelector
const firstParagraph = document.querySelector('p');
// console.log(firstParagraph);

//select all prargraph tags
const allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs[0]);

title.textContent = "Hello Class, how are you!";

firstParagraph.innerHTML = "Hi <strong>Charles</strong>"

title.setAttribute('class', 'highlight');

const classValue = title.getAttribute('class');
// console.log(classValue);

function handleClick() {
  alert('Title was clicked!');
}

title.addEventListener('click', handleClick);

title.addEventListener('mouseover', function () {
  title.style.color = 'red';
})