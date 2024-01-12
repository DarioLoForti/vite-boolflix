import{ reactive } from 'vue';
export const store = reactive({
    UrlPointMovie: 'https://api.themoviedb.org/3/search/movie?',
    movies: [],
    UrlPointSeries: 'https://api.themoviedb.org/3/search/tv?',
    series: [],
    keyApi: 'api_key=ebb547ab2123b8e09060d57aad2efea6', 
    search: '',
})

