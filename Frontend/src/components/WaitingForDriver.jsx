import React from 'react'

const WaitingForDriver = (props) => {
  return (
      <div>

        <h5 className='p-1 text-center absolute w-[93%] top-0' onClick={()=>{
  props.setConfirmRidePanel(false)
}}> <i className="text-3xl text-gray-500 ri-arrow-down-s-line"></i> </h5>


<div className="flex gap-2 justify-between items-center flex-col">

<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
  {/* Driver + Car Photos - Zero Spacing */}
  <div className="flex items-center gap-0">
    {/* Professional Male Driver Photo */}
    <img 
      className="h-12 w-12 object-cover rounded-full border-2 border-blue-500"
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80" 
      alt="Professional driver"
      width={48}
      height={48}
      loading="lazy"
    />
    
    {/* Uber Car Photo */}
    <img 
      className="h-10 w-16 object-cover rounded-sm -ml-1"
      src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" 
      alt="Uber vehicle"
      width={64}
      height={40}
      loading="lazy"
    />
  </div>

  {/* Driver Details - Far right aligned */}
  <div className="text-right flex-1 min-w-[120px] ml-4">
    <h2 className="text-lg font-medium text-gray-800 truncate">Ahmed Raza</h2>
    <h4 className="text-lg font-semibold text-gray-900">LHR 7860</h4>
    <p className="text-sm text-gray-600 truncate">Toyota Corolla 2020</p>
  </div>
</div>

<div className='w-full mt-5'>

    <div className='flex items-center gap-5 p-3 border-b-2'>
    <i className='ri-map-pin-user-fill'></i>
    <div>
        <h3 className='text-lg font-medium'>1-KM Defence Road</h3>
        <p className='text-sm -mt-1 text-gray-600'>COMSATS University (CUI), Lahore</p>
    </div>
</div>

<div className='flex items-center gap-5 p-3 border-b-2'>
    <i className='text-lg ri-map-pin-2-fill'></i>
    <div>
        <h3 className='text-lg font-medium'>DHA Phase 5</h3>
        <p className='text-sm -mt-1 text-gray-600'>Lahore University of Management Sciences (LUMS)</p>
    </div>
</div>

<div className='flex items-center gap-5 p-3 '>
    <i className='ri-currency-line'></i>
    <div>
        <h3 className='text-lg font-medium'>Rs 193.20</h3>
        <p className='text-sm -mt-1 text-gray-600'>Cash Payment</p>
    </div>
</div>

</div>


</div>
    </div>
  )
}

export default WaitingForDriver