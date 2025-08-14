import axios from 'axios';

const API_BASE_URL = 'https://blogplatform-backend-ascentiq.vercel.app';

const blogApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const blogService = {
  // Get all published blogs
  getPublishedBlogs: async (page = 1, limit = 10) => {
    try {
      const response = await blogApi.get(`/api/blogs/published?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get blog by slug
  getBlogBySlug: async (slug) => {
    try {
      const response = await blogApi.get(`/api/blogs/slug/${slug}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default blogApi;
