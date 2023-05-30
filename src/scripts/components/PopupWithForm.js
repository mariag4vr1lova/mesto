import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction ) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFunction(this._getInputValues());
            this.close();
        });
    }
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value
        });
        return this._inputValues
    }
    setInputsValue(dataUser) {
        this._inputList.forEach(input => {
            input.value = dataUser[input.name];
        })
    }
    close() {
        super.close()
        this._form.reset();
    }

}
export default PopupWithForm