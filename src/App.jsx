import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./home/Home"
import ErrPage from './404'
import {TheWorld }from './allCountries/index'
// import Guidepage from '@h/guidepage/GuidePage'
import JxTravalNote from './jx-travalnote/JxTravalNote'
import QuestionsAnswers from './questionsanswers/container/QuestionsAnswers'
import PartnerTravel from './partnertravel/container/PartnerTravel'
import PersonalArticles from './personalarticles/container/PersonalArticles'
import JnContainer from './jn-recommend/container/JnContainer'
import Section from './section/container/Section'
import VideoContainer from './video-recomend/container/VideoContainer'
import  ArticleDetials from './article-detials/ArticleDetails'
import Recomindex from './recommendnotes/container/Recomindex'
import Todaytopic from './todaytopic/container/Todaytopic'

class App extends Component {
    state = {
        GuidepageShow: false
    }
    render() {
        return (
            <Switch>
                {/* {
                    this.state.GuidepageShow && 
                    <Guidepage 
                    GuidepageShow={this.state.GuidepageShow}
                    EnterHomeHandleClick={()=>this.setState({GuidepageShow: false})}
                    ></Guidepage>
                } */}
                <Redirect exact={true} from='/' to='/home'></Redirect>
                <Route path="/home" component={Home}></Route>
                <Route path="/jxtravalnote" component={JxTravalNote}></Route>
                <Route path="/theWorld" children={props => <TheWorld></TheWorld>}></Route>
                <Route path="/qa" component={QuestionsAnswers}></Route>
                <Route path="/pt" component={PartnerTravel}></Route>
                <Route path="/pa" component={PersonalArticles}></Route>
                <Route path="/jn" component={JnContainer}></Route>
                <Route path="/section" component={Section}></Route>
                <Route path="/video" component={VideoContainer}></Route>
                <Route path="/articleDetials" component={ArticleDetials}></Route>
                <Route path="/recomindex"  component={Recomindex}></Route>
                <Route path="/todaytopic" component={Todaytopic}></Route>
                <Route component={ErrPage}></Route>
                <Route component={ErrPage}></Route>
            </Switch>
        );
    }
}

export default App;
