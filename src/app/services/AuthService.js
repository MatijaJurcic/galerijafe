import ApiService from "./ApiService";

class AuthService extends ApiService {
  async login(data) {
    const response = await this.client.post("/auth/login", data);

    this.setLoginToken(response.data.authorization.token);
    this.setUserId(response.data.user.id);

    window.location.replace("/galleries");

    return response;
  }

  async logout() {
    await this.client.post("/auth/logout", {}, { headers: this.getHeaders() });

    window.localStorage.removeItem("loginToken");
    window.localStorage.removeItem("userId");
    
    window.location.replace("/login");
  }

  async register(data) {
    const response = await this.client.post("/auth/register", data);
    this.setLoginTokenAndredirectToAuthPage(response.data.authorization.token);
    this.setUserId(response.user.id);

    return response;
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${window.localStorage.getItem("loginToken")}`,
    };
  }

  setLoginToken(token) {
    window.localStorage.setItem("loginToken", token);
  }

  setUserId(userId) {
    window.localStorage.setItem("userId", userId);
  }

  setLoginTokenAndredirectToAuthPage(token) {
    window.localStorage.setItem("loginToken", token);
    window.location.replace("/galleries");
  }
}

export const authService = new AuthService();
