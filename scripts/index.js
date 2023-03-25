const popup = document.querySelector('.popup');
const popupCloseButtonElement = popup.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button'); //редактировать профиль
const popupFormElement = document.querySelector('.popup__form');
const nameElement = document.querySelector('.profile__title'); //имя пользователя
const textElement = document.querySelector('.profile__subtitle'); // информация
const popupInputNameElement = document.querySelector('.popup__input_user_name'); //ввод имени
const popupInputText = document.querySelector('.popup__input_user_text'); // ввод информации
const SaveButtonElement = document.querySelector('.popup__button-save'); //кнопка сохранить

const openPopup = function () {
    popup.classList.add('popup_opened');
    
}
const closePopup = function () {
    popup.classList.remove('popup_opened');
}
function openForm() {
    popupFormElement.classList.add('popup_opened');
    nameElement.value = popupInputNameElement.textContent;
    textElement.value = popupInputText.textContent;
}
function formSubmitHandler (evt) { 
    evt.preventDefault(); 
    nameElement.textContent = popupInputNameElement.value; 
    textElement.textContent = popupInputText.value; 
    closePopup(); 

} 
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupFormElement.addEventListener('submit', formSubmitHandler);
