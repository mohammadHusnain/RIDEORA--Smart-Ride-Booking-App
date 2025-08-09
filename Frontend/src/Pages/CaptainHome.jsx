import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopup'

const CaptainHome = () => {

  const [ ridePopupPanel, setRidePopupPanel ] = useState(true)
      const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false)


    const ridePopupPanelRef = useRef(null)
        const confirmRidePopupPanelRef = useRef(null)




     useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ridePopupPanel ])

    useGSAP(function () {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePopupPanel ])



  return (
      <div className='h-screen '>
    
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

              <Link 
      to="/captain-home" 
      className="  h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
      aria-label="Home"
    >
<i className="ri-logout-box-r-line"></i>
    </Link>

        </div>
    
    <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/62/df/ef/62dfefc5b636ec353ed1efb026491e52.jpg" alt="" />
    </div>
    
    <div className='h-2/5 p-2'>
    <CaptainDetails/>
    </div>

    <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
                <RidePopUp
                    // ride={ride}
                    setRidePopupPanel={setRidePopupPanel}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                    // confirmRide={confirmRide}
                />
            </div>

             <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <ConfirmRidePopUp
                    // ride={ride}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>
    
        </div>
  )
}

export default CaptainHome