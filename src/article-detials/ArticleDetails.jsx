import React from 'react';
import {ArticleDetailsContanier} from './styledArticleDetails'


const ArticleDetails = props => {
  return (
    <ArticleDetailsContanier>
      <div className="title">
         

         
      </div>
      <div className="topShow">
        <img src="https://b1-q.mafengwo.net/s11/M00/12/26/wKgBEFpeu2SAYaFbAAMRA6O3Qdc64.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F90" alt=""/>
        <p>清迈是很慢的城市，路过咖啡店，就可以坐一下午</p>
        <span>爷傲天</span> - <span>1月前</span>
      </div>
    </ArticleDetailsContanier>
  );
};


export default ArticleDetails;