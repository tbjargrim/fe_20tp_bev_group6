import styled from "styled-components";
import VanImg from '../../Images/TravelWithVan2.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { StyledText, StyledButtonWrapper, StyledButtons, StyledH2, StyledP, StyledLink, StyledLinkSkip, LinkWrapper, StyledIcon } from '../SelectionPages/SelectionStyling';
import React, { useState } from 'react'
import * as ROUTES from '../../constants/routes';

const Temp = ({ setTargetTemp, setTargetTempClick, setTargetTempClickBack }) => {

  const handleClick = (e) => {
    const temp = parseInt(e.target.value);
    console.log(temp);
    setTargetTemp(temp);
  }
  const handleNext = () => {
    let clicked = true;
    setTargetTempClick(clicked);
  }
  const handleBack = () => {
    let clicked = false;
    setTargetTempClickBack(clicked);
  }
      return(
    <div>
      <StyledText>
        <StyledH2>Välj vilken typ av resa du är ute efter </StyledH2>
        <StyledP>Välj ett val som passar just dig</StyledP>
      </StyledText>
      <StyledButtonWrapper>
        <StyledButtons onClick={handleClick} value="0"><StyledIcon src={VanImg}></StyledIcon>After Ski</StyledButtons>
        <StyledButtons onClick={handleClick} value="10"><StyledIcon src={VanImg}></StyledIcon>Vandring</StyledButtons>
        <StyledButtons onClick={handleClick} value="20"><StyledIcon src={VanImg}></StyledIcon>Tshirt-väder</StyledButtons>
        <StyledButtons onClick={handleClick} value="30"><StyledIcon src={VanImg}></StyledIcon>Strandhäng</StyledButtons>
    </StyledButtonWrapper>
    <StyledLinkSkip to={ROUTES.RESULT}>Hoppa över</StyledLinkSkip>
    <LinkWrapper>
        <StyledLink to={ROUTES.WIZ}><FaArrowLeft onClick={handleBack} /></StyledLink>
       <StyledLink to={ROUTES.WIZ}> <FaArrowRight onClick={handleNext} /> </StyledLink> 
    </LinkWrapper>
  </div>
    );
  }
  
export default Temp;