import BaseAPI from './APIUtils';

export default class AuthAPI extends BaseAPI {
    path = 'auth/';

    async login({login, password}) {
        const body = {
            username: login,
            password: password,
        }
        const data = await this.post({body: body, suffix: 'token/login'});
        return data;
    }

    async me(auth_token) {
        const data = await this.get({suffix: 'users/me'});
        return data;
    }
}