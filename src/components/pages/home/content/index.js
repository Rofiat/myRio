import React from 'react'
import globe from '../../../images/globe.png'
import frame from '../../../images/frame.png'
import grp1 from '../../../images/grp1.png'
import grp2 from '../../../images/grp2.png'
import grp4 from '../../../images/grp4.png'
import grp5 from '../../../images/grp5.png'
import Rectangle from '../../../images/Rectangle.png'
import logob from '../../../images/logob.png'
import MyModal from '../../../MyModal'


const HomeContent = ({showModal, setModal}) => {
  return (
  <div className='font-[Outfit]'>
    {/* First Rectangle */}

    <div className='w-full bg-black py-20 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center font-[Outfit]'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>Move money with love across borders.</h1>
          <p className="text-white">
            You can manage your funds, make business payments, receive money in different currencies with just one app, Rio.
          </p>
          <button onClick={() => setModal(true)} className='bg-black border border-slate-300 shadow-md shadow-[#1DB0A4] text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join Waitlist</button>
        </div>
        <img className='w-full mx-auto my-4 bg-[map]' src={frame} alt='/world globe' />
      </div>
    </div>

    {/* Second Rectangle */}

    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center font-[Outfit]'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Send Money In 7+ Currencies to 100+ countries without Stress</h1>
          <p>
            Your international money, transaction is made easy with Rio. You can easily send USD, EUR, GBP, etc to business partners, vendors, families and friends without hidden charges.
          </p>
          <button onClick={() => setModal(true)} className='bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join Waitlist</button>
        </div>
        <img className='w-[500px] mx-auto my-4' src={globe} alt='/world globe' />
      </div>
    </div>
    <div>
    </div>
    {/* Third Rectangle */}

    <div className='w-full bg-[#F4F8FC] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={grp1} alt='/circle of cards' />
        <div className='flex flex-col justify-center font-[Outfit]'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Get a Physical Naira card for your offline spending.</h1>
          <p>
            With the naira card, you can conveniently withdraw any amount across Nigeria.
          </p>
          <button onClick={() => setModal(true)} className='bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join Waitlist</button>
        </div>
        
      </div>
    </div>

     {/* Fourth Rectangle */}

     <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center font-[Outfit]'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Obtain secured online cards for all transactions.</h1>
          <p>
            Seamlessly meet all your International needs payment with our dynamic virtual cards that are totally secured.
          </p>
          <button onClick={() => setModal(true)} className='bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join Waitlist</button>
        </div>
        <img className='w-[500px] mx-auto my-4' src={grp2} alt='/ellipse' />
      </div>
    </div>
    
    {/* Fifth Rectangle */}
    <div className='bg-black py-20 px-4 text-white'>
      <div className='max-w-[600px] w-full mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>
          Create Accounts In Different Currencies
        </h1>
      </div>
      <div className='flex justify-center max-w-[300px] mx-auto text-center text-sm items-center pt-2 mb-20'>
          <p className='py-5'>
            In just a few click, create USD, NGN, EUR and many more accounts to send money internationally.
          </p>
      </div>
      {/*<p className='md:text-xl text-lg py-10'></p>*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pl-10">
        <div className="flex flex-col">
          <h4 className="py-2 max-w-[150] w-full text-left font-bold">Accept International Payments</h4>
          <p className="flex max-w-[220px] text-left text-sm pt-2 mb-20">Accept International Payments from friends and acquaintances in your currency account.</p>
        </div>
        <div className="">
          <h4 className="py-2 max-w-[150] w-full text-left font-bold">No hidden charges</h4>
          <p className="flex max-w-[220px] text-left text-sm pt-2 mb-20">There are no hidden charges with the Rio. So, USD, EUR, NGN and other currency account opening is easy and free.</p>
        </div>
        <div className="flex flex-col">
          <h4 className="py-2 max-w-[150] w-full text-left font-bold">Low & Competitive rate</h4>
          <p className="flex max-w-[220px] text-left text-sm pt-2 mb-20">We offer the best charges on all transactions. Every NGN transaction has a flat rate of #10. And International charges are super low.</p>
        </div>
        <div className="">
          <h4 className="py-2 max-w-[150] w-full text-left font-bold">Totally Secured Transactions</h4>
          <p className="flex max-w-[220px] text-left text-sm pt-2 mb-20">Enjoy safe banking across borders with Rio. All transactions are totally secured.</p>
        </div>
      </div>
    </div>

    {/* Sixth Rectangle */}

    <div className='w-full bg-[#F4F8FC] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center font-[Outfit]'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Obtain secured online cards for all transactions.</h1>
          <p>
            Seamlessly meet all your International needs payment with our dynamic virtual cards that are totally secured.
          </p>
          <button onClick={() => setModal(true)} className='bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join Waitlist</button>
        </div>
        <img className='w-[500px] mx-auto my-4' src={grp4} alt='/ellipse' />
      </div>
    </div>

     {/* Seventh Rectangle */}

     <div className='w-full bg-white py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-[-100px] my-4' src={grp5} alt='/circle of cards' />
        <div className='flex flex-col justify-center font-[Outfit]'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Get a Physical Naira card for your offline spending.</h1>
          <p>
            With the naira card, you can conveniently withdraw any amount across Nigeria.
          </p>
          <button onClick={() => setModal(true)} className='bg-[#1DB0A4] border border-[#1DB0A4] shadow-md shadow-black text-white w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join Waitlist</button>
        </div>
        
      </div>
      <div className='w-full py-16 mx-100'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 rounded-[50px] bg-black'>
        <div className='flex flex-col justify-center font-[Outfit] text-white px-20 py-20'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Be the first to know when we launch. Join the VIPs!</h1>
          <p className='text-sm'>Don't miss the limited launch offer for the first accounts to be opened. Be on the list of the VIPs.</p>
          <button className='bg-white border border-slate-300 shadow-md shadow-[#1DB0A4] text-black w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join the VIPs</button>
        </div>
        <img className='' src={Rectangle} alt='/ellipse' />
      </div>
    </div>
    </div>
    {/* Last session */}
    <div className='bg-white text-black'>
      <div className='max-w-[600px] w-full mx-auto items-center flex flex-col justify-center'>
        <img className='w-[100px]' src={logob} alt="rio logo" />
      </div>
      <div>
        <p className='text-base mt-5 flex justify-center max-w-[500px] mx-auto text-center md:text-xl items-center pt-2 py-5'>   
          Rio is on a mission to make international transactions truly borderless and stress-free for everyone.
        </p>
      </div>
      <div className='mx-auto md:flex grid md:grid-cols-3 items-center justify-center text-black font-bold'>
        <button className='bg-white border border-[#F4F8FC] bg-[#F4F8FC] rounded-full text-black w-[150px] font-medium my-6 mx-auto md:mx-3 py-3'>About Us</button>
        <button className='bg-white border border-[#F4F8FC] bg-[#F4F8FC] rounded-full text-black w-[150px] font-medium my-6 mx-auto md:mx-3 py-3'>Contact Us</button>
        <button className='bg-white border border-[#F4F8FC] bg-[#F4F8FC] rounded-full text-black w-[150px] font-medium my-6 mx-auto md:mx-3 py-3'>Faqs</button>
      </div>
      <div className='mx-auto flex space-x-2 md:mx-auto md:flex md:space-x-6 text-2xl items-center justify-center'>
        <ion-icon name="logo-facebook" className='md:px-5'></ion-icon>
        <ion-icon name="logo-twitter" className='md:px-5'></ion-icon>
        <ion-icon name="logo-linkedin" className='md:px-5'></ion-icon>
        <ion-icon name="logo-instagram" className='md:px-5'></ion-icon>
      </div>
    </div>

{/* Modal */}
<MyModal 
  setShowModal={setModal}
  showModal={showModal}
/>
  </div>
  )
}

export default HomeContent