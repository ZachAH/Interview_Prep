'use client';
import { useState, useEffect } from 'react';
import { interviewData, type InterviewItem } from './questions.ts';

const sections = [
  'JavaScript Fundamentals', 'React Basics', 'Advanced React & State Management', 'CSS & Styling',
  'Performance & Optimization', 'Testing', 'Security & Scenario Questions', 'Advanced/Scenario Questions',
  'Claw and Decay Technical/Design Questions', 'CRUD (Create, Read, Update, Delete)', 'RPC (Remote Procedure Call)',
  'Scenarios', 'WebSockets', 'Vite', 'WebSocket Questions', 'Vite Questions', 'Core Technical Skills',
  'DevOps & Cloud', 'Databases', 'Agile & Collaboration', 'Problem-Solving & Behavioral'
];

export default function App() {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [itemsToShow, setItemsToShow] = useState<number>(10);
  const [activeSection, setActiveSection] = useState<string>(''); // selected section
  const itemsPerLoad = 10;

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleAnswer = (index: number) => {
    setRevealedAnswers(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleShowMore = () => setItemsToShow(prev => prev + itemsPerLoad);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Filter by search term + section
  const filteredData: InterviewItem[] = interviewData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'} p-4 sm:p-8 flex flex-col items-center transition-colors duration-300`}>
      <div className="w-full max-w-4xl space-y-4">

        {/* Header & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h1 className={`text-3xl sm:text-4xl font-extrabold text-center ${darkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
            React Interview Prep Flashcards
          </h1>
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300
                         bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2
                         ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-200'}
                         focus:ring-indigo-500`}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.965 5.688a1 1 0 01-.157 1.258l-1.4 1.401a1 1 0 01-1.414 0l-1.4-1.401a1 1 0 01-.157-1.258l.848-.847a1 1 0 011.414 0l.564.564a1 1 0 010 1.414l-.564.564a1 1 0 01-1.414 0l-.848-.848a1 1 0 01-.293-1.414l.142-.141a1 1 0 011.414 0l.293.293.293-.293a1 1 0 011.414 0l.293.293.293-.293zM16 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm8.586-7.586a1 1 0 010 1.414L11.414 6a1 1 0 01-1.414 0L8.586 4.586a1 1 0 011.414-1.414L10 4.172l.586-.586zM4.414 4.586a1 1 0 011.414 0L6 6a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0L3 7.414a1 1 0 010-1.414l.293-.293.293.293z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Section Buttons */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(activeSection === section ? '' : section)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300
                         ${activeSection === section
                           ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                           : darkMode
                             ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                             : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Flashcards */}
        {filteredData.length > 0 ? (
          <>
            {filteredData.slice(0, itemsToShow).map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-xl p-5 sm:p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer
                           ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                onClick={() => toggleAnswer(index)}
              >
                <h2 className={`text-lg sm:text-xl font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  {item.question}
                </h2>
                {revealedAnswers[index] && (
                  <p className={`mt-3 text-sm sm:text-base leading-relaxed animate-fade-in-down
                             ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
            {itemsToShow < filteredData.length && searchTerm === '' && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMore}
                  className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Show More
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-lg mt-10 text-gray-500 dark:text-gray-400">
            No questions found. Try a different search!
          </p>
        )}
      </div>

      {/* Scroll to top */}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300
                   ${darkMode ? 'bg-gray-700 text-indigo-300 hover:bg-gray-600' : 'bg-white text-indigo-600 hover:bg-gray-200'}
                   focus:outline-none focus:ring-2 focus:ring-indigo-500`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
