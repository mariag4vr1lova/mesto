const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__button-close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
console.log(popupOpenButtonElement);

const openPopup = function () {
    popupElement.classList.add('popup_opend');
    console.log("Open popup clicked");
}
const closePopup = function () {
    popupElement.classList.remove('popup_opend');
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

const popupFormElement = document.querySelector(".popup__form");
const nameElement = document.querySelector(".profile__title");
const textElement = document.querySelector(".profile__subtitle");
const popupInputNameElement = document.querySelector(".popup__input_name");
const popupInputTextElement = document.querySelector(".popup__input_text");
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameElement.textContent = popupInputNameElement.value;
    textElement.textContent = popupInputTextElement.value;

    popupInputNameElement.textContent = nameElement.value;
    popupInputTextElement.textContent = textElement.value;
    closePopup();
} 
popupFormElement.addEventListener('submit', formSubmitHandler);
