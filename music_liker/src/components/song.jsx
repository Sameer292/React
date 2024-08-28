import React from "react";

function Song({ setState }) {

  function handleClick(e) {
    setState(e);
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt="Fuck"
        />
      </div>
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          onDoubleClick={handleClick}
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
        />
      </div>
    
    </div>
  );
}

export default Song;
