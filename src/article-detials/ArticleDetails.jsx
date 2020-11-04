import React,{useEffect,useCallback} from 'react';
import {ArticleDetailsContanier} from './styledArticleDetails'
import { useHistory } from 'react-router-dom'

const ArticleDetails = props => {


  const history = useHistory()
  const GotoBack = useCallback(
    () => {
      history.goBack()
    }
  ,[history])

  useEffect(
    ()=>{
      window.addEventListener('scroll', handlescroll,true)
    },[]
  )

  // console.log(window.pageYOffset);

  const handlescroll =(e)=>{
    
    var header = document.getElementsByClassName('title'); 
    // console.log(e.srcElement.scrollTop);
    // header.classList.remove('header_bg'); 
    // console.log(header)
    
      if(e.srcElement.scrollTop >= 280){ 
        header[0] && header[0].classList.add('header_bg');  
      } else {
        header[0] && header[0].classList.remove('header_bg');                      
      }
  }
  
  return (
    <ArticleDetailsContanier>
      <div className="title ">
        <svg t="1604471442850" onClick={GotoBack}  viewBox="0 0 1195 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2653" width="200" height="200"><path d="M572.804983 998.770594a85.292109 85.292109 0 0 0 0-121.114794L291.341024 597.044762H1109.292348a85.292109 85.292109 0 0 0 0-170.584218H291.341024l281.463959-280.611038A85.292109 85.292109 0 0 0 451.690189 24.734712l-426.460544 426.460544a85.292109 85.292109 0 0 0 0 121.114794l426.460544 426.460544a85.292109 85.292109 0 0 0 121.114794 0z" fill="#e6e6e6" p-id="2654"></path></svg>
        <span>爷傲天 · 专栏</span>
        <svg t="1604471487587"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3481" width="200" height="200"><path d="M512 627.2c-64 0-115.2-51.2-115.2-115.2s51.2-115.2 115.2-115.2 115.2 51.2 115.2 115.2S576 627.2 512 627.2zM512 448c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64S547.84 448 512 448z" p-id="3482" fill="#e6e6e6"></path><path d="M153.6 627.2c-64 0-115.2-51.2-115.2-115.2s51.2-115.2 115.2-115.2 115.2 51.2 115.2 115.2S215.04 627.2 153.6 627.2zM153.6 448c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64S186.88 448 153.6 448z" p-id="3483" fill="#e6e6e6"></path><path d="M870.4 627.2c-64 0-115.2-51.2-115.2-115.2s51.2-115.2 115.2-115.2 115.2 51.2 115.2 115.2S934.4 627.2 870.4 627.2zM870.4 448c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64S906.24 448 870.4 448z" p-id="3484" fill="#e6e6e6"></path></svg>
         
      </div>
      <div className="topShow">
        <img src="https://b1-q.mafengwo.net/s11/M00/12/26/wKgBEFpeu2SAYaFbAAMRA6O3Qdc64.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F90" alt=""/>
        <p>清迈是很慢的城市，路过咖啡店，就可以坐一下午</p>
        <div className="topShow-bottom"><span>爷傲天</span>&nbsp; · &nbsp;<span>1月前</span></div>
      </div>

      <div className="columContent">
        <div className="columContent-user">
          <img src="https://profile.csdnimg.cn/3/7/E/2_gamers123" alt=""/>
          <div className="paper">
            <span>来自专栏</span>
            <span>蓝蓝的海</span>
          </div>
          <div className="subscript-state">已订阅</div>
        </div>
      <div className="detailed">
          <p>这是一个巨大的堡垒之城，被联合国教科文组织列为世界遗产。整座城市建在山上，房子都由黄土垒成，城中小道错综复杂。由于位置偏远，大部分人家已经迁离了这座城，但是保存完好的土城和美丽的撒哈拉风光使这座城成为了众多影视剧的拍摄地，如《阿拉伯的劳伦斯》《木乃伊》《巴别塔》《天国王朝》以及《权力的游戏》等。这里有一个小房间，墙上挂满了在此拍摄的影视作品的剧照，可以看看你认得出多少。</p>
          <img src="https://n1-q.mafengwo.net/s10/M00/7D/CA/wKgBZ1j4VPuAbEPFAAvi9DRQBHY05.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100" alt=""/>
          <img src="http://p1-q.mafengwo.net/s17/M00/12/5D/CoUBXl-erRmAXMoKAAUPsqFL8u0416.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt=""/>
          <p>这是一个巨大的堡垒之城，被联合国教科文组织列为世界遗产。整座城市建在山上，房子都由黄土垒成，城中小道错综复杂。由于位置偏远，大部分人家已经迁离了这座城，但是保存完好的土城和美丽的撒哈拉风光使这座城成为了众多影视剧的拍摄地，如《阿拉伯的劳伦斯》《木乃伊》《巴别塔》《天国王朝》以及《权力的游戏》等。这里有一个小房间，墙上挂满了在此拍摄的影视作品的剧照，可以看看你认得出多少。</p>
          <img src="http://n1-q.mafengwo.net/s17/M00/C5/30/CoUBXl-Zdu6ADG0PAAhn8SmkzeU699.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt=""/>
          <img src="http://www.mafengwo.cn/i/21091270.html" alt=""/>
          <img src="http://www.mafengwo.cn/i/21092011.html" alt=""/>
      </div>
      </div>

    </ArticleDetailsContanier>
  );
};


export default ArticleDetails;