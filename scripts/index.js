const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile') //редактировать профиль
const popupCards = document.querySelector('.popup-cards') // карточки
const popupCloseButtonElement = popup.querySelector('.popup__button-close'); //кнопка закрыть
const popupOpenButtonElement = document.querySelector('.profile__edit-button'); //редактировать профиль
const formProfile = document.querySelector('.popup__form-profile'); //форма профиля
const nameElement = document.querySelector('.profile__title'); //имя пользователя
const textElement = document.querySelector('.profile__subtitle'); // информация
const popupInputNameElement = document.querySelector('.popup__input_user_name'); //ввод имени
const popupInputText = document.querySelector('.popup__input_user_text'); // ввод информации
const SaveButtonElement = document.querySelector('.popup__button-save'); //кнопка сохранить
const addButton = document.querySelector('.profile__add-button'); // кнопка добавить карточку
const formCards = document.querySelector('.popup__form-cards'); //форма для карточки
const imageName = document.querySelector('.popup__input_image_name'); //название картинки
const imageLink = document.querySelector('.popup__input_link_image'); //ссылка на картинку

const zoomCards = document.querySelector('.popup_zoom_cards');
const zoomImage = document.querySelector('.popup__zoom-image');
const zoomTitle = document.querySelector('.popup__zoom-title');
const elements = document.querySelector('.elements');
const popupCloseCards = document.querySelector('.popup__button-close-cards'); //кнопка закрытия формы для добавления карточки
const CreateButton = document.querySelector('.popup__button-create'); //кнопка создать
const zoomCloseButton = document.querySelector('.popup__button-close-zoom'); //кнопка закрыть зум
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//закрывает попап
const closePopup = function () {
    popupProfile.classList.remove('popup_opened');
}
//ОТКРЫВАЕТ ФОРМУ
function openForm() {
    popupProfile.classList.add('popup_opened');
    popupInputNameElement.value = nameElement.textContent; 
    popupInputText.value = textElement.textContent; 
}
function formSubmitHandler (evt) { 
    evt.preventDefault(); 
    nameElement.textContent = popupInputNameElement.value; 
    textElement.textContent = popupInputText.value; 
    closePopup(); 

} 
popupOpenButtonElement.addEventListener('click', openForm);
popupCloseButtonElement.addEventListener('click', closePopup);
formProfile.addEventListener('submit', formSubmitHandler);

//Добавление карточки
addButton.addEventListener('click', function(){
    popupCards.classList.add('popup_opened');
    formCards.reset();
})
//Закрывает форму при нажатии на Х
const closeCards = function() {
  popupCards.classList.remove('popup_opened');
}
popupCloseCards.addEventListener('click', closeCards);

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
      const cardTitle = evt.target.closest('.element').querySelector('.element__title').textContent;
      const cardAlt = evt.target.getAttribute('alt');
      zoomImage.setAttribute('src', evt.target.src);
      zoomImage.setAttribute('alt', cardAlt);
      zoomTitle.textContent = cardTitle;
      openPopup(zoomCards)
     });
    return newImage;
  }
  function renderCard(fotocard, elements) {
    const newImage = createCard(fotocard);
    elements.prepend(newImage);
  }
  function handleFormCards (evt) {
    evt.preventDefault();
    const title = imageName.value;
    const link = imageLink.value;
    const newCard = {
        title: title,
        link: link
    }
   renderCard(newCard, elements);
   closeCards();
}
formCards.addEventListener('submit', handleFormCards);

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
   zoomCloseButton.addEventListener('click', function () {
    zoomCards.classList.remove('popup_opened');
   })
    