
import { AuthState } from "../redux/features/AuthSlice";
import Cookies from 'js-cookie';

const userDetailsCookiesName = 'userDetails';

export const GetUserDetailCookies = (): AuthState | undefined => {
    const data = Cookies.get(userDetailsCookiesName);
    if (data) {
        return JSON.parse(data) as AuthState;
    }
    return undefined;
};

export const SetUserDetailCookies = (data: AuthState): void => {
    Cookies.set(userDetailsCookiesName, JSON.stringify(data), {
        expires: 40,
        secure: true,
        sameSite: 'strict',
        path: '/',
    });
};

export const RemoveUserDetailCookies = (): void => {
    Cookies.remove(userDetailsCookiesName);
};
