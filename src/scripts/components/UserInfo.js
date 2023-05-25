class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileDescription = document.querySelector(configInfo.profileDescriptionSelector);
    }
    getUserInfo() {
        return{username: this._profileName.textContent, subtitle: this._profileDescription.textContent}
    }
    setUserInfo(dataUser) {
        this._profileName.textContent = dataUser.username;
        this._profileDescription.textContent = dataUser.subtitle;
    }

}
export default UserInfo