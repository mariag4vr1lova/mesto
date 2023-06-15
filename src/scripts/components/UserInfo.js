class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileDescription = document.querySelector(configInfo.profileDescriptionSelector);
        this._profileAvatar = document.querySelector(configInfo.profileAvatar);
    }
    getUserInfo() {
        return{username: this._profileName.textContent, subtitle: this._profileDescription.textContent}
    }
    setUserInfo({username, subtitle, avatar}) {
        this._profileAvatar.src = avatar;
        this._profileName.textContent = username;
        this._profileDescription.textContent = subtitle;
    }
    setId (id) {
        this._id = id;
    }
    getId () {
        return this._id;
    }

}
export default UserInfo