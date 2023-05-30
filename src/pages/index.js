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
} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import '../pages/index.css';

const userInfo = new UserInfo(configInfo);
const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section ({
  items: initialCards,
  renderer: (element) => {
    const cardElement = new Card(element, imageTemplate, popupImage.open);
    return cardElement.createCard();
  }
}, elementsSelector)
section.renderInitialCards()
const popupProfile = new PopupWithForm(popupProfileSelector, inputValues => userInfo.setUserInfo(inputValues));
  //evt.preventDefault();
  //userInfo.setUserInfo(popupProfile.getInputValues());
  //popupProfile.close();
const popupAddCard = new PopupWithForm(popupCardSelector, data => section.addItem(data)); 
  //evt.preventDefault();
  //section.addItem(elementDom);
  //popupAddCard.close();

Array.from(document.forms).forEach(item => {
  const formValid = new FormValidator(validationConfig, item);
  const name = item.name;
  formValidator[name] = formValid;
  formValid.enableValidation();
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
  formValidator.formCards.resetValidation();
  popupAddCard.open();
})
