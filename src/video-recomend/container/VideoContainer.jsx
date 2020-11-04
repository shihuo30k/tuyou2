import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import VideoUi from '../ui/VideoUi'
import {loadVideoDataAsync} from '../actionCreator'


export default (props) => {
    // const [videoDataList] = useState([])
    const videoData = useSelector(state => state.getIn(['video', 'videoList']))
    const disptch = useDispatch()
    useEffect(() => {
        disptch(loadVideoDataAsync())
    },[disptch])
    return (
        <VideoUi
        videoData={videoData}
        ></VideoUi>
    )
}