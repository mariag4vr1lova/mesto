const popupProfile = document.querySelector('.popup-profile') //редактировать профиль
const popupCard = document.querySelector('.popup-cards') // карточки
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
const submitButtonClass = '.popup__button';
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

//ОТКРЫВАЕТ ФОРМУ

function openPopupProfile() {
    openPopup(popupProfile);
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
    formCards.reset();
})
//Закрывает форму при нажатии на Х
popupCardCloseButton.addEventListener('click', function(){
  closePopup(popupCard);
});

  //создание карточки
  function createCard(camelCase) {
    const newImage = document.querySelector('#imageTemplate').content.cloneNode(true);
    const cardTitle = newImage.querySelector('.element__title');
    const image = newImage.querySelector('.element__image');
    const deleteButton = newImage.querySelector('.element__delete-button');//мусорка
    cardTitle.textContent = camelCase.title;
    image.setAttribute('src', camelCase.link)
    image.setAttribute('alt', camelCase.title)
    //удаление
    deleteButton.addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
    });
    //сердечко
    newImage.querySelector('.element__like').addEventListener('click',  function (evt) { 
      evt.target.classList.toggle('element__like_active');
    });
    image.addEventListener('click', function (evt) {
      const cardTitle = evt.target.getAttribute('alt');
      const cardAlt = evt.target.getAttribute('alt');
      zoomImage.setAttribute('src', evt.target.src);
      zoomImage.setAttribute('alt', cardAlt);
      zoomTitle.textContent = cardTitle;
      openPopup(popupZoomCards)
     });
    return newImage;
  }
  function renderCard(camelCase, elements) {
    const newImage = createCard(camelCase);
    elements.prepend(newImage);
  }
  function handleFormCardSubmit (evt) {
    evt.preventDefault();
    const title = imageName.value;
    const link = imageLink.value;
    const newCard = {
        title: title,
        link: link
    }
   renderCard(newCard, elements);
   closePopup(popupCard);
}
formCards.addEventListener('submit', handleFormCardSubmit);

const initialCards = [
    {
      title: 'Рим',
      link: './images/Roma.jpeg'
    },
    {
      title: 'Парк Гуэль, Барселона',
      link: './images/Park_Guel_v_Barselone_1.jpeg'
    },
    {
      title: 'Рио-де-Жанейро',
      link: './images/рио.jpeg'
    },
    {
      title: 'Кейптаун',
      link: './images/cape_town_south_africa.jpeg'
    },
    {
      title: 'Новый Орлеан',
      link: './images/NewOrlean.jpeg'
    },
    {
      title: 'Париж',
      link: './images/Paris.jpeg'
    }
  ];
initialCards.forEach((camelCase) => {
  const cardElement = createCard(camelCase);
  elements.appendChild(cardElement);
});
    //закрытие зума
popupZoomCloseButton.addEventListener('click', function () {
  closePopup(popupZoomCards);
})
    