import React , {useState , useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'



const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [ panelOpen, setPanelOpen ] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)


  const [ vehiclePanel, setVehiclePanel ] = useState(false)
  const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
  const [ vehicleFound, setVehicleFound ] = useState(false)
  const [ waitingForDriver, setWaitingForDriver ] = useState(false)



  const submitHandler = (e) => {
    e.preventDefault()
  }

 useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding:'24px',
               opacity:1
            })

            gsap.to(panelCloseRef.current,{
              opacity:1,
            })
            
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding:'0',
              opacity:0
            })

               gsap.to(panelCloseRef.current,{
              opacity:0,
            })

          }
        },[panelOpen])


        useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel ])


       useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])


     useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])


    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehicleFound ])

       useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])
           

  return (
    <div className='h-screen position-relative overflow-hidden' >
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        {/* image for temporary use  */}
        <img className='h-full w-full object-full' src="https://i.pinimg.com/736x/62/df/ef/62dfefc5b636ec353ed1efb026491e52.jpg" alt="" />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">

        <div className='h-[30%] p-5 bg-white relative'>

          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute top-6 opacity-0 right-6 text-2xl'><i className="ri-arrow-down-s-line"></i></h5>

          <h4 className='text-2xl font-semibold'>Find A Trip</h4>

          <form onSubmit={(e) => { submitHandler(e) }} >

            <div className="line absolute h-16 bg-gray-900 rounded-full w-1 top-[45%] left-9"></div>
            <input 
            onClick={() => {
                                setPanelOpen(true)
                            }}
            className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5' 
            type="text"
             placeholder='Add A Pickup Location' 
             value={pickup}
             onChange={(e) => { setPickup(e.target.value) }}
             />

            <input
             onClick={() => {  setPanelOpen(true) }}
             className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3'
             type="text"
              placeholder='Enter Your Destination' 
              value={destination}
              onChange={(e) => { setDestination(e.target.value) }}
              />

          </form>
        </div>

        <div ref={panelRef} className=' bg-white  h-0 '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>

      </div>


     <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>

<VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>

</div>

  <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>

<ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>

</div>

 <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
<LookingForDriver setVehicleFound={setVehicleFound}/>
</div>

 <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
<WaitingForDriver waitingForDriver={waitingForDriver} />
</div>
      

    </div>
  )
}

export default Home


 