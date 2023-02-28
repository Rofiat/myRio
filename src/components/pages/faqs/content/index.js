import React from "react";
import guy from "../../../images/guy.png";
import people from "../../../images/people.png";
import female from "../../../images/female.png";
import play from "../../../images/play.jpg";
import imag from "../../../images/imag.png";
import logow from "../../../images/logow.svg";

const FaqContent = ({ showModal, setModal }) => {
  return (
    <div className="font-[Outfit] bg-white">
      {/* First Rectangle */}
      <div className="w-full bg-[#3B4DB9] py-40 text-white md:my-20 overflow-x-hidden">
        <div className="mx-auto">
          <div className="mt-[-100px] pl-5">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold pt-4 pb-16">
              About Rio
            </h1>
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
      <div className="w-full bg-white pt-28">
        <div className="max-w-[1240px] mx-auto">
          <div className="justify-center font-[Outfit] md:my-[250px] max-w-[600px] mx-auto text-center md:text-xl sm:text-md text-sm items-center">
            <h1 className="md:text-4xl sm:text-3xl text-xl font-bold">
              Rio helps you make payments as easy as chatting your friend
            </h1>
            <p className="py-5 text-md md:text-base max-w-[450px] mx-auto">
              You can send money to bank accounts and mobile money wallets in
              KES,NGN,GHS,ZAR as well as EUR,GBP, and USD. Without any hidden
              fees you can. We help businesses to connect with their customers
              through the unrivalled power of sound-wherever,however.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Rectangle */}
      <div className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="md:ml-[-10px] my-4" src={guy} alt="/guy" />
          <div className="flex flex-col justify-center font-[Outfit] w-[300px] mx-auto">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-5">
              Why we are here
            </h1>
            <p className="text-sm">
              You can send money to bank accounts and mobile money wallets in
              KES,NGN,GHS,ZAR as well as EUR,GBP, and USD. Without any hidden
              fees you can. We help businesses to connect with their customers
              through the unrivalled power of sound-wherever,however.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Rectangle */}
      <div className="w-full bg-white pt-[100px]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center font-[Outfit] max-w-[300px] mx-auto">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-5">
              Where are we going
            </h1>
            <p className="text-sm">
              You can send money to bank accounts and mobile money wallets in
              KES,NGN,GHS,ZAR as well as EUR,GBP, and USD. Without any hidden
              fees you can. We help businesses to connect with their customers
              through the unrivalled power of sound-wherever,however.
            </p>
          </div>
          <img className="mx-auto my-4" src={guy} alt="/guy" />
        </div>
      </div>

      {/* Fourth Rectangle */}
      <div className="w-full bg-white py-[100px]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="md:ml-[-10px] my-4" src={guy} alt="/guy" />
          <div className="flex flex-col justify-center font-[Outfit] max-w-[300px] mx-auto">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-5">
              Our Commitment
            </h1>
            <p className="text-sm">
              You can send money to bank accounts and mobile money wallets in
              KES,NGN,GHS,ZAR as well as EUR,GBP, and USD. Without any hidden
              fees you can. We help businesses to connect with their customers
              through the unrivalled power of sound-wherever,however.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-[#4C61E1] to-[#3B4DB9]">
        <div className="max-w-[1200px] md:space-x-60 grid md:grid-cols-2">
          <div className="mx-auto md:px-[-30px] flex flex-col justify-center font-[Outfit] text-white px-10 py-20">
            <h1 className="md:max-w-[700px] md:text-5xl sm:text-4xl text-3xl font-bold py-2">
              <p>Join the Revolution.</p>
              <p>Start using Rio Today</p>
            </h1>
            <div className="mx-auto md:flex grid md:grid-cols-2 items-center justify-center text-black font-bold mt-[50px] md:mt-[100px] ml-5">
              <button className="bg-black border border-white text-white rounded-md w-[170px] font-medium pl-2 pt-2 mb-5 md:mb-0 md:mr-5">
                <div className="">
                  <div className="float-left mr-[10px] mt-[3px]">
                    <img
                      src={play}
                      alt="playstore"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div classname="float-left">
                    <p className="text-[10px] text-left mb-[-5px] mt-[-5px]">
                      GET IT ON
                    </p>
                    <p className="text-xl text-left">Google Play</p>
                  </div>
                </div>
              </button>
              <button className="bg-black border border-white text-white rounded-md w-[170px] font-medium pl-2 pt-2">
                <div className="">
                  <div className="float-left mr-[10px] mt-[3px]">
                    <img
                      src={imag}
                      alt="playstore"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div classname="float-left">
                    <p className="text-[12px] text-left mb-[-5px] mt-[-5px] font-light tracking-normal">
                      Download on the
                    </p>
                    <p className="text-xl text-left tracking-wide">App Store</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <img className="mx-auto md:float-right" src={female} alt="/ellipse" />
        </div>
      </div>
      <div className="w-full bg-[#1E1F33] text-white pt-[70px] md:pl-[30px] pb-[20px]">
        <div className="grid grid-cols-2 md:grid-cols-4 pl-5">
          <div className="flex flex-col w-[300px] md:w-[600px] md:mr-[200px]">
            <img className="w-[100px] float-left" src={logow} alt="rio logo" />
            <p className="flex max-w-[120px] md:max-w-[250px] text-left text-xs font-light tracking-normal md:text-sm mt-[5px] md:mt-[20px] pt-2 mb-[5px] md:mb-[50px]">
              accept international payments from friends and acquaintances in
              your currency account.
            </p>
            <div className="flex text-base space-x-2 md:flex md:space-x-6 md:text-2xl float-left">
              <ion-icon name="logo-facebook" className="md:px-5"></ion-icon>
              <ion-icon name="logo-linkedin" className="md:px-5"></ion-icon>
              <ion-icon name="logo-youtube" className="md:px-5"></ion-icon>
              <ion-icon name="logo-instagram" className="md:px-5"></ion-icon>
            </div>
          </div>
          <div className="">
            <p className="py-2 max-w-[150] w-full text-left text-xl font-bold tracking-wide">
              Quick Link
            </p>
            <ul className="flex flex-col text-[15px] mt-2">
              <li className="font-light mb-1 md:mb-3">About Us</li>
              <li className="font-light mb-1 md:mb-3">Our Team</li>
              <li className="font-light mb-1 md:mb-3">Blog</li>
              <li className="font-light mb-1 md:mb-3">FAQ</li>
            </ul>
          </div>
          <div className="">
            <p className="py-2 max-w-[150] w-full text-left text-xl font-bold tracking-wide">
              Contact
            </p>
            <ul className="flex flex-col text-[15px] mt-2">
              <li className="font-light mb-3">info@riofinance.com</li>
              <li className="font-light mb-3">info@riofinance.com</li>
              <li className="font-light mb-3">2348020609090</li>
            </ul>
          </div>
          <div className="">
            <p className="py-2 max-w-[150] w-full text-left text-xl font-bold tracking-wide">
              Newsletter
            </p>
            <div className="font-light mb-3">Your email</div>
            <hr class="w-50 h-px mx-auto my-4 bg-white border-0"></hr>
            <button
              type="button"
              className="bg-gray-600 border rounded-md border-gray-600 text-white w-[150px] font-medium mx-auto md:mx-0 py-3"
            >
              Subscribe
            </button>
          </div>
        </div>
        <hr className="h-px mt-24 mb-5 bg-gray-400 border-0 ml-[-30px]"></hr>
        <p className="w-full mx-auto text-center text-xs font-medium tracking-normal">
          Copyright &copy; 2022 - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FaqContent;
