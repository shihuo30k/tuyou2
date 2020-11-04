import React, { Component } from 'react';
import { Link } from "react-router-dom"
import {
    Container,
    ShowImg
} from './StyledDestination'

class Destination extends Component {
    render() {
        return (
          <div>
             <Container>
                 <div className="searchContainer">
                    <div>
                      <svg t="1603678980634"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4296" width="200" height="200"><path d="M949.433724 901.786541 742.473115 694.824909c56.635905-66.875107 90.937129-153.268756 90.937129-247.790526 0-212.048487-171.923628-383.973138-383.973138-383.973138S65.464991 234.985896 65.464991 447.034383s171.923628 383.973138 383.973138 383.973138c94.52177 0 180.915419-34.301224 247.790526-90.905406L904.189264 947.062723c14.015202 14.015202 35.485189 15.230889 47.997154 2.719948C964.664613 937.27173 963.448926 915.801742 949.433724 901.786541zM449.437106 767.011998c-176.722934 0-319.977615-143.253658-319.977615-319.977615s143.253658-319.977615 319.977615-319.977615 319.977615 143.253658 319.977615 319.977615S626.161063 767.011998 449.437106 767.011998z" p-id="4297" fill="#cdcdcd"></path></svg>
                      <span>搜索</span>
                    </div>
                 </div>
             </Container>
             <ShowImg>
               <Link to="/recomindex">
                <div className="showImg">
                  <div>
                    <Link to="/recomindex"><img src="http://b1-q.mafengwo.net/s12/M00/07/F5/wKgED1vhj-WAE42sAAF8zDaPO4A56.jpeg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90" alt=""/></Link>
                  </div>
                  <div>
                    <span>曼谷</span>
                    <svg t="1603679415272" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5174" width="200" height="200"><path d="M527.053 96.924c-169.131 0.322-306.127 137.496-306.127 306.7 0 157.986 128.978 324.17 278.121 502.935 7.838 9.418 17.977 14.485 28.006 15.061 10.029-0.576 20.168-5.643 28.002-15.061 149.144-178.765 278.123-344.948 278.123-502.935 0-169.205-136.997-306.378-306.126-306.7zM527.053 500.967c-66.070-0.358-119.562-53.956-119.562-120.099s53.492-119.74 119.562-120.099c66.069 0.358 119.557 53.956 119.557 120.099s-53.487 119.74-119.557 120.099z" p-id="5175" fill="#dbdbdb"></path></svg>
                  </div>
                  <span>Bangkok</span>
                </div>
               </Link>
             </ShowImg>
          </div>
        );
    }
}

export default Destination;