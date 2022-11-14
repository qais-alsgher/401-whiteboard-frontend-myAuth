
const userInfo = localStorage.getItem('curentUser') ? JSON.parse(localStorage.getItem('curentUser')) : {};
const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
console.log(userInfo);
export const initialState = {
    loginReqest: false,
    loggedIn: token ? true : false,
    showInvalid: false,
    messageInv: '',
    userName: userInfo ? userInfo.userName : '',
    capabilities: userInfo ? userInfo.capabilities : '',
    singupReqest: false,
    token: token,
    data: userInfo
}