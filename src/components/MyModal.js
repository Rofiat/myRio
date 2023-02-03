import React from "react";

const MyModal = ({showModal, setShowModal}) => {
    return (
      <>
        {showModal ? (
          <>
            <div className="flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full mx-auto max-w-md md:h-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 rounded-t ">
                    <h3 className="text-xl px-2 font=semibold">Join Our Waitlist</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block py-0">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-2 flex-auto">
                    <form className="rounded px-5 pb-8 w-full">
                      <label className="block text-black text-sm mb-1">
                        First Name
                      </label>
                      <input className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-1 mb-5 text-black" placeholder="Type here" />
                      <label className="block text-black text-sm mb-1">
                        Last Name
                      </label>
                      <input className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-1 mb-5 text-black" placeholder="Type here" />
                      <label className="block text-black text-sm mb-1">
                        Email Address
                      </label>
                      <input className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-1 mb-5 text-black" placeholder="Type here" />
                    </form>
                  </div>
                  <button
                      className="text-white bg-[#1DB0A4] mx-7 mb-7 mt-[-25px] w-[300px] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                  </button>
                
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  };
  

export default MyModal;