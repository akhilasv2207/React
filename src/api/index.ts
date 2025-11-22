import axios, { AxiosError } from 'axios';


import { showErrorDialog } from '../redux/reducers/dialog-slice';
import { ResponseFormat } from '../types/api';
import { API_REQUEST_HEADER_NAME, LS_TOKEN } from '../utils/constants';
import { loginSuccess, logoutSuccess } from '../redux/reducers/auth-slice';



const IS_BROWSER = typeof window !== 'undefined';

// let apiUrl = import.meta.env.VITE_APP_API_URL;
// let apiUrl = import.meta.env.VITE_APP_API_URL;
let apiUrl = "http://localhost:8000"
console.log("API URL:", apiUrl);



if (IS_BROWSER) {
    // set token when page refreshes
    axios.defaults.headers.common[API_REQUEST_HEADER_NAME] = localStorage.getItem(LS_TOKEN);
    // get env from process if start or build mode && from window if docker or kubernetes
    if ((window as any)._env_) {
        apiUrl = (window as any)._env_.NEXT_PUBLIC_APP_API_URL;

    }
    console.table(`API URL: ${apiUrl}`);
}


export { IS_BROWSER, apiUrl };

const handleError = (
    dispatch: any,
    error: AxiosError,
    options?: { ignoreAlert?: boolean; delay?: number }
): ResponseFormat & { status: number | undefined } => {

    const { ignoreAlert, delay } = options || {};
    let message = "";
    let invalid_session = false;
    let errorDetails: any;

    // ---------------- Extract error message ----------------
    if (error?.response?.data) {
        const data: any = error.response.data;
        message = data.message || "Unexpected server error";
        invalid_session = data.invalid_session || false;
        errorDetails = data.errorDetails;
    }
    else if (error?.message) {
        message = error.message;
    }
    else {
        message = "Unknown error occurred";
    }

    // ---------------- Extract status code ----------------
    const status = error?.response?.status || error?.status;

    // ---------------- Handle session expiration + toast ----------------
    setTimeout(() => {
        if (invalid_session) {
            dispatch(logout());
        } else {
            if (!ignoreAlert) {
                dispatch(showErrorDialog(message));
            }
        }
    }, delay || 0);

    return { success: false, message, status };
};

export const login =
    (reqPayload: any) =>
        (dispatch: any): Promise<ResponseFormat> =>
            axios
                .post(`${apiUrl}/login`, reqPayload)
                .then((res) => {
                    const token = res.data?.token;
                    const user = res.data?.user;

                    // Set auth header globally
                    axios.defaults.headers.common[API_REQUEST_HEADER_NAME] = token;

                    // New reducer format
                    dispatch(loginSuccess({ token, user }));

                    return res.data;
                })
                .catch((error) => handleError(dispatch, error));


export const logout =
    () =>
        (dispatch: any): Promise<ResponseFormat> =>
            axios
                .get(`${apiUrl}/logout`)
                .then((res) => {
                    dispatch(logoutSuccess());
                    return res.data;
                })
                .catch((error) => handleError(dispatch, error, { ignoreAlert: true }));

export const register =
    (reqPayload: any) =>
        (dispatch: any): Promise<ResponseFormat> =>
            axios
                .post(`${apiUrl}/register`, reqPayload)
                .then((res) => res.data)
                .catch((error) => handleError(dispatch, error));



