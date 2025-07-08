import React from "react";

interface PopupHeaderProps {
  title: string;
  onClose: () => void;
}

const PopupHeader: React.FC<PopupHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-gray-500 dark:bg-gray-800 rounded-tl-lg rounded-tr-lg dark:border-gray-600">
      <h2 className="text-lg font-semibold text-white dark:text-white">{title}</h2>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
      </button>
    </div>
  );
};

export default PopupHeader; 
