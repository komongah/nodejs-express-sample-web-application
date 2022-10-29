class AuthService {
    constructor() {
        this.accessToken = null;
    }

    set AccessToken(accessToken) {
        this.accessToken = accessToken;
    }

    get AccessToken() {
        return this.accessToken;
    }
}

const authService = new AuthService();

export { authService as AuthService };
