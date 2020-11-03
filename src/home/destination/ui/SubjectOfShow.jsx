import React from 'react';
import { useSelector } from 'react-redux'
import {SubjectImg } from  './StyledDestination'

const SubjectOfShow = props => {

  // const subjectList = useSelector(state => state.destination.subjectList)
  const subjectList = useSelector(state => state.getIn(['destination','subjectList']))
  
  let subjectListShow = subjectList.toJS()

  // const subject = useSelector(state => state.destination.curSubject)
  const subject = useSelector(state => state.getIn(['destination','single','curSubject']))
  
// console.log(subject);

  const subjectImg = subjectListShow[subject]

  // console.log(subjectImg)

  return (
    <SubjectImg>
        <ul>
          
          {
               subjectImg && subjectImg.map((value,i) =>
                   (
                  <li key={i+value}>
                    <img src={value.img}  alt=""/>
                  <span>{value.city}</span>
                   </li>
                )
              )
            }
          
        </ul>
    </SubjectImg>
  );
};



export default SubjectOfShow;