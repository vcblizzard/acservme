import React from 'react';

function ErrorSection() {
  return (
    <section>
      <div className="relative justify-center h-screen max-h-full overflow-hidden lg:px-0 md:px-12">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">
            <p className="text-5xl tracking-tight text-black  lg:text-9xl">
              404
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
              Please check the URL in the address bar and try again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorSection;
