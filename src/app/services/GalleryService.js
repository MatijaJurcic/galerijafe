import ApiService from "./ApiService";
import { authService } from "./AuthService";

class GalleryService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  getAll = async () => {
    const { data } = await this.client.get("galleries");

    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`galleries/${id}`,{
      headers: this.authService.getHeaders(),
    });

    return data;
  };

  add = async (gallery) => {
    await this.client.post('galleries', gallery, {
      headers: this.authService.getHeaders(),
    });
  }

  async show(id) {
    return await this.client.get(`/galleries/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }

  async edit(id) {
    return await this.client.get(`/edit-gallery/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }
}

export const galleryService = new GalleryService();
