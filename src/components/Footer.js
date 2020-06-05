import React from "react"
import styled from "styled-components"
import Flex from "./Flex"

import Facebook from "../icons/svg/facebook.svg"
import Instagram from "../icons/svg/instagram.svg"
import Twitter from "../icons/svg/twitter.svg"
import Email from "../icons/svg/mail.svg"

const Wrapper = styled.footer`
    width: 100%;
    height: 100%;
    border-radius: 15% 15% 0 0;
    position: relative;
    color: white;
    background-color: rgb(38,33,30);
    overflow: hidden;
`;

const InnerWrapper = styled.div` 
    max-width: 1080px;
    margin: 0 auto;
    padding: 60px 0;
`;

const SocialBar = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 0;
`;

const SocialLink = styled.a`
    filter: invert(0.5);
    margin-right: 32px;

    :hover {
        filter: invert(0.8);
        transition: all ease 0.6s;
    }

    :focus {
        filter: invert(0.8);
    }
`;

const StyledFlex = styled(Flex)`
    h2 {
        font-size: 24px;
    }
`;

const Locations = styled.section`
    font-family: "Courier New", Courier, monospace;
    min-width: 220px;
    text-align: left;
    a {
        color: white;
    }
`;

const OpeningHours = styled.section`
    font-family: "Courier New", Courier, monospace;
    min-width: 220px;
    text-align: right;
`;

const ListItem = styled.li`
    margin-bottom: 8px;
`;


const Footer = () => {

    const openingDays = [
        { name: 'Maandag', open: '13:00', close: '18:00' },
        { name: 'Dinsdag' },
        { name: 'Woensdag', open: '10:00', close: '18:00' },
        { name: 'Donderdag', open: '10:00', close: '18:00' },
        { name: 'Vrijdag', open: '10:00', close: '22:00' },
        { name: 'Zaterdag', open: '10:00', close: '18:00' },
        { name: 'Zondag' }
    ]

    return (
        <Wrapper>
            <InnerWrapper>
                <SocialBar>
                    <SocialLink
                        href="https://www.facebook.com/georgeandthebear/"
                        target="__blank"
                    >
                        <Facebook width="32" height="32" />
                    </SocialLink>
                    <SocialLink
                        href="https://www.instagram.com/georgeandthebear/"
                        target="__blank"
                    >
                        <Instagram width="26" height="26" />
                    </SocialLink>
                    <SocialLink
                        href="https://twitter.com/george_and_bear"
                        target="__blank"
                    >
                        <Twitter width="32" height="32" />
                    </SocialLink>
                    <SocialLink
                        href="mailto:info@georgeandthebear.com"
                        target="__blank"
                    >
                        <Email width="32" height="32" />
                    </SocialLink>
                </SocialBar>
                <StyledFlex justifyContent="space-between" alignItems="flex-start">
                    <Locations>
                        <h2>Locatie</h2>
                        <address
                            href="https://www.google.be/maps/place/George+and+the+Bear/@50.9726884,5.48735,20.06z/data=!4m5!3m4!1s0x47c0d8d161110867:0x54fe41c342e3bc12!8m2!3d50.9726508!4d5.487577"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Vennestraat 35</address>
                        <address>3600 Genk</address>
                        <address>België</address>
                        <a href="tel:+3289214001">+32 (0)89 21 40 01</a><br />
                        <a href="mailto:info@georgeandthebear.com">info@georgeandthebear.com</a>
                    </Locations>
                    <OpeningHours>
                        <h2>Openingsuren</h2>
                        <ul>
                            {openingDays.map(day => {
                                if (day.open) {
                                    return (
                                        <ListItem key={day.name}>
                                            <Flex justifyContent="space-between" alignItems="center">
                                                <span>{day.name}</span><span>____</span>
                                                <span><time>{day.open}</time>__<time>{day.close}</time></span>
                                            </Flex>
                                        </ListItem>
                                    )
                                }
                                return (
                                    <ListItem key={day.name}>
                                        <Flex justifyContent="space-between" alignItems="center">
                                            <span>{day.name}</span>
                                            <span>Gesloten</span>
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