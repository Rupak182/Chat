import React, { ReactNode, useEffect, useState } from 'react';

interface SidebarProps{
  children:React.ReactNode
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const[recentSearches,setRecentSearches]=useState([])

 useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed top-0 left-0  w-1/4">
      <div className={`bg-gray-800 text-white h-screen absolute top-10 p-5 transition-transform duration-300  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className="text-2xl font-bold text-white">Chat History</h1>
        <ul className="mt-5">
        

        {recentSearches.map((search, idx) => (
                    <button
                      key={idx}
                      onClick={() => ()=>{}}
                      className="w-full text-left px-2 py-2 text-gray-300 hover:bg-gray-700/50 rounded-lg transition-colors duration-150"
                    >
                      <span className="mr-2">🕒</span> {search}
                    </button>
                  ))}
        </ul>
      </div>
      <div className="flex-1">
        <button onClick={toggleSidebar} className="p-4 bg-blue-500 text-white rounded">
          Toggle Sidebar
        </button>
       
      </div>
    </div>
  );
};

export default Sidebar;