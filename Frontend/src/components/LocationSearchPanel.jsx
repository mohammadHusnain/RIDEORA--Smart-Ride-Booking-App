import React from 'react'

const LocationSearchPanel = (props) => {
// console.log(props);


 // sample array for location
const locations = [
  "COMSATS University, Defence Road, Off Raiwind Road, Lahore",
  "Gulberg III, Near Liberty Market, Lahore",
  "Johar Town, Near Expo Center, Lahore",
  "Model Town, Near Link Road, Lahore"
]

return (
  <div>
    {/* this is just a sample data */}
    {locations.map(function(elem , idx) {
      return (
        <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
        }}
         className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
            
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      )
    })}
  </div>
)
}

export default LocationSearchPanel