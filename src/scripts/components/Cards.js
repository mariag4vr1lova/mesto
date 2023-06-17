class Card {
    constructor(cardData, imageTemplate, openZoomPopup, popupDeleteOpen, changeLike) {
      this._cardData = cardData;
      this._title = cardData.name;
      this._link = cardData.link;
      this._myid = cardData.myid;
      this._likes = cardData.likes;
      this._likeLength = cardData.likes.length;
      this._isLiked = false;
      this._ownerId = cardData.owner._id;
      this._cardId = cardData._id;
      this._imageTemplate = imageTemplate;
      this._chageLike = changeLike;
      this._openZoomPopup = openZoomPopup;
      this._popupDeleteOpen = popupDeleteOpen;
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
      this._chageLike(this._isLiked, this._cardId)
    }
    _handleDeleteButtonElement = () => {
      this._popupDeleteOpen({card: this, cardId: this._cardId});
    }
    _handelOpenImage = () => {
      this._openZoomPopup(this._cardData)
    }
    _setEventListner(){
      this._likeElement.addEventListener('click', this._hendleLike);
      this._deleteButtonElement.addEventListener('click', this._handleDeleteButtonElement);
      this._imageElement.addEventListener('click', this._handelOpenImage)
    }
    removeCard() {
      this._cloneElement.remove();
      this._cloneElement = null;
    }
    _changeVisibleForTrashButton() {
      this._myid === this._ownerId ? this._deleteButtonElement.style.display = 'block' : this._deleteButtonElement.style.display = 'none'
    }
    _checkLikes(){
      this._likes.forEach(item => {
        if(item._id === this._myid){
          this._likeElement.classList.toggle('element__like_active')
          this._isLiked = true
          return
        }
      })
      this._counter.textContent = this._likeLength
    }
    toggleLike(likes) {
      this._likeElement.classList.toggle('element__like_active');
      this._counter.textContent = likes.length;
    }
    
    createCard() {
      this._cloneElement = this._getTemplateClone();
      this._imageElement = this._cloneElement.querySelector('.element__image');
      this._likeElement = this._cloneElement.querySelector('.element__like');
      this._titleElement = this._cloneElement.querySelector('.element__title');
      this._deleteButtonElement = this._cloneElement.querySelector('.element__delete-button');
      this._counter = this._cloneElement.querySelector('.element__counter');
      this._imageElement.src = this._link;
      this._imageElement.alt = `Изображение ${this._title}`;
      this._titleElement.textContent = this._title;
      this._checkLikes();
      this._setEventListner();
      this._changeVisibleForTrashButton();
      return this._cloneElement;
    }
  }
  export default Card