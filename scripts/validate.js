const obj = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: 'popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}); 
 /* function toggleButtonState (inputs, submitButton, inactiveButtonClass) {
    const hasInvalidInput = inputs.some((input) => !input.validity.valid);
    if (hasInvalidInput) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
    } else {
        submitButton.classList.remove(inactiveButtonClass);
        submitButton.disabled = false;
    }
  };
function checkInputValidity (formSelector, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      showInputError(formSelector, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideInputError(formSelector, inputElement, inputErrorClass, errorClass);
    }
  };
function setEventListeners (formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
    const inputList = Array.from(document.querySelectorAll(inputSelector));
    const submitButton = formSelector.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formSelector, inputElement, inputErrorClass, errorClass);
         toggleButtonState(inputList, submitButton, inactiveButtonClass);
      });
    });
    toggleButtonState(inputList, submitButton, inactiveButtonClass);
  };
function enableValidation ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formSelector) => {
      formSelector.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    setEventListeners(formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  });
  };

function resetValidation(formSelector, inputSelector, inputErrorClass, errorClass) {
    const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
    const errorList = Array.from(formSelector.querySelectorAll(`.${errorClass}`));
  
    inputList.forEach((inputSelector) => {
      hideInputError(formSelector, inputSelector, inputErrorClass, errorClass);
    });
  
    errorList.forEach((errorElement) => {
      errorElement.textContent = "";
      errorElement.classList.remove(errorClass);
    });
  
    toggleButtonState(inputList, formSelector.querySelector('.popup__button'), inactiveButtonClass);
  } */
  function show({formSelector}){
    const form = document.querySelector(formSelector);
    console.log(form);
    };
    // const errorElement = popupForm.querySelector(`.${popupForm.querySelector(inputForm).id}-error`);
   function showInputError(popupForm, inputForm, inputErrorClass, errorClass) {
        const errorElement = popupForm.querySelector(`.${popupForm.querySelector(inputForm).id}-error`);
        inputForm.classList.add(inputErrorClass);
        errorElement.textContent = inputForm.validationMessage;
        errorElement.classList.add(errorClass);
        console.log(errorElement);
    };
        /*inputForm.classList.add(inputErrorClass);
        errorElement.textContent = inputForm.validationMessage;
        errorElement.classList.add(errorClass);*/
      
      
    function hideInputError (popupForm, inputForm, inputErrorClass, errorClass) {
        const errorElement = popupForm.querySelector(`.${popupForm.querySelector(inputForm).id}-error`);
        inputForm.classList.remove(inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(errorClass);
      };
    function checkInputValidity (popupForm, inputForm, inputErrorClass, errorClass) {
        const inputVal = popupForm.querySelector(inputForm);
        if (!inputVal.validity.valid) {
          showInputError(popupForm, inputForm, inputForm.validationMessage, inputErrorClass, errorClass);
        } else {
          hideInputError(popupForm, inputForm, inputErrorClass, errorClass);
        }
      };
    
    function setEventListeners (popupForm, inputForm) {
        const inputList = Array.from(popupForm.querySelectorAll(inputForm));
        inputList.forEach((item) => {
          item.addEventListener('input', function() {
            checkInputValidity(popupForm, inputForm);
          });
        });
    };

    function enableValidation({formSelector, inputSelector}) {
        const formList = Array.from(document.querySelectorAll(formSelector));
        formList.forEach((formSelector) => {
          formSelector.addEventListener('input', function (evt) {
            setEventListeners(formSelector, inputSelector);
          });
        });
    };
    enableValidation(obj); 