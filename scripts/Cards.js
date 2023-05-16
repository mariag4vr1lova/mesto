class Card {
    constructor(cardData, imageTemplate, openZoomPopup) {
      this._cardData = cardData;
      this._title = cardData.title;
      this._link = cardData.link;
      this._imageTemplate = imageTemplate;
      this._openZoomPopup = openZoomPopup;
    }
    
    _getTemplateClone() {
      const element = document
      .querySelector(this._imageTemplate)
      .content
      .querySelector('.element')
      .cloneNode(true);
      return element;
    }
    _hendleLike = () => {
      this._likeElement.classList.toggle('element__like_active')
    }
    _hendleDeleteButtonElement = () => {
      this._cloneElement.remove();
      this._cloneElement = null;
    }
    _hendelOpenImage = () => {
      this._openZoomPopup(this._cardData)
    }
    _setEventListner(){
      this._likeElement.addEventListener('click', this._hendleLike);
      this._deleteButtonElement.addEventListener('click', this._hendleDeleteButtonElement);
      this._imageElement.addEventListener('click', this._hendelOpenImage)
    }
    createCard() {
      this._cloneElement = this._getTemplateClone();
      this._imageElement = this._cloneElement.querySelector('.element__image');
      this._likeElement = this._cloneElement.querySelector('.element__like');
      this._titleElement = this._cloneElement.querySelector('.element__title');
      this._deleteButtonElement = this._cloneElement.querySelector('.element__delete-button');
      this._imageElement.src = this._link;
      this._imageElement.alt = this._title;
      this._titleElement.textContent = this._title;
      this._setEventListner();
      return this._cloneElement;
    }
  }
  export default Card