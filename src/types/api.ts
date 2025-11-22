export interface ResponseFormat {
    statusCount?: any;
    success: boolean;
    message: string;
    /** Object or Array */
    data?: any;
    count?: number;
    token?: string;
    invalid_session?: boolean;
}

export interface SocketEvents {
    name:
    | 'LOGIN_CONNECT_SUCCESS'
    | 'LOGOUT_SUCCESS'
    | 'FORCE_LOGOUT'
    | 'ALERT_SUCCESS'
    | 'ALERT_ERROR'
    | 'AUTH_MODIFIED'
    | 'ACCOUNTS_MODIFIED';
    id?: string;
    message?: string;
    /** Object or Array */
    data?: any;
}