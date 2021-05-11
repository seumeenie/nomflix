/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends React.Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    };
    //데이터 불러오기 완료를 위한 async,await 처리
    async componentDidMount() {
        //try,catch,finally
        try {
          const {
            data: { results: topRated } //변수명을 변경 //객체 비구조화 할당
          } = await tvApi.topRated();
          const {
            data: { results: popular }
          } = await tvApi.popular();
          const {
            data: { results: airingToday }
          } = await tvApi.airingToday();
          this.setState({ topRated, popular, airingToday });
        } catch {
          this.setState({
            error: "Can't find TV info."
          });
        } finally {
          this.setState({ loading: false });
        }
      }

    render() {
        //객체 비구조화 할당(object destructing)
        const { topRated, popular, airingToday, loading, error } = this.state;
        return (
            <TVPresenter 
                topRated={topRated}
                popular={popular} 
                airingToday={airingToday} 
                loading={loading} 
                error={error}
            />
        );
    }
}