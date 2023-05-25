import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._zoomImage = this._popup.querySelector('.popup__zoom-image');
        this._zoomTitle = this._popup.querySelector('.popup__zoom-title');
    }
    open = (cardData) => {
        this._zoomImage.src = cardData.link;
        this._zoomImage.alt = cardData.title;
        this._zoomTitle.textContent = cardData.title;
        super.open()
    }
}
export default PopupWithImage