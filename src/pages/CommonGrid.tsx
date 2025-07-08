import React from 'react';

interface CommonGridProps {
    title: string;
    value: string | number;

}

const CommonGrid: React.FC<CommonGridProps> = ({ title, value }) => {
    return (
        <>
        <div className={`hover-div   space-y-0 cursor-pointer  rounded-xl  text-white  text-center px-6 pt-6 pb-4  hover:bg-gray-700 transition`}>
        <style>
                {`
                    .hover-div:hover p {
                        color: white;
                    }
                         .hover-div:hover div {
                         background-color: white;
                        color: #374151;
                    }
                `}
            </style>
        <p className="text-lg pb-1 text-white dark:text-gray-100 font-semibold hover:text-white">{title}</p>
        <div className="flex items-center justify-center w-14 h-14  mx-auto rounded-full bg-gray-200 text-gray-800 text-[20px] font-semibold">
            {value}
        </div>
      </div>
      </>

    );
};

export default CommonGrid;
