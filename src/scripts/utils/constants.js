const initialCards = [
    {
      title: 'Рим',
      link: 'https://rabota-za-granicej.ru/wp-content/uploads/7/7/4/774d0fc2a81b74009771c44d8cd28c23.jpeg'
    },
    {
      title: 'Парк Гуэль, Барселона',
      link: 'https://sportishka.com/uploads/posts/2022-04/1650502427_16-sportishka-com-p-dostoprimechatelnosti-barseloni-park-guel-16.jpg'
    },
    {
      title: 'Рио-де-Жанейро',
      link: 'https://i.artfile.ru/2048x1365_1342825_[www.ArtFile.ru].jpg'
    },
    {
      title: 'Кейптаун',
      link: 'https://storage.googleapis.com/wzukusers/user-34200503/images/5b7660b91af63kKjrEsD/Best-Cape-Town2_hf.jpg'
    },
    {
      title: 'Новый Орлеан',
      link: 'https://www.americantravel.ru/files/multifile/835/550/new_orleans_1630343_960_720.jpg'
    },
    {
      title: 'Париж',
      link: 'https://vsegda-pomnim.com/uploads/posts/2022-03/1648674879_78-vsegda-pomnim-com-p-reka-sena-v-parizhe-foto-92.jpg'
    }
  ];
  const openButtonProfile = document.querySelector('.profile__edit-button');
  const addButton = document.querySelector('.profile__add-button');
  const imageTemplate = '#imageTemplate';
  const validationConfig = {
    form: "popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };
  const popupProfileSelector = '.popup-profile';
  const popupImageSelector = '.popup_zoom_cards';
  const elementsSelector = '.elements';
  const popupCardSelector = '.popup-cards';
  const formValidator = {};
  const configInfo = {
    profileNameSelector: '.profile__title',
    profileDescriptionSelector: '.profile__subtitle',
  };
  export {
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
    configInfo
  }