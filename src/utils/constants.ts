// ---- LocalStorage Keys ----
export type AppConstantsType =
    | '@LS_TOKEN'
    | '@LS_USER'
    | '@LS_ROLE'
    | '@LS_ACTIVE'
    | '@LS_THEME'
    | '@LS_CLIENT_ID';

export const LS_TOKEN: AppConstantsType = '@LS_TOKEN';
export const LS_USER: AppConstantsType = '@LS_USER';
export const LS_ROLE: AppConstantsType = '@LS_ROLE';
export const LS_ACTIVE: AppConstantsType = '@LS_ACTIVE';
export const LS_THEME: AppConstantsType = '@LS_THEME';
export const LS_CLIENT_ID: AppConstantsType = '@LS_CLIENT_ID';

// ---- UI / Dialog ----
export const DIALOG_TYPE_ALERT = 'DIALOG_TYPE_ALERT';
export const DIALOG_TYPE_CONFIRMATION = 'DIALOG_TYPE_CONFIRMATION';

// ---- Socket Events ----
export const SOCKET_REQUEST_CONNECT = 'SOCKET_REQUEST_CONNECT';
export const SOCKET_REQUEST_LOGOUT = 'SOCKET_REQUEST_LOGOUT';

// ---- API Headers ----
export const API_REQUEST_HEADER_NAME = 'hcl-account-auth';
