/**
 * React Component Coding Pattern : Container-Presenter Pattern (Container) = data, state(상태값)을 가지고, api를 불러오고, 로직 처리 역할
 * 요약 : Container = 데이터
 */
import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component{
    //컴포넌트가 마운트 되면 nowPlaying,upcoming,popular를 찾고 다 찾으면 state값을 설정해 줌
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        //error가 있으면 loading이 false가 됨
        loading: true
    };
    //api 메서드 추가
    //자바스크립트는 실행하면 데이터(일이끝나는것)를 기다려주지 않음 -> async,await 사용
    async componentDidMount() {
        //try,catch,finally
        try{ // 뭔가를 try
          const { data: { results: nowPlaying } // 객체 비구조화 할당
                } = await moviesApi.nowPlaying();
          const { data: { results: upcoming } // { a : b } a를 b로 변수명을 변경해주는 방법(ES6의 마법)
                } = await moviesApi.upcoming();
          const { data: { results: popular }
                } = await moviesApi.popular();
            this.setState({
                nowPlaying, // 위 state={} 안의 nowPlaying 값은 이제 이 try안 변수 nowPlaying과 같음
                upcoming,
                popular
            });
            //onsole.log(nowPlaying);
        } catch { // 작동하지 않으면 다른 처리를 해줌. 보통 error메시지가 따라옴. error 상태값만 변경
            this.setState({
                error: "Can't find Movie info."
            });
        } finally { // 뭐가 발생하든 loading값을 false로 처리되고 에러를 보여주거나 무비를 보여줌
            this.setState({
                loading: false
            });
            //console.log("aaa");
        }
    }

    render() {
        //객체 비구조화 할당(object destructing)
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        //console.log("aaa");
        //console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}