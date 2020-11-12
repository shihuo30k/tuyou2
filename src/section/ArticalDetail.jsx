import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import NavBar from '@c/recommend/NavBarRecommend'
import {get} from '@u/http'
import {ArticlDetailWrap, WhiteSpace} from './StyledArticalDetail'

export default (props) => {
  const history = useHistory()
  const {id} = history.location.state
  const [allData, setAllData] = useState([])
  useEffect(() => {
    async function getData() {
      let result = await get({
        url:'/api/artical_detail'
      })
      const allData = result.data.data
      // console.log(allData)
      setAllData(allData)
    }
    getData()
  }, [id])
  // console.log(allData)
  const data = allData && allData.find(value => value.id === id)
  // console.log(data)
  return (
    <ArticlDetailWrap>
      <NavBar></NavBar>
      <WhiteSpace></WhiteSpace>
      <div className="main">
        {
          data && data.imgs.map((item, index) => {
            return(
              <div
              key={index}
              >
                <p>{data.content[index]}</p>
                <div className="image">
                  {
                    <img src={item} alt=""/>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </ArticlDetailWrap>
  )
}