import React from "react";

function CompanySection() {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center">
          <h1 className="text-lg font-medium leading-6 text-black uppercase within 500 fortune companies font-sans">
            ACSERVME serves various brands and types of air conditioners{" "}
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6 pt-6">
          <div className="flex justify-center col-span-1 px-8">
            <img
              className="max-h-15   "
              src="https://img.icons8.com/color/1000/null/samsung.png"
              alt="logo"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img
              className="max-h-15"
              src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lg-512.png"
              alt="logo"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img
              className="max-h-15"
              src="https://cdn.iconscout.com/icon/free/png-512/panasonic-282529.png?f=avif&w=256"
              alt="logo"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img
              className="max-h-15"
              src="https://i.ibb.co/q0QcsHh/Wb8ep9vm-YAFBK77h.png"
              alt="logo"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img
              className="max-h-15"
              src="https://i.ibb.co/09QGbyn/xd-CJE9-GT88-EDvz-X0.png"
              alt="logo"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img
              className="max-h-15"
              src="https://i.ibb.co/XFNPbzk/d-EE3-SJkm-JUkqw-CSS.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanySection;
