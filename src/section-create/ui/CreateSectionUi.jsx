import React from 'react'
import NavBar from '@c/recommend/NavBarRecommend'
import NoteText from './NoteText'
import SectionForm from './SectionForm'
import {SectionCreate, WhiteSpace} from './StyledSectionCreate'

export default (props) => {
    return (
        <SectionCreate>
            <NavBar>申请专栏</NavBar>
            <WhiteSpace></WhiteSpace>
            <NoteText></NoteText>
            <SectionForm></SectionForm>
        </SectionCreate>
    )
}