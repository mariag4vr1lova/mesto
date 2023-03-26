const popup = document.querySelector('.popup');
const popupCloseButtonElement = popup.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button'); //редактировать профиль
const popupFormElement = document.querySelector('.popup__form');
const nameElement = document.querySelector('.profile__title'); //имя пользователя
const textElement = document.querySelector('.profile__subtitle'); // информация
const popupInputNameElement = document.querySelector('.popup__input_user_name'); //ввод имени
const popupInputText = document.querySelector('.popup__input_user_text'); // ввод информации
const SaveButtonElement = document.querySelector('.popup__button-save'); //кнопка сохранить

const closePopup = function () {
    popup.classList.remove('popup_opened');
}
function openForm() {
    popup.classList.add('popup_opened');
    popupFormElement.classList.add('popup_opened');
    nameElement.textContent = popupInputNameElement.value; 
    textElement.textContent = popupInputText.value; 
}
function formSubmitHandler (evt) { 
    evt.preventDefault(); 
    nameElement.textContent = popupInputNameElement.value; 
    textElement.textContent = popupInputText.value; 
    closePopup(); 

} 
popupOpenButtonElement.addEventListener('click', openForm);
popupCloseButtonElement.addEventListener('click', closePopup);
popupFormElement.addEventListener('submit', formSubmitHandler);
