import React, { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import BlogsTab from './components/BlogsTab';
import AboutTab from './components/AboutTab';

function App() {
  const [activeTab, setActiveTab] = useState('blogs');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'blogs':
        return <BlogsTab />;
      case 'about':
        return <AboutTab />;
      default:
        return <BlogsTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderActiveTab()}
      </main>
    </div>
  );
}

export default App;