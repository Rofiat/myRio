import React,{useState} from 'react'
import FaqHeader from '../faqs/header'
import FaqContent from '../faqs/content'

const Faqs = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-[#3B4DB9]">
        <div className="">
          <FaqHeader setModal={setShowModal} />
        </div>
        <div className="">
          <FaqContent showModal={showModal} setModal={setShowModal} />
        </div>
    </div>
  )
}

export default Faqs