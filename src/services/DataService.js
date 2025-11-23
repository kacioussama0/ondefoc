import api from "@/api/api";
import routes from "@/api/endpoints";
import { handleApiError } from "@/api/errorHandler";

export default {
  async getBrands() {
    try {
      const res = await api.get(routes.BRANDS.ALL);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  async getBrand(id) {
    try {
      const res = await api.get(routes.BRANDS.ONE(id));
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  async getPosts() {
    try {
      const res = await api.get(routes.POSTS.ALL);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  async getPost(id) {
    try {
      const res = await api.get(routes.POSTS.ONE(id));
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },
};