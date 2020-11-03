import React ,{useState,useCallback,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {WorldContainer,LiBorder,TitleBorder} from './StyledWorld'
import actionCreator from '../actionCreator'



const TheWorld = props => {

  const dispatch = useDispatch()
  const history = useHistory()

  
  let countriesList = useSelector(state => state.getIn(['allCountries','countryList']))

  const countriesListx = countriesList.toJS()

  const curCountryShow = useSelector(state => state.getIn(['allCountries','single','curCountry']))

  const curCountryList = countriesListx[curCountryShow]

  const [curCountry, setcurCountry] = useState(0)

  

  const changeCountry = useCallback((value,i)=>{
    return ()=>{
      setcurCountry(i)
      dispatch(actionCreator.loadCurCountrySync(value))
    }
  },[dispatch])
    
    
  const handleGoToDestination = useCallback(
    () => {
      history.goBack()
    },[history]
  )

  useEffect(()=>{
    dispatch(actionCreator.loadAllCountriesAsync())
  },[dispatch])

  
  return (
    <WorldContainer>
      
        <TitleBorder onClick={handleGoToDestination} width="0 0 1px 0" className="title">
          <svg t="1603952459060"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2076" ><path d="M967.111111 455.111111v113.777778H170.666667V455.111111z" fill="#3fcd90" p-id="2077"></path><path d="M477.866667 955.733333L34.133333 517.688889l443.733334-443.733333 79.644444 79.644444-364.088889 364.088889 364.088889 358.4z" fill="#3fcd90" p-id="2078"></path></svg>
          <span>推荐锦囊</span>
        </TitleBorder>

        <div className='container'>
          <ul className="left-aside">
            {
              Object.keys(countriesListx).map((value,i) =>{
              return( <LiBorder key={i} width="0 1px 1px 0" className={curCountry === i ? "active" : ''} onClick={changeCountry(value,i)} >{value}</LiBorder>
                )
              })
            }
          </ul>

          <div  className="right-aside">
            <ul>

              {
                 curCountryList && curCountryList.map((value,i)=>{
                  return(
                    <li key={i}>
                    <img src="http://b1-q.mafengwo.net/s7/M00/0A/ED/wKgB6lQnxZqAfMxIAASBo8KcOEc67.jpeg?imageView2%2F2%2Fw%2F420%2Fh%2F999%2Fq%2F90" alt=""/>
                    <span className="Chinese">{value}</span>
                    <span className="English">TaiWan</span>
                  </li>
                  )
                })
              }
            </ul>
          </div>

        </div>
    </WorldContainer>
  );
};



export default TheWorld;