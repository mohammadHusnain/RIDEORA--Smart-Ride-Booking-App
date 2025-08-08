import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen '>

        <Link 
  to="/home" 
  className="fixed right-2 top-2 h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
  aria-label="Home"
>
  <i className="text-lg text-gray-700 ri-home-5-line"></i>
</Link>

<div className='h-1/2'>
    <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/62/df/ef/62dfefc5b636ec353ed1efb026491e52.jpg" alt="" />
</div>

<div className='h-1/2 p-2'>

<div className="flex gap-2 justify-between items-center flex-col">

<div className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm border border-gray-100">
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

<div className='w-full mt-3'>

  

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

<button className='w-full mt-2 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make A Payment</button>

</div>

    </div>
  )
}

export default Riding