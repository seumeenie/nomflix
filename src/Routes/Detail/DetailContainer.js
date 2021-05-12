/**
 * DetailContainer.js : 각각의 영화나 TV쇼를 클릭시 세부정보를 불러와 Presenter 넘겨줌
 */
import { moviesApi, tvApi } from "../../api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props){ //생성자 클래스(props만들어줌)
        super(props);
        //pathname props(this.state에서의 props들이 아닌 바로 아랫줄의 props)생성(default state)
        const {location: { pathname }} = props; //이 props(=pathname)는 존재하지 않음. super(props)는 생성자 클래스 이기 때문(props 생성해줌)
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/") //isMovie란 props생성
        };

    }

    async componentDidMount(){
        //props를 가져옴
        const {
             match: {
                 params: {id} // 파라미터값{아이디가 숫자형태}
             },
             history: { push }
            } = this.props;
            //movie, parsedID 얻어옴
            const { isMovie } = this.state; 
            const parsedId = parseInt(id); //string값인 id를 int값으로 변환(숫자화)
            
            if(isNaN(parsedId)){ //detail값이 숫자(=id)가 아니면
                return push("/"); // 홈으로 감
            } // *****기억! return하면 함수는 종료함(만약 isNaN이면 push하고 종료됨) return이 없으면 사용자를 다른 페이지로 보냄(자바스크립트가 함수를 리턴으로 끝내지 않았기 때문)
            
            let result = null; //***비어있고 변하는 변수값인 result 선언. result가 movie든 tv든 덮어쓰게 됨
            try {
                //result 덮어쓰기
                if(isMovie){
                    //맨앞 맨뒤 ()괄호는 "const ="가 앞에 붙은것과 같음(const를 못쓰는 이유는 위에서 result가 이미 선언이 됐기 때문에, const를 쓰면 작동은 해도 같은 result가 아니게 됨)
                    //request(요청)이 data키를 주고 request.data는 result랑 같음
                    //= data를 request로 가져와 집어넣음(요약.)
                   ({ data: result } = await moviesApi.movieDetail(parsedId));
                } else {
                   ({ data: result } = await tvApi.showDetail(parsedId));
                }
            } catch { //에러가 발생하면 여기에서 처리
                this.setState({ error: "Can't find anything."});
            } finally {
                this.setState({ loading: false, result });
            }
    }

    render() {
        const { result, error, loading } = this.state;
        //console.log(result);
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />);
    }
}