class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._button = form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);
  }
  _showInputError(errorElement, input) {
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }
  _hideInputError(errorElement, input) {
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
    console.log(2);
  }
  _enableButton () {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = false;
  }
 _disableButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
  }
  _checkInputValidity(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    if (!input.validity.valid) {
      this._showInputError(errorElement,input);
    } else {
      this._hideInputError(errorElement,input);
    }
  }
  _hasInvalidInput() {
    return Array.from(this._inputList).every(input => input.validity.valid);
  };
  _toggleButtonStatus () {
    if (this._hasInvalidInput()) {
        this._enableButton();
    } else {
        this._disableButton();
    }
  }
  _setEventListener() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonStatus()
      })
    })
  }
  enableValidation() {
    this._setEventListener();
  }
  
  resetValidation() {
    this._inputList.forEach(input => {
     const errorElement = this._form.querySelector(`.${input.id}-error`);
     if (!input.validity.valid) {
       this._hideInputError(errorElement, input);
       console.log(1)
     }
    })
    this._disableButton()
  }
}
export default FormValidator