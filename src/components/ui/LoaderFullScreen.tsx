import React from 'react';

function Loader() {
  return (
    <div className="absolute inset-0 flex h-full items-center justify-center bg-[#181818]/20 backdrop-blur-sm">
      <div className="size-24 animate-spin rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
    </div>
  );
}

export default Loader;
