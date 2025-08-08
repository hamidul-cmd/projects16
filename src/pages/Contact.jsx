import React from "react";
import CommonHero from "../components/CommonHero";
import { contactsCirdData } from "../Data/contactsCirdData";

function Contact() {
  return (
    <>
      <CommonHero
        contact={true}
        title="Get in Touch"
        pera="Contact us to publish your content and show ads to our website and get a good reach."
      />
      <div className="grid grid-cols-1 ll:grid-cols-2 ll2:grid-cols-3 gap-7.5 ll2:gap-4 3xl:gap-5 px-12.5 ll2:px-24.5 3xl:px-36.5 ">
        {contactsCirdData.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-3.5 bg-white rounded-xl py-7.5 3xl:py-10"
            >
              <div className="p-4 bg-primary rounded-full">{data.icon}</div>
              <h4 className="text-sm l-150 font-releway font-bold text-primary ll2:text-base 3xl:text-xl">
                {data.title}
              </h4>
              <p className="text-sm font-medium font-releway l-150 text-[#7A7A7A] 3xl:text-base">
                {data.pera}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-12.5 3xl:mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4819.679818863353!2d90.06537672855418!3d25.180270951651742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d951f243c397%3A0x39a5256e4fd4412d!2sJhenaigati%20Upazila%20Health%20Complex!5e0!3m2!1sen!2sbd!4v1754503469603!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] 3xl:h-[550px]"
        />
      </div>
    </>
  );
}

export default Contact;
