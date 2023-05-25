import {
  initialCards,
  openButtonProfile,
  addButton,
  imageTemplate,
  validationConfig,
  popupProfileSelector,
  popupImageSelector,
  elementsSelector,
  popupCardSelector,
  formValidator,
  configInfo,
  formAddCards
}from './utils/constants.js';
import Card from './components/Cards.js';
import FormValidator from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import '../pages/index.css';

const userInfo = new UserInfo(configInfo);
const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section ({
  items: initialCards,
  renderer: (element) =>{
    const cardElement = new Card(element, imageTemplate, popupImage.open);
    return cardElement.createCard();
  }
}, elementsSelector)
section.addCardFormArray()
const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
})
const popupAddCard = new PopupWithForm(popupCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputValues()));
  popupAddCard.close();
  evt.target.reset();
})
Array.from(document.forms).forEach(item => {
  const form = new FormValidator(validationConfig, item);
  const name = item.name;
  formValidator[name] = form;
  form.enableValidation();
})
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();

//ОТКРЫВАЕТ ФОРМУ
openButtonProfile.addEventListener('click',() =>{
  formValidator.formProfile.resetValidation();
  popupProfile.setInputsValue(userInfo.getUserInfo())
  popupProfile.open()
})

//Добавление карточки
addButton.addEventListener('click', () => {
  formAddCards.reset();
  formValidator.formCards.resetValidation();
  popupAddCard.open();
})
