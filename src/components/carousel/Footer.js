import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
`;

const Text = styled.div`
  margin-right: 1rem;
`;

const TextHighlight = styled.span`
  color: #1bcacd;
  font-weight: bold;
`;

const Iframe = styled.iframe`
  font-size: 0;
  height: 30px;
`;

const Footer = () => (
  <Container>
    <Text>
      <TextHighlight>Support</TextHighlight> this project:
    </Text>
    <Iframe
      title="Star on Github"
      src="https://ghbtns.com/github-btn.html?user=davidcetinkaya&repo=embla-carousel&type=star&count=true&size=large"
      frameBorder="0"
      scrolling="0"
      width="160px"
      height="30px"
    />
  </Container>
);

export default Footer;
