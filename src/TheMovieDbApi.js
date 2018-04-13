import axios from 'axios'

const API_KEY = 'b12c69d2990e414142c3d926611c0c5f';

class TheMovieDbApi {
  constructor(){
    this.axios = axios.create ({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: API_KEY,
        language: 'es-AR',
      },
    })
  }

getGenres = (page = 1) => (
  this.axios.get(`/genre/movie/list`, {
    params: {page: page}
  })
);


//peliculas
getPopularMovies = (page = 1) => (
  this.axios.get(`/movie/popular`, {
    params: {page: page}
  })
);


filterMoviesPopularityAsc = (by = `popularity.asc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesPopularityDesc = (by = `popularity.desc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesReleaseDateAsc = (by = `release_date.asc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesReleaseDateDesc = (by = `release_date.desc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesRevenueAsc = (by = `revenue.asc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesRevenueDesc = (by = `revenue.desc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesPrimaryReleaseDateAsc = (by = `primary_release_date.asc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesPrimaryReleaseDateDesc = (by = `primary_release_date.desc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesOriginalTitleAsc = (by = `original_title.asc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesOriginalTitleDesc = (by = `original_title.desc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesVoteAverageAsc = (by = `vote_average.asc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesVoteAverageDesc = (by = `vote_average.desc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesVoteCountAsc = (by = `vote_count.asc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterMoviesVoteCountDesc = (by = `vote_count.desc`, page = 1) => (
  this.axios.get(`/discover/movie`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);


//Series
getPopularSeries = (page = 1) => (
  this.axios.get(`/tv/popular`, {
    params: {page: page}
  })
);

filterSeriesVoteAverageDesc = (by = `vote_average.desc`, page = 1) => (
  this.axios.get(`/discover/tv`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterSeriesVoteAverageAsc = (by = `vote_average.asc`, page = 1) => (
  this.axios.get(`/discover/tv`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterSeriesFirstAirDateDesc = (by = `first_air_date.desc`, page = 1) => (
  this.axios.get(`/discover/tv`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterSeriesFirstAirDateAsc = (by = `first_air_date.asc`, page = 1) => (
  this.axios.get(`/discover/tv`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterSeriesPopularityDesc = (by = `popularity.desc`, page = 1) => (
  this.axios.get(`/discover/tv`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);

filterSeriesPopularityAsc = (by = `first_air_date.asc`, page = 1) => (
  this.axios.get(`/discover/tv`, {
    params: {
      sort_by: by,
      page: page
    }
  })
);























}

export default TheMovieDbApi
