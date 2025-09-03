import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext); // ✅ Correct variable name

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          <img
            className='h-16 w-14 rounded-full object-fill'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXvnSXDcpSMlvRpO24jHPFibg7Utchd9I2w&s"
            alt="captain"
          />
          <h4 className='text-lg font-medium'>
           {captain.fullname.firstname + " " + captain.fullname.lastname} {/* ✅ Safe access */}
          </h4>
        </div>

        <div>
          <h4 className='text-xl font-semibold'>Rs 5000</h4>
          <p className='text-sm text-gray-600'>Earned</p>
        </div>
      </div>

      <div className='flex p-5 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
