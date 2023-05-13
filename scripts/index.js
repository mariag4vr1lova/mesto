import initialCards from './constants.js';
import Card from './cards.js';
import FormValidator from './FormValidator.js';
const popupProfile = document.querySelector('.popup-profile') //редактировать профиль
const popupCard = document.querySelector('.popup-cards') // карточки
const formProfirelement = document.querySelector('.popup__form');
const closeButtonProfile = document.querySelector('.popup__button-close'); //кнопка закрыть
const openButtonProfile = document.querySelector('.profile__edit-button'); //редактировать профиль
const formProfile = document.querySelector('.popup__form-profile'); //форма профиля
const profileName = document.querySelector('.profile__title'); //имя пользователя
const profileDescription = document.querySelector('.profile__subtitle'); // информация
const popupInputNameUser = document.querySelector('.popup__input_user_name'); //ввод имени
const popupInputUserDescription = document.querySelector('.popup__input_user_text'); // ввод информации
const addButton = document.querySelector('.profile__add-button'); // кнопка добавить карточку
const formCards = document.querySelector('.popup__form-cards'); //форма для карточки
const imageName = document.querySelector('.popup__input_image_name'); //название картинки
const imageLink = document.querySelector('.popup__input_link_image'); //ссылка на картинку
const popupZoomCards = document.querySelector('.popup_zoom_cards');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomTitle = document.querySelector('.popup__zoom-title');
const elements = document.querySelector('.elements');
const popupCardCloseButton = document.querySelector('.popup__button-close-cards'); //кнопка закрытия формы для добавления карточки
const popupZoomCloseButton = document.querySelector('.popup__button-close-zoom'); //кнопка закрыть зум
const popups = document.querySelectorAll('.popup');
const imageTemplate = '#imageTemplate';
const validationConfig = {
  form: "popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
//открытие попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}
//закрывает попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}
//Закрытие попапа кликом на оверлей
popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.remove('popup_opened');
    }
  });
});
// Закрытие попапа нажатием на Esc
function closePopupByEsc(evt) {
  if (evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened'); 
    closePopup(openedPopup);
    }
}
const formProfileValid = new FormValidator(validationConfig, formProfirelement);
  console.log(formProfileValid);
  formProfileValid.enableValidation();

const formCardValid = new FormValidator(validationConfig, formCards);
  console.log(formCardValid);
  formCardValid.enableValidation();
//ОТКРЫВАЕТ ФОРМУ
function openPopupProfile() {
    openPopup(popupProfile);
    formProfileValid.reset()
    formProfileValid.resetValidation()
    popupInputNameUser.value = profileName.textContent; 
    popupInputUserDescription.value = profileDescription.textContent;
}
function submitFormProfile (evt) { 
    evt.preventDefault(); 
    profileName.textContent = popupInputNameUser.value; 
    profileDescription.textContent = popupInputUserDescription.value; 
    closePopup(popupProfile); 
} 
openButtonProfile.addEventListener('click', openPopupProfile)
closeButtonProfile.addEventListener('click', function () {
  closePopup(popupProfile);});
formProfile.addEventListener('submit', submitFormProfile);

//Добавление карточки
addButton.addEventListener('click', function(){
    openPopup(popupCard);
    formCardValid.reset();
    formCardValid.resetValidation();
})
function createNewCard (initialCards) {
  const cardElement = new Card(initialCards, imageTemplate, openZoomPopup);
  const card = cardElement.createCard();
  return card;
}
function renderCard(elements, cardElement) {
  elements.prepend(cardElement);
}
initialCards.forEach((initialCards) => {
  renderCard(elements, createNewCard(initialCards))});


function handleFormCardSubmit (evt) {
  evt.preventDefault();
  const cardLinkName = { title: imageName.value, link: imageLink.value};
  renderCard(elements, createNewCard(cardLinkName));
  closePopup(popupCard);
}
formCards.addEventListener('submit', handleFormCardSubmit);
//Закрывает форму при нажатии на Х
popupCardCloseButton.addEventListener('click', function(){
  closePopup(popupCard);
});
function openZoomPopup (camelCase) {
  zoomImage.src = camelCase.link;
  zoomImage.alt = camelCase.title;
  zoomTitle.textContent = camelCase.title;
  openPopup(popupZoomCards);
}
    //закрытие зума
popupZoomCloseButton.addEventListener('click', function () {
  closePopup(popupZoomCards);
})
    