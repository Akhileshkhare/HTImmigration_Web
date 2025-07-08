import React from 'react';

interface CommonHeaderProps {
    title: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title, buttonText, onButtonClick }) => {
    return (
        <header className="bg-gray-50 dark:bg-gray-900 shadow h-[60px]  px-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {title}
            </h1>
            {buttonText && onButtonClick && (
                <button 
                    onClick={onButtonClick} 
                    className="bg-gray-800 hover:bg-gray-500 text-white px-4 py-2 rounded"
                >
                    {buttonText}
                </button>
            )}
        </header>
    );
};

export default CommonHeader;
