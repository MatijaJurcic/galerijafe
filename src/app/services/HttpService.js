import axios from "axios";

class HttpService {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost/api",
    });
  }
}

export const httpService = new HttpService();