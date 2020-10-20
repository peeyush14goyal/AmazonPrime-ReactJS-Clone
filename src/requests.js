const API_KEY = "989a8027930013244e3c2af17088dcac";

const requests = {
  getDiscoverMovies: {
    title: "Discover",
    url: `/discover/movie?api_key=${API_KEY}`,
  },
  getComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  getAdventureMovies: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  getPopularRegionMovies: {
    title: "Popular in your Region",
    url: `/discover/movie?api_key=${API_KEY}&region=IN`,
  },
  getWillSmithMovies: {
    title: "Will Smith's Hits",
    url: `/discover/movie?api_key=${API_KEY}&with_people=2888`,
  },
  getShortMovies: {
    title: "Short Films",
    url: `/discover/movie?api_key=${API_KEY}&with_runtime.lte=70`,
  },
};

export default requests;
