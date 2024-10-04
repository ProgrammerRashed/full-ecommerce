"use client"
import { useState, useEffect } from 'react';
import SidebarFilters from './SidebarFilters';

const FilterDrawerClient = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if clicked outside
  const handleOutsideClick = (e: any) => {
    if (isOpen && !e.target.closest('.sidebar')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600"
        onClick={toggleSidebar}
      >
        Open Sidebar
      </button>

      {/* Sidebar drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 sidebar`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={toggleSidebar}
        >
          ×
        </button>
        <div className="p-6 mt-8">
          <SidebarFilters />
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
    </>
  );
};

export default FilterDrawerClient;
