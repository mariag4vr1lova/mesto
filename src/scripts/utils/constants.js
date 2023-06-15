//Кнопки
  const openButtonProfile = document.querySelector('.profile__edit-button');
  const addButton = document.querySelector('.profile__add-button');
  const avatarElement = document.querySelector('.profile__avatar-overlay');

  const imageTemplate = '#imageTemplate';
  
  //Валидация
  const validationConfig = {
    form: "popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };
  const formAddCards = document.forms.formCards;
  
  //Селектора
  const popupProfileSelector = '.popup-profile';
  const popupImageSelector = '.popup_zoom_cards';
  const elementsSelector = '.elements';
  const popupCardSelector = '.popup-cards';
  const popupAvatarSelector = '.popup-edit-avatar';
  const popupDeleteSelector = '.popup-delete';
  
  
  const formValidator = {};
  const configInfo = {
    profileNameSelector: '.profile__title',
    profileDescriptionSelector: '.profile__subtitle',
    profileAvatar: '.profile__avatar',
  };
  export {
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
  }