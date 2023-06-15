class Section {
    constructor(renderer, containerSelector){
        this._container = document.querySelector(containerSelector);
        //this._initialCards = items;
        this._renderer = renderer;
    }
    addCardFormArray(data) {
        data.forEach(element => {
           this._renderer(element)
        });
    }
    addItemPrepend(elementDom) {
        this._container.prepend(elementDom);
    }
    addItemApend(elementDom) {
        this._container.append(elementDom);
    }
}
export default Section