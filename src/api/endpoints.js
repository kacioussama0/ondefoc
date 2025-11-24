export default {
  BRANDS: {
    ALL: "/brands?populate=*",
    ONE: id => `/brands/${id}?populate=*`
  },
  POSTS: {
    ALL: "/posts?populate=*",
    ONE: id => `/posts/${id}?populate=*`
  },
  SERVICES: {
    ALL: "/services?populate=*",
    ONE: id => `/services/${id}?populate=*`
  }
};
