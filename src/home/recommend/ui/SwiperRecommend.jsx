import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Carousel } from 'antd-mobile'

import {
    SwiperWrap,
    SwiperItemWrap,
    SwiperItemP
} from './StyledRecommend'

@withRouter
class SwiperRecommend extends Component {
    bannerClickHandle = (id) =>{
        const { history } = this.props
        history.push('/jxtravalnote',{id})
    }
    render() {
        const {SwiperBanner} = this.props
        const SwiperBannerList = SwiperBanner.slice(70,74)
        return (
            <SwiperWrap>
                <Carousel
                autoplay={true}
                infinite
                >
                    {
                        SwiperBannerList.length > 0 && SwiperBannerList.map(value => {
                            // console.log(value)
                            return (
                                <SwiperItemWrap
                                key={value.data.id}
                                onClick={() => {this.bannerClickHandle(value.data.id)}}
                                >
                                    <div className="img">
                                        <img src={value.data.image} alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
                                        <span className="type">游记</span>
                                        <SwiperItemP>{value.data.title}</SwiperItemP>
                                        <div className="location">
                                            <svg xmlns="http://www.w3.org/2000/svg" t="1543312061381" className="icon" viewBox="0 0 1024 1024" version="1.1" p-id="7391" height="200" width="200"><path d="M514.878 89.234c-177.908 0-322.133 142.358-322.133 317.969s322.133 522.38 322.133 522.38 322.133-346.77 322.133-522.38-144.225-317.969-322.133-317.969zM514.878 565.431c-85.087 0-154.064-68.977-154.064-154.064s68.978-154.064 154.064-154.064 154.064 68.977 154.064 154.064c0 85.087-68.978 154.064-154.064 154.064z" p-id="7392" fill="#ffffff"/></svg>
                                            <span className="localname">{value.data_source.mdd ? value.data_source.mdd.name : ''}</span>
                                        </div>
                                        <div className="author">
                                            <svg xmlns="http://www.w3.org/2000/svg" t="1543312092858" className="icon" viewBox="0 0 1024 1024" version="1.1" p-id="8398" height="200" width="200"><path d="M880.864 704.346c-56.813-25.397-141.118-90.818-265.945-113.298 31.924-34.36 56.084-88.097 80.937-151.754 14.403-36.893 11.935-68.343 11.935-113.121 0-33.073 6.193-86.156-1.97-115.329-27.533-98.59-97.1-125.79-178.61-125.79-81.577 0-151.229 27.328-178.71 126.087-8.097 29.083-1.888 82.044-1.888 115.037 0 44.875-2.422 76.432 12.019 113.383 25.044 63.984 48.854 117.644 80.655 151.86-123.826 22.89-207.498 87.822-263.95 113.138C58.523 756.945 57.95 814.296 57.95 814.296v97.42l940.724-0.112v-97.308s-0.547-57.548-117.809-109.95z" p-id="8399" fill="#ffffff"/></svg>
                                            <span>{value.data_source.user ? value.data_source.user.name : ''}</span>
                                        </div>
                                    </div>
                                </SwiperItemWrap>
                            )
                        })
                    }
                </Carousel>
            </SwiperWrap>
        );
    }
}

export default SwiperRecommend;