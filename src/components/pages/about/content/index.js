import React from "react";
import grp2 from "../../../images/grp2.png";
import grp4 from "../../../images/grp4.png";
import grp5 from "../../../images/grp5.png";
import Rectangle from "../../../images/Rectangle.png";
import logob from "../../../images/logob.png";
import MyModal from "../../../MyModal";
import people from "../../../images/people.png";

const AboutContent = ({ showModal, setModal }) => {
  return (
    <div className="font-[Outfit]">
      {/* First Rectangle */}
      <div className="w-full bg-black py-40 px-4 text-white md:my-20 overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-[-100px]">
            <p className="text-sm flex justify-center max-w-[500px] mx-auto text-center items-center">
              About us
            </p>

            <p className="text-base flex justify-center max-w-[400px] mx-auto text-center md:text-3xl items-center pt-2 py-5">
              With one app, a multicurrency wallet and one card.
            </p>
          </div>
          <img
            src={people}
            alt="people"
            className="absolute top-30 mx-auto w-10/12 left-6 md:left-10 md:w-11/12"
          />
          {/*  */}
        </div>
      </div>

      {/* Second Rectangle */}
      <div className="w-full bg-[#EEF2F2] py-10 px-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="justify-center font-[Outfit] md:my-[100px] max-w-[650px] mx-auto text-center md:text-xl sm:text-md text-sm items-center">
            <p className="pt-0 font-bold py-2 md:pt-[180px] mx-auto">
              OUR MISSION
            </p>
            <p className="py-2 text-base">
              You can send money to bank accounts and mobile money wallets in
              KES,NGN,GHS,ZAR as well as EUR,GBP, and USD. Without any hidden
              fees you can. We help businesses to connect with their customers
              through the unrivalled power of sound-wherever,however.
            </p>
            <button
              onClick={() => setModal(true)}
              className="bg-[#1DB0A4] rounded-[50px] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-2 mx-auto md:mx-0 py-3"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Rectangle */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center font-[Outfit]">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Obtain secured online cards for all transactions.
            </h1>
            <p className="md:text-xl sm:text-md text-sm">
              Seamlessly meet all your International needs payment with our
              dynamic virtual cards that are totally secured.
            </p>
            <button
              onClick={() => setModal(true)}
              className="bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3"
            >
              Join Waitlist
            </button>
          </div>
          <img className="w-[500px] mx-auto my-4" src={grp2} alt="/ellipse" />
        </div>
      </div>

      {/* Fifth Rectangle */}
      <div className="bg-black py-20 px-4 text-white">
        <div className="max-w-[600px] w-full mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
            Create Accounts In Different Currencies
          </h1>
        </div>
        <div className="flex justify-center max-w-[300px] mx-auto text-center text-sm items-center pt-2 mb-20">
          <p className="py-5 md:text-xl sm:text-md text-sm">
            In just a few click, create USD, NGN, EUR and many more accounts to
            send money internationally.
          </p>
        </div>
        {/*<p className='md:text-xl text-lg py-10'></p>*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pl-10">
          <div className="flex flex-col">
            <h4 className="py-2 max-w-[150] w-full text-left font-bold">
              Accept International Payments
            </h4>
            <p className="flex max-w-[220px] text-left text-sm md:text-xl sm:text-md pt-2 mb-20">
              Accept International Payments from friends and acquaintances in
              your currency account.
            </p>
          </div>
          <div className="">
            <h4 className="py-2 max-w-[150] w-full text-left font-bold">
              No hidden charges
            </h4>
            <p className="flex max-w-[220px] text-left text-sm pt-2 mb-20">
              There are no hidden charges with the Rio. So, USD, EUR, NGN and
              other currency account opening is easy and free.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="py-2 max-w-[150] w-full text-left font-bold">
              Low & Competitive rate
            </h4>
            <p className="flex max-w-[220px] text-left text-sm pt-2 mb-20">
              We offer the best charges on all transactions. Every NGN
              transaction has a flat rate of #10. And International charges are
              super low.
            </p>
          </div>
          <div className="">
            <h4 className="py-2 max-w-[150] w-full text-left font-bold">
              Totally Secured Transactions
            </h4>
            <p className="flex max-w-[220px] text-left text-sm pt-2 mb-20">
              Enjoy safe banking across borders with Rio. All transactions are
              totally secured.
            </p>
          </div>
        </div>
      </div>

      {/* Sixth Rectangle */}

      <div className="w-full bg-[#F4F8FC] py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center font-[Outfit]">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Obtain secured online cards for all transactions.
            </h1>
            <p>
              Seamlessly meet all your International needs payment with our
              dynamic virtual cards that are totally secured.
            </p>
            <button
              onClick={() => setModal(true)}
              className="bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3"
            >
              Join Waitlist
            </button>
          </div>
          <img className="w-[500px] mx-auto my-4" src={grp4} alt="/ellipse" />
        </div>
      </div>

      {/* Seventh Rectangle */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-[-50px] my-4"
            src={grp5}
            alt="/circle of cards"
          />
          <div className="flex flex-col justify-center font-[Outfit]">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Get a Physical Naira card for your offline spending.
            </h1>
            <p>
              With the naira card, you can conveniently withdraw any amount
              across Nigeria.
            </p>
            <button
              onClick={() => setModal(true)}
              className="bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3"
            >
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="w-full py-16 mx-100 px-2">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 rounded-[50px] bg-black">
            <div className="flex flex-col justify-center font-[Outfit] text-white px-10 py-20">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Be the first to know when we launch. Join the VIPs!
              </h1>
              <p className="text-sm">
                Don't miss the limited launch offer for the first accounts to be
                opened. Be on the list of the VIPs.
              </p>
              <button className="bg-white border border-slate-300 shadow-md shadow-[#1DB0A4] text-black w-[200px] font-medium my-6 mx-auto md:mx-0 py-3">
                Join the VIPs
              </button>
            </div>
            <img className="md:mt-20" src={Rectangle} alt="/ellipse" />
          </div>
        </div>
      </div>
      {/* Last session */}
      <div className="bg-white text-black">
        <div className="max-w-[600px] w-full mx-auto items-center flex flex-col justify-center">
          <img className="w-[100px]" src={logob} alt="rio logo" />
        </div>
        <div>
          <p className="text-base mt-5 flex justify-center max-w-[500px] mx-auto text-center md:text-xl items-center pt-2 py-5">
            Rio is on a mission to make international transactions truly
            borderless and stress-free for everyone.
          </p>
        </div>
        <div className="mx-auto md:flex grid md:grid-cols-3 items-center justify-center text-black font-bold">
          <button className="bg-white border border-[#F4F8FC] bg-[#F4F8FC] rounded-full text-black w-[150px] font-medium my-6 mx-auto md:mx-3 py-3">
            About Us
          </button>
          <button className="bg-white border border-[#F4F8FC] bg-[#F4F8FC] rounded-full text-black w-[150px] font-medium my-6 mx-auto md:mx-3 py-3">
            Contact Us
          </button>
          <button className="bg-white border border-[#F4F8FC] bg-[#F4F8FC] rounded-full text-black w-[150px] font-medium my-6 mx-auto md:mx-3 py-3">
            Faqs
          </button>
        </div>
        <div className="mx-auto flex space-x-2 md:mx-auto md:flex md:space-x-6 text-2xl items-center justify-center">
          <ion-icon name="logo-facebook" className="md:px-5"></ion-icon>
          <ion-icon name="logo-twitter" className="md:px-5"></ion-icon>
          <ion-icon name="logo-linkedin" className="md:px-5"></ion-icon>
          <ion-icon name="logo-instagram" className="md:px-5"></ion-icon>
        </div>
      </div>

      {/* Modal */}
      <MyModal setShowModal={setModal} showModal={showModal} />
    </div>
  );
};

export default AboutContent;
