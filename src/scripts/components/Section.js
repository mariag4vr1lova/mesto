class Section {
    constructor({items, renderer}, containerSelector){
        this._container = document.querySelector(containerSelector);
        this._initialCards = items;
        this._renderer = renderer;
    }
    renderInitialCards() {
        this._initialCards.forEach(element => {
           this.addItem(element) 
        });
    }
    addItem(data) {
        this._container.prepend(this._renderer(data));
    }
}
export default Section