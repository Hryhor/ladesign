/* accordion*/
const info = document.querySelectorAll('.accordion');


info.forEach(function(item){
  item.addEventListener('click', function(){
    this.nextElementSibling.classList.toggle('hidden');
  })
})
/* accordion*/


/*mobile*/
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNavWindow = document.querySelector('.mobile-nav-window');

mobileNavButton.addEventListener('click', function(){
  mobileNavIcon.classList.toggle('active');
  mobileNavWindow.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})
/*mobile*/

/*modal-window */

const button = document.querySelector('.request');

button.addEventListener('click', function(){

  const modal = document.querySelector('#modal-1');
  modal.classList.remove('hidden');
  document.body.classList.toggle('no-scroll');

  const buttonClose = document.querySelector('.btn-close');
  buttonClose.addEventListener('click', function(){
    modal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  })

})
/*modal-window */
