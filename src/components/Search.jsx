import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            non, temporibus in veniam voluptatibus quas molestiae nisi beatae
            distinctio? Reiciendis consequuntur quos deserunt! Corrupti
            perferendis dicta nesciunt minus, quia quaerat officia voluptates
            molestiae? Neque ab qui excepturi facilis eaque, expedita itaque
            repudiandae debitis similique reiciendis, ea totam natus illo vero
            quidem recusandae iste odit pariatur sapiente ullam eligendi! Dicta
            odio expedita saepe inventore, soluta ex at modi temporibus quia,
            assumenda quaerat rerum hic, tempore iure autem quasi! Dolores,
            consectetur neque autem porro non illo reprehenderit pariatur, nobis
            sed earum repellendus incidunt accusamus unde quia tenetur amet?
            Voluptatem qui odio obcaecati!
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center gap-2'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUDED COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center gap-2'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUDED COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='border text-center'>
          <p className='pt-2'>GET ADICIONAL 10% OFF</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldivas</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className='flex flex-col my-4'>
            <label>Check-In </label>
            <input className='border rounded-md p-2' type='date' />
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-Out </label>
            <input className='border rounded-md p-2' type='date' />
          </div>
          <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
