import React, { useState, useRef, useEffect } from 'react';
import KeyFeatures from './components/KeyFeatures';
import Testimonials from './components/Testimonials';
import TechnicalDetails from './components/TechnicalDetails';
import PersonalIntroduction from './components/PersonalIntroduction';
import ElevateComponent from './components/ElevateComponent';
import PricingComponent from './components/PricingComponent';
import CallToActionComponent from './components/CallToActionComponent';
import FAQComponent from './components/FAQComponent';
import Footer from './components/Footer';
import InstagramVideoGallery from './components/InstagramVideoGallery'; // Adjust the import path as necessary
import TeamComponent from './components/TeamComponent'
import Hero from './components/Hero'
import MarkdownCard from './components/MarkdownCard';

const App = () => {
  const markdownRef = useRef(null);
  const [showMarkdown, setShowMarkdown] = useState(false);
  const [loadMarkdownContent, setLoadMarkdownContent] = useState(false);

  const handleShowMarkdown = () => {
    setShowMarkdown(true);
    setLoadMarkdownContent(true);
  };

  useEffect(() => {
    if (showMarkdown && markdownRef.current) {
      markdownRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMarkdown]);

  return (
    <div className="App">
      <Hero />
      <PersonalIntroduction />
      <TeamComponent onDanImageClick={handleShowMarkdown} showMarkdown={showMarkdown} />
      <PricingComponent />
      <KeyFeatures />
      <InstagramVideoGallery />
      <Testimonials />
      <CallToActionComponent />
      <FAQComponent />
      
        {showMarkdown && loadMarkdownContent && (
          <>
          <div ref={markdownRef}></div>
            <MarkdownCard filePath="/Email.md" />
            <MarkdownCard filePath="/THC-RecommendationsReport.md" />
            <MarkdownCard filePath="/THC-Meeting.md" />
            
          </>
          
        )}
      
      <Footer />
    </div>
  );
};

export default App;