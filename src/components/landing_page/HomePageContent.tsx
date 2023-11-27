import React, { useState, useEffect } from 'react';
import { ContentContainer, Title, Description, Cursor } from './styles';

const HomePageContent: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    // Updated text
    const titleText = 'Welcome to BidUp!';
    const paragraphText = `Empower yourself with BidUp! Take control of your service costs like never before. Say goodbye to fixed algorithms dictating prices. With BidUp, you set the price, and drivers bid down to win your task. Your requests, your prices, your rules. BidUp puts the power back in your hands.`;

    const typeEffect = async () => {
      // Type title
      for (let i = 0; i < titleText.length; i++) {
        setTitle((prev) => prev + titleText[i]);
        await delay(100);
      }

      // Type paragraph
      for (let i = 0; i < paragraphText.length; i++) {
        setContent((prev) => prev + paragraphText[i]);
        await delay(20);
      }

      setIsTyping(false); // Stop flickering after typing is finished
    };

    typeEffect();
  }, []);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  return (
    <ContentContainer>
      <Title isTyping={isTyping}>{title}</Title>
      <Description>
        {content}
        <Cursor>|</Cursor>
      </Description>
    </ContentContainer>
  );
};

export default HomePageContent;
