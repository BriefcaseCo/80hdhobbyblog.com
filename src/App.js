import React, { useState, useEffect } from 'react';
import HeaderComponent from './components/HeaderComponent';
import StoryNavigationComponent from './components/StoryNavigationComponent';
import ChapterComponent from './components/ChapterComponent';
import FooterComponent from './components/FooterComponent';
import AudioPlayerComponent from './components/AudioPlayerComponent';
import ImageGalleryComponent from './components/ImageGalleryComponent';
import StoryCoverComponent from './components/StoryCoverComponent';
import CharacterProfileComponent from './components/CharacterProfileComponent';
import InteractiveMapComponent from './components/InteractiveMapComponent';
import AboutTheAuthorComponent from './components/AboutTheAuthorComponent';
import SocialMediaLinksComponent from './components/SocialMediaLinksComponent';
import StorySelectorComponent from './components/StorySelectorComponent';
import FeedbackComponent from './components/FeedbackComponent';
import ContactFormComponent from './components/ContactFormComponent';
import NavigationMenu from './components/NavigationMenu'; // Import NavigationMenu component

function App() {
    const [currentChapter, setCurrentChapter] = useState(1);
    const [chapterData, setChapterData] = useState(null);
    const [storyMetadata, setStoryMetadata] = useState(null);

    useEffect(() => {
        // Fetch story metadata
        const fetchStoryMetadata = async () => {
            try {
                const response = await fetch('/stories/ice_nation/metadata.json');
                const metadata = await response.json();
                setStoryMetadata(metadata);
            } catch (error) {
                console.error('Error fetching story metadata:', error);
            }
        };
        fetchStoryMetadata();
    }, []);

    useEffect(() => {
        // Fetch chapter data
        const fetchChapterData = async () => {
            try {
                if (storyMetadata && currentChapter <= storyMetadata.totalChapters) {
                    const response = await fetch(`/stories/ice_nation/chapters/chapter${currentChapter}.json`);
                    const data = await response.json();
                    setChapterData(data);
                }
            } catch (error) {
                console.error('Error fetching chapter data:', error);
            }
        };
        fetchChapterData();
    }, [currentChapter, storyMetadata]);

    return (
        <div className="App">
            <HeaderComponent />
            <NavigationMenu /> {/* Add the navigation menu */}

            <main>
                <StorySelectorComponent selectedStory={'Ice Nation'} onSelectStory={(story) => console.log(story)} />

                {storyMetadata && (
                    <>
                        <StoryCoverComponent coverImage={`/stories/ice_nation/images/${storyMetadata.coverImage}`} />
                        <StoryNavigationComponent
                            totalChapters={storyMetadata.totalChapters}
                            currentChapter={currentChapter}
                            onChapterSelect={setCurrentChapter}
                        />
                        {chapterData && (
                            <>
                                <AudioPlayerComponent audioFile={`/stories/ice_nation/audio/${chapterData.audioFile}`} />
                                <ChapterComponent chapterData={chapterData} />
                                <ImageGalleryComponent imagePaths={chapterData.images.map(image => `/stories/ice_nation/images/${image}`)} />
                            </>
                        )}
                        <CharacterProfileComponent />
                        <InteractiveMapComponent mapImage='/path-to-map-image.png' />
                    </>
                )}

                <AboutTheAuthorComponent />
                <SocialMediaLinksComponent />
                <FeedbackComponent />
                <ContactFormComponent />
            </main>

            <FooterComponent />
        </div>
    );
}

export default App;

