import React from 'react'
import styled from 'styled-components'

import NavOption from './NavOption'
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Avatar from './Avatar';
import Widget from './Widget'
const NabBar = () => {
    return (
        <Section>
            <Avatar />
            <NavOption Icon={HomeIcon} title="Home" active />
            <NavOption Icon={MenuBookIcon} title="Menu" />
            <NavOption Icon={DescriptionIcon} title="Articles" />
            <NavOption Icon={SettingsIcon} title="Settings" />
            <Widget />
        </Section>
    )
}

export default NabBar
const Section = styled.section`
flex: 0.1;
padding: 60px 30px;
background-color: rgba(255, 255, 255, 0.26);
border-radius: 60px;
box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-webkit-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;
-moz-box-shadow: 10px 11px 10px -2px rgba(255,255,255,0.7) inset;`
