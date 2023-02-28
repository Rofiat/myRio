import React,{useState} from 'react'
import HomeHeader from '../home/header'
import HomeContent from '../home/content'


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-black">
        <div className="">
          <HomeHeader setModal={setShowModal} />
        </div>
        <div className="">
          <HomeContent showModal={showModal} setModal={setShowModal} />
        </div>
    </div>
  )
}

export default Home