import{ reactive } from 'vue';
export const store = reactive({
    UrlPointMovie: 'https://api.themoviedb.org/3/search/movie?api_key=',
    movies: [],

    UrlPointSeries: 'https://api.themoviedb.org/3/search/tv?api_key=',
    series: [],

    UrlPopularMovie: 'https://api.themoviedb.org/3/movie/popular?api_key=',
    PopularMovies: [],

    UrlTopMovie: 'https://api.themoviedb.org/3/movie/top_rated?api_key=',
    topmovie: [],

    UrlPopularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=',
    PopularSeries: [],

    UrlTopSeries: 'https://api.themoviedb.org/3/tv/top_rated?api_key=',
    topseries: [],

    UrlGenersMovie: 'https://api.themoviedb.org/3/discover/movie',
    generi: [],

    UrlCastMovie: 'https://api.themoviedb.org/3/movie/',
    UrlCastSerie: 'https://api.themoviedb.org/3/tv/',
    cast:[],

    UrlGenersList: 'https://api.themoviedb.org/3/genre/movie/list?api_key=',
    generelist: [],
    
    keyApi: 'ebb547ab2123b8e09060d57aad2efea6', 

    genere: '',
    search: '',
    selectedUser: '',

    research: false,
    filter: false,
    view: true,
    user: false,
})

