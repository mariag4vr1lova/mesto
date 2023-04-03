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
//открытие попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//закрывает попап
const closePopupProfile = function () {
    popupProfile.classList.remove('popup_opened');
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
    closePopupProfile(); 

} 
openButtonProfile.addEventListener('click', openPopupProfile)
closeButtonProfile.addEventListener('click', closePopupProfile);
formProfile.addEventListener('submit', submitFormProfile);

//Добавление карточки
addButton.addEventListener('click', function(){
    popupCard.classList.add('popup_opened');
    formCards.reset();
})
//Закрывает форму при нажатии на Х
const closePopupCard = function() {
  popupCard.classList.remove('popup_opened');
}
popupCardCloseButton.addEventListener('click', closePopupCard);

  //создание карточки
  function createCard(fotocard) {
    const newImage = document.querySelector('#imageTemplate').content.cloneNode(true);
    const cardTitle = newImage.querySelector('.element__title');
    const image = newImage.querySelector('.element__image');
    const deleteButton = newImage.querySelector('.element__delete-button');//мусорка
    cardTitle.textContent = fotocard.title;
    image.setAttribute('src', fotocard.link)
    image.setAttribute('alt', fotocard.title)
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
  function renderCard(fotocard, elements) {
    const newImage = createCard(fotocard);
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
   closeCard();
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
initialCards.forEach((fotocard) => {
  const cardElement = createCard(fotocard);
  elements.appendChild(cardElement);
});
    //закрытие зума
popupZoomCloseButton.addEventListener('click', function () {
popupZoomCards.classList.remove('popup_opened');
})
    