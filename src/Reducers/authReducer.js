// import { actiontype } from '../config/constant';

// export const AuthReducer = (state, action) => {
//     switch (action.type) {
//         case actiontype.REQUEST_LOGIN:
//             return {
//                 ...state,
//                 loginReqest: true,
//                 showInvalid: false
//             }
//         case actiontype.LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 loggedIn: true,
//                 userName: action.payload.userName,
//                 token: action.payload.token,
//                 showInvalid: false,
//                 loginReqest: false,
//                 capabilities: action.payload.capabilities,
//                 data: action.payload
//             }

//         case actiontype.LOGIN_FAILED:
//             return {
//                 ...state,
//                 loginReqest: false,
//                 messageInv: action.payload.errMes,
//                 showInvalid: true,
//                 loggedIn: false,
//             }
//         case actiontype.REQUEST_SIGNUP:
//             return {
//                 ...state,
//                 signupReqest: true
//             }

//         case actiontype.SIGNUP_SUCCESS:
//             return {
//                 ...state,
//                 loggedIn: true,
//                 userName: action.payload.userName,
//                 token: action.payload.token,
//                 signupReqest: false,
//                 data: action.payload
//             }

//         case actiontype.LOGOUT:
//             return {
//                 ...state,
//                 loggedIn: false,
//                 token: ''
//             }

//         default:
//             throw new Error(`Unkown action type: ${action.type}`);
//     }
// }