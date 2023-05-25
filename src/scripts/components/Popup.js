class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButtons = this._popup.querySelector('.popup__button-close')
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape'){
            this.close()
        }
    }
    _handleCloseButtons = () => {
        this.close()
    }
    _handleClickByOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
          }
    }
    setEventListeners() {
        this._popupCloseButtons.addEventListener('click', this._handleCloseButtons);
        this._popup.addEventListener('click', this._handleClickByOverlay)
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}
export default Popup