import React from 'react';
import contact from '../../assets/api/contactData.json'
// import { FaFlagUsa, FaFlagIndia, FaFlagUk } from 'react-icons/fa';

// const icons = {
//   FaFlagUsa: <FaFlagUsa />,
//   FaFlagIndia: <FaFlagIndia />,
//   FaFlagUk: <FaFlagUk />
// };

const Footer = () => {
  return (
    <>
      <div className="content-div text-center">
        <h2>Contact Us</h2>
      </div>

      <section className="contact-us container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-12 py-12 px-3">
        {contact.contactData.map((contact) => {
          return (
            <div key={contact.id} className="card p-4 border rounded shadow-lg">
              {/* <div className="icon text-3xl mb-4">{icons[contact.icon]}</div> */}
              <h3 className="text-lg font-bold">{contact.country}</h3>
              <p>Contact: {contact.name}</p>
              <p>Mobile: {contact.mobile}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Footer;
