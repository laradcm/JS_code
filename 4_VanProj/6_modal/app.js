// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const modalBtn = document.querySelector('.modal-btn');
const modalCloseBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay');

// modalBtn.addEventListener('click',() => {
//     modalOverlay.classList.add('open-modal');
// });

// modalCloseBtn.addEventListener('click',() => {
//     modalOverlay.classList.remove('open-modal');
// });


[modalBtn, modalCloseBtn].forEach(evt => {
    evt.addEventListener('click', () => {
        modalOverlay.classList.toggle('open-modal');
    })
});