import React,{useState} from 'react'
import AboutHeader from '../about/header'
import AboutContent from '../about/content'

const About = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-black">
        <div className="">
          <AboutHeader setModal={setShowModal} />
        </div>
        <div className="">
          <AboutContent showModal={showModal} setModal={setShowModal} />
        </div>
    </div>
  )
}

export default About