const scrollController = {
    disabledScroll() {
        document.body.style.cssText = `
        overflow:hidden;
        `;
    },
    enabledScroll() {
        document.body.style.cssText = `
        
        `;
    },
}




const buttonEllem = document.querySelector('.input__button');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0; 
transition: opasity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest('.modal__close')) {
       
    modalElem.style.opacity = 0;

    setTimeout(() => {
    modalElem.style.visibility = 'hidden';
    } , 300)
    scrollController.enabledScroll();
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    scrollController.disabledScroll();
};



buttonEllem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);


 const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
    const radios = form.elements["choice"]; 


    function checkRadioSelected() {

      if (!radios) {
        submitBtn.disabled = true;
        return;
      }

      if (radios.length) {
        for (let r of radios) {
          if (r.checked) {
            submitBtn.disabled = false;
            return;
          }
        }
        submitBtn.disabled = true;
      } else {

        submitBtn.disabled = !radios.checked;
      }
    }


    if (radios.length) {
      for (let r of radios) {
        r.addEventListener("change", checkRadioSelected);
      }
    } else {
      radios.addEventListener("change", checkRadioSelected);
    }

 

      
    ;
