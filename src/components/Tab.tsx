'use client';

import React, { useState } from 'react';

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="border-b-2 border-[#0B2447] dark:border-white">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${
                activeTab === index
                  ? 'bg-[#0B2447] dark:bg-white text-white dark:text-[#0B2447]'
                  : 'bg-white dark:bg-[#0B2447] text-[#0B2447] dark:text-white hover:bg-[#0B2447]/10 dark:hover:bg-white/10'
              } rounded-t-md py-2 px-4 font-medium text-sm transition-all duration-300 border-2 border-b-0 border-[#0B2447] dark:border-white`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4 p-4 border-2 border-t-0 border-[#0B2447] dark:border-white rounded-b-md">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;