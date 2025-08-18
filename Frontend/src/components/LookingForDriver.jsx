import React from 'react'

const LookingForDriver = (props) => {
  return (
      <div>

        <h5 className='p-1 text-center absolute w-[93%] top-0' onClick={()=>{
  props.setVehicleFound(false)
}}> <i className="text-3xl text-gray-500 ri-arrow-down-s-line"></i> </h5>

<h3 className='text-2xl font-semibold mb-5'>Looking For A Driver</h3>

<div className="flex gap-2 justify-between items-center flex-col">

<img className='h-20 ' src="data:image/jpeg;base64,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
" alt="" />

<div className='w-full mt-5'>

    <div className='flex items-center gap-5 p-3 border-b-2'>
    <i className='ri-map-pin-user-fill'></i>
    <div>
        <h3 className='text-lg font-medium'>1-KM Defence Road</h3>
        <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
    </div>
</div>

<div className='flex items-center gap-5 p-3 border-b-2'>
    <i className='text-lg ri-map-pin-2-fill'></i>
    <div>
        <h3 className='text-lg font-medium'>DHA Phase 5</h3>
        <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
    </div>
</div>

<div className='flex items-center gap-5 p-3 '>
    <i className='ri-currency-line'></i>
    <div>
        <h3 className='text-lg font-medium'>Rs {props.fare [props.vehicleType] }</h3>
        <p className='text-sm -mt-1 text-gray-600'>Cash Payment</p>
    </div>
</div>

</div>


</div>
    </div>
  )
}

export default LookingForDriver