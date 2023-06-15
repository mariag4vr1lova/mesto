import Popup from "./Popup.js";
class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFunction){
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__button');
        this._defaultButtonTextContent = this._submitButton.textContent;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = `${this._submitButton.textContent}...`
            this._submitFunction({card: this._element, cardId: this._cardId})
        })
    }
    setUpDefault() {
        this._submitButton.textContent = this._defaultButtonTextContent
    }
    open = ({card, cardId}) => {
        super.open();
        this._element = card;
        this._cardId = cardId;
    }
}
export default PopupDeleteCard