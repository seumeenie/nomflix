/**
 * 다른 데이터베이스 사이트에서 무료로 필요한 data를 가져오고 네트워킹하는 파일 
 */
import axios from "axios";
//Axios의 좋은 점 : 설정들을 다른 곳에서 반복해 작성할 필요 없이 여기서 설정 가능 -> 모든 작업들은 설정한 내용을 가지고 함
//설정 : baseURL로 요청을 만들고, 고유 api_key와 language를 받음
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "28ee3a5bb56c12cabf4a4472b8ed5b48",
        language: "en-US"
    }
});
//function,request 모음
export const moviesApi = {
    //function. URL이 "~"인 api.get() 리턴
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, { //라우터,파라미터들을 개별적으로 설정하는 방식(api 전체를 위한 건 아님)
        params: {
            //api에서 지원. id,key,...로 한 비디오의 정보를 불러옴
            append_to_response: "videos"
        }
    }),
    //어떤 파라미터 값을 이 함수에 넘기던(term은 그냥 변수임), encodeURIComponent가 값을 인코딩하고 그 문자열로 검색을 함
    search: term => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};
// URL을 여기저기서 요청하는 것보다 명확함