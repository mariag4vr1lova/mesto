import {
    openButtonProfile,
    addButton,
    avatarElement,
    imageTemplate,
    validationConfig,
    formAddCards,
    popupProfileSelector,
    popupImageSelector,
    elementsSelector,
    popupCardSelector,
    popupAvatarSelector,
    popupDeleteSelector,
    formValidator,
    configInfo,
} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Cards.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/Api.js';
import '../pages/index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
    headers: {
      authorization: 'b21358c1-1bff-4727-aebb-1dc71343be33',
      'Content-Type': 'application/json'
    }
})

const userInfo = new UserInfo(configInfo);

const popupDeleteCard = new PopupDeleteCard(popupDeleteSelector, ({card, cardId}) => {
  api.deleteCard(cardId)
  .then(() => {
    card.removeCard()
    popupDeleteCard.close();
  })
  .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
  .finally(() => popupDeleteCard.setUpDefault())
});

function createNewCard (element) {
  const cardElement = new Card(element, imageTemplate, popupImage.open, popupDeleteCard.open, (likeElement, cardId)=> {
    if(likeElement.classList.contains('element__like_active')){
      api.deleteLike(cardId)
      .then(res => {
        cardElement.toggleLike(res.likes);
      })
      .catch((error) => console.error(`Ошибка при удалении лайка ${error}`))
    } else {
      api.addLike(cardId) 
        .then(res => {
          cardElement.toggleLike(res.likes)
        })
        .catch((error) => console.error(`Ошибка при добавлении лайка ${error}`))
      }
  });
  return cardElement.createCard();
}
const section = new Section ((element) =>{
    section.addItemApend(createNewCard(element))
  }, elementsSelector)
const popupImage = new PopupWithImage(popupImageSelector);
const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then(res =>  {
    userInfo.setUserInfo({username: res.name, subtitle: res.about, avatar: res.avatar})
    popupProfile.close()
    })
    .catch((error) => console.error(`Ошибка при редактировании профиля ${error}`))
    .finally(() => popupProfile.setUpDefault())
  }); 
const popupAddCard = new PopupWithForm(popupCardSelector, (data) => {
  api.addCard(data)
  .then(dataCard => {
    console.log(userInfo.getId())
    dataCard.myid = userInfo.getId();
    section.addItemPrepend(createNewCard(dataCard))
    popupAddCard.close()
  })
  .catch((error) => console.error(`Ошибка при создании новой карточки ${error}`))
  .finally(() => popupAddCard.setUpDefault())
});
const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setNewAvatar(data)
    .then(res =>  {
      console.log(res)
    userInfo.setUserInfo({username: res.name, subtitle: res.about, avatar: res.avatar})
    popupEditAvatar.close()
  })
    .catch((error) => console.error(`Ошибка при обновлении аватара ${error}`))
    .finally(() => popupEditAvatar.setUpDefault())
});

Array.from(document.forms).forEach(item => {
  const form = new FormValidator(validationConfig, item);
  const name = item.name;
  formValidator[name] = form;
  form.enableValidation();
})
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

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
//Изменение аватарки
avatarElement.addEventListener('click', () => {
  formValidator.editAvatar.resetValidation();
  popupEditAvatar.open()
})
Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => element.myid = dataUser._id);
    userInfo.setUserInfo({username: dataUser.name, subtitle: dataUser.about, avatar: dataUser.avatar});
    userInfo.setId(dataUser._id);
    section.addCardFormArray(dataCard);
  })
.catch((error) => console.error(`Ошибка при создании начальных данных страницы ${error}`))
    