//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if(item !== question){
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})



// traversing the dom

// const questionBtn = document.querySelectorAll('.question-btn');

// questionBtn.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const questionBox = e.currentTarget.parentElement.parentElement;
//         questionBox.classList.toggle('show-text');
//     });
// });
