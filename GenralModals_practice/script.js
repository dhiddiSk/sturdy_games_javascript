'use strict';

const buttons = document.querySelectorAll('.show-modal');
const openModal = function(){
                            document.querySelector('.modal').classList.remove('hidden');
                            document.querySelector('.overlay').classList.remove('hidden');
                            }
const closeModal = function(){
                            document.querySelector('.modal').classList.add('hidden');
                            document.querySelector('.overlay').classList.add('hidden');
                            }

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', openModal);
}


document.querySelector('.close-modal').addEventListener('click', closeModal)

document.querySelector('.overlay').addEventListener('click', closeModal)

document.addEventListener('keydown', function(object){
    if(object.key === 'Escape'){
        closeModal();
    }

})
