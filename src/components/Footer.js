import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Flex from "./Flex"
import Logo from "./Logo"

const Wrapper = styled.footer`
    width: 150%;
    height: 150%;
    border-radius: 100% 100% 0 0;
    top: 50%;
    left: -25%;
    right: 0;
    position: relative;
    color: white;
    background-color: rgb(38,33,30);
`;

const InnerWrapper = styled.div` 
    max-width: 1080px;
    margin: 0 auto;
    padding: 60px 0;
`;

const SocialLinks = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 0;
`;

const SocialLink = styled.li`
    margin-right: 8px;
`;

const StyledFlex = styled(Flex)`
    h2 {
        font-size: 24px;
    }
`;

const Locations = styled.section`
    
`

const OpeningHours = styled.section`
    min-width: 220px;
    text-align: right;
`

const ListItem = styled.li`
    margin-bottom: 8px;
`;

const Footer = () => {
    const socialLinks = [
        { name: 'facebook', url: 'https://www.facebook.com/georgeandthebear/', icon: './images/facebook.svg' },
        { name: 'instagram', url: 'https://www.instagram.com/georgeandthebear/', icon: './images/instagram.svg' },
        { name: 'twitter', url: 'https://twitter.com/george_and_bear', icon: './images/twitter.svg' },
        { name: 'email', url: 'mailto:info@georgeandthebear.com', icon: './images/email.svg' },
    ]

    const openingDays = [
        { name: 'Maandag', open: '13:00', close: '18:00' },
        { name: 'Dinsdag' },
        { name: 'Woensdag', open: '08:00', close: '18:00' },
        { name: 'Donderdag', open: '08:00', close: '18:00' },
        { name: 'Vrijdag', open: '08:00', close: '18:00' },
        { name: 'Zaterdag', open: '08:00', close: '18:00' },
        { name: 'Zondag' }
    ]

    return (
        <Wrapper>
            <InnerWrapper>
                <SocialLinks>
                    {socialLinks.map(link => {
                        return (<SocialLink key={link.name}>
                            <Link to={link.url}>Link</Link>
                        </SocialLink>)
                    })}
                </SocialLinks>
                <StyledFlex justifyContent="space-between" alignItems="center">
                    <Logo />
                    <Locations>
                        <h2>Locatie</h2>
                        <adress
                            href="https://www.google.be/maps/place/George+and+the+Bear/@50.9726884,5.48735,20.06z/data=!4m5!3m4!1s0x47c0d8d161110867:0x54fe41c342e3bc12!8m2!3d50.9726508!4d5.487577"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></adress>
                        <address>Vennestraat 353</address>
                        <adress>3600 Genk</adress>
                    </Locations>
                    <OpeningHours>
                        <h2>Openingsuren</h2>
                        <ul>
                            {openingDays.map(day => {
                                if (day.open) {
                                    return (
                                        <ListItem key={day.name}>
                                            <Flex justifyContent="space-between" alignItems="center">
                                                <span>{day.name}</span>
                                                <span><time>{day.open}</time> - <time>{day.close}</time></span>
                                            </Flex>
                                        </ListItem>
                                    )
                                }
                                return (
                                    <ListItem key={day.name}>
                                        <Flex justifyContent="space-between" alignItems="center">
                                            <span>{day.name}</span>
                                            <span>gesloten</span>
                                        </Flex>
                                    </ListItem>
                                )
                            })}
                        </ul>
                    </OpeningHours>
                </StyledFlex>
            </InnerWrapper>
        </Wrapper>
    )
};

export default Footer;