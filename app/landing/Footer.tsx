import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col text-center md:text-left">
      <div className="flex flex-col py-8 gap-8 md:flex-row md:justify-between md:py-8 md:px-8 lg:py-100 xl:px-12 2xl:pb-120 2xl:px-24">
        <div className="flex flex-col">
          <h3 className="mb-4">Lilac Template</h3>
          <div className="mt-4 flex flex-col gap-4">
            <address className="not-italic">
              123 Example Road
              <br /> Minneapolis, MN
            </address>
            <p>
              <a href="mailto:email@example.com">email@example.com</a>
              <br />
              <a href="tel:5555555555">(555) 555-5555</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col">
            <h4 className="mb-4">Hours</h4>
            <div className="mt-4">
              <p>Monday - Friday</p>
              <p>
                <time dateTime="10:00">10am</time> -{" "}
                <time dateTime="18:00">6pm</time>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:text-right">
            <h4 className="mb-4">Find</h4>
            <div className="flex flex-col mt-4 gap-1">
              <a href="">Home</a>
              <a href="">Contact</a>
              <a href="">Blog</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-secondary py-2 px-4 text-center md:py-8 md:px-8 lg:pt-24 lg:pb-20 lg:px-24">
        <div className="flex items-center flex-wrap justify-center space-x-2 space-y-1 mb-2">
          <a href="">Privacy & Cookies Policy</a>
          <a href="">Good Faith Estimate</a>
          <a href="">Website Terms & Conditions</a>
          <a href="">Disclaimer</a>
        </div>
        <p className="mt-2">
          Website Template Credits: <a href="">Go Bloom Creative</a>
        </p>
        <p className="mt-4 md:-mb-4 lg:mt-12">
          All Right Reserved &copy; Your Business Name Here,LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
