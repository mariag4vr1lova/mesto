const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupFormElement = document.querySelector('.popup__form');
const nameElement = document.querySelector('.profile__title');
const textElement = document.querySelector('.profile__subtitle');
const popupInputNameElement = document.querySelector('.popup__input_username');
const popupInputTextElement = document.querySelector('.popup__input_usertext');

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    
}
const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameElement.textContent = popupInputNameElement.value;
    textElement.textContent = popupInputTextElement.value;
    closePopup();
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupFormElement.addEventListener('submit', formSubmitHandler);
