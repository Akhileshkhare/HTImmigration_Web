import React from 'react';

function Loading({ message = "Loading" }: { message?: string }) {
    return (
      <div className="w-screen h-screen flex items-center justify-center dark:bg-gray-900 bg-gray-800 bg-opacity-10 dark:opacity-80">
        <div className="grid gap-3 text-center">
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-gray-700 dark:bg-gray-100 animate-BounceDelayOne"></div>
            <div className="w-4 h-4 rounded-full bg-gray-700 dark:bg-gray-100 animate-BounceDelayTwo"></div>
            <div className="w-4 h-4 rounded-full bg-gray-700 dark:bg-gray-100 animate-BounceDelayThree"></div>
          </div>
          <span className="text-black text-sm font-normal leading-snug dark:text-gray-200">
            {message}
          </span>
        </div>
      </div>
    );
  }

export default Loading;
