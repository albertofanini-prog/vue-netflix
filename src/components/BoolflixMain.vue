<template>
    <main>
        <div class="form_container">
            <input
                class="input_1"
                type="text"
                placeholder="Scrivi qua..."
                v-model="searchMovie"
            >
            <button
                class="input_2"
                @click="searchMovieAPI(searchMovie); searchTvSerieAPI(searchTvSerie)">
                Cerca
            </button>
        </div>

        <div class="movies_container">
            <div
            class="singleMovie"
            v-for="movie in movies"
            :key="movie.id"
            :style="{backgroundImage: movie.poster_path ? `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` : `urlImgDefault`}"
            >
                <div class="movie_info">
                    <span id="title">
                        {{movie.title}}
                    </span>
                    <span id="original_title">
                        {{movie.original_title}}
                    </span>
                    <span id="original_language">
                        <span> Lingua originale: </span><img class="flag" :src="'Flags/' + movie.original_language + '.svg'">
                    </span>
                    <span id="original_overview">
                        {{movie.overview}}
                    </span>
                    <div id="average_vote">
                        Voto medio: 
                        <span 
                        :class="i < getMovieVoteAverage(movie) ? 'star' : ''"
                        v-for="(starIcon, i) in 5"
                        :key="i"
                        >
                            &#9733;
                        </span>
                    </div>
                </div>                
            </div>
            <div
            class="singleMovie"
            v-for="serie in series"
            :key="serie.id"
            :style="{backgroundImage: serie.poster_path ? `url(https://image.tmdb.org/t/p/w342${serie.backdrop_path})` : `urlImgDefault`}"
            >
                <div class="movie_info">
                    <span id="title">
                        {{serie.title}}
                    </span>
                    <span id="original_title">
                        {{serie.original_title}}
                    </span>
                    <span id="original_language">
                        <span> Lingua originale: </span><img class="flag" :src="'Flags/' + serie.original_language + '.svg'">
                    </span>
                    <div id="average_vote">
                        <span>
                            Voto medio:
                        </span>
                        <br>
                        <span 
                        :class="i < getMovieVoteAverage(serie) ? 'star' : ''"
                        v-for="(starIcon, i) in 5"
                        :key="i"
                        >
                            &#9733;
                        </span>
                    </div>
                </div>                
            </div>
        </div>
    </main>
</template>

<script>

import axios from 'axios'

import urlImgDefault from '../assets/cover_coming_soon.jpg'

export default {
    name: 'BoolflixMain',
    data(){
        return{
            searchMovie: '',
            searchTvSerie: '',
            movies:[],
            series:[],
            baseUrl: 'https://api.themoviedb.org/3',
            urlImgDefault: urlImgDefault
        }
    },
    methods: {
        searchMovieAPI(input){
            this.searchMovie = input;
            axios.get( `${this.baseUrl}/search/movie`,{
                params: {
                    api_key: '21468023db35f90fc29dfeda12ec6478',
                    query: this.searchMovie,
                    language: this.flagShow,
                }
            })
            .then((response) =>{
                this.movies = response.data.results;
                console.log(response.data);
            })
        },
        searchTvSerieAPI(input){
            this.searchTvSerie = input;
            axios.get( `${this.baseUrl}/search/tv`,{
                params: {
                    api_key: '21468023db35f90fc29dfeda12ec6478',
                    query: this.searchMovie,
                    language: this.flagShow,
                }
            })
            .then((response) =>{
                this.series = response.data.results;
                console.log(response.data);
            })
        },
        getMovieVoteAverage: function (movie){
            return Math.ceil(movie.vote_average / 2);
        },
        getSerieVoteAverage: function (serie){
            return Math.ceil(serie.vote_average / 2)
        }
    },
}
</script>

<style lang="scss">
    main{
        //border: 3px dashed yellow;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        .form_container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 0px;
            max-height: 10%;
            input{
                height: 25px;
                margin-right: 10px;
                border-radius: 999px;
                padding: 10px;
                width: 100%;
                background-color: black;
                border: 1px solid red;
                color: white;
            }
            input:focus{
                outline:none;
            }
            button{
                height: 25px;
                padding: 5px 10px;
                border-radius: 999px;
                cursor: pointer;
                background-color: black;
                border: 1px solid red;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.4s ease-in-out;
            }
            button:hover{
                background-color: red;
                color: black;
            }
        }
        .movies_container{
            margin-top: 10px;
            // padding: 10px 20px;
            width: 100%;
            // border: 1px solid blue;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            gap: 20px;
            padding-bottom: 5%;
            //border: 3px solid purple;
            .singleMovie{
                // border: 1px solid red;
                width: calc((100% / 3) - 20px);
                height: 400px;
                // padding: 15px;
                background-color: #1b1e23;
                border-radius: 25px;
                display: flex;
                gap: 5px;
                // border: 4px solid white;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100% 100%;
                box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 10px;
                overflow: hidden;
                transition: 0.5s ease-in-out;
                .movie_info{
                    width: 100%;
                    height: 100%;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    visibility: hidden;
                    transition: 0.5s ease-in-out;
                    #title{
                        font-size: 22px;
                        font-weight: 600;
                        // padding: 5px;
                    }
                    #original_title{
                        font-size: 18px;
                        // padding: 5px;
                    }
                    #original_language{
                        font-size: 14px;
                        // padding: 5px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        span{
                            padding: 10px 0px;
                        }
                        img{
                            max-width: 30%;
                            max-height: 20%;
                        }
                    }
                    #original_overview{
                        text-align: center;
                        font-size: 14px;
                        padding: 0px 5px;
                    }
                    #average_vote{
                        // height: 20%;
                        .star{
                            color: gold;
                        }
                    }
                }
            }
            .singleMovie:hover .movie_info{
                background-color: black;
                opacity: 0.8;
                visibility: visible;
                overflow: hidden;
            }
            @media only screen and (max-width: 1200px) {
                main{
                    width: 90%;
                }
                    .singleMovie{
                        width: calc((100% / 5) - 20px);
                        height: 325px;
                    }
                #original_overview{
                    text-align: center;
                    font-size: 10px;
                    padding: 0px 5px;
                }
            }
            @media only screen and (max-width: 1062px) {
                main{
                    width: 90%;
                }
                .singleMovie{
                    width: calc((100% / 5) - 20px);
                    height: 300px;
                }
                #original_overview{
                    text-align: center;
                    font-size: 10px;
                    padding: 0px 5px;
                }
            }
            @media only screen and (max-width: 992px) {
                main{
                    width: 90%;
                }
                .singleMovie{
                    width: calc((100% / 4) - 20px);
                    height: 300px;
                }
            }
            @media only screen and (max-width: 768px) {
                .singleMovie{
                    width: calc((100% / 3) - 20px);
                    height: 275px;
                }
            }
            @media only screen and (max-width: 576px) {
                .singleMovie{
                    width: calc((100% / 2) - 20px);
                    height: 275px;
                }
            }
            @media only screen and (max-width: 448px) {
                .movies_container{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    // flex-wrap: wrap;
                }
                .singleMovie{
                    width: 100%;
                    height: 350px;
                }
            }
        }
    }
</style>