import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCotegory, getCotegoryById } from '../../api/home/home';

const Cotegory = () => {
  
  const cotegory = useSelector((store) => store.home.cotegory);
  const cotegoryById = useSelector((store) => store.home.cotegoryById);
  console.log(cotegoryById);
  const dispatch = useDispatch();

  const [id, setId] = useState(null);
  

  useEffect(() => {
    dispatch(getCotegory());
    dispatch(getCotegoryById(id));
  },[dispatch,id]);

  return (
    <div className='pt-[109px]'>
      <div className="container flex">
        <div className="w-[450px] relative pt-[10px] overflow-y-auto h-[75vh] bg-gray-100">
          {cotegory.map((e) => (
            <div key={e.id} className="text-[14px] font-[500] pt-[5px] pl-[10px]">
              <ul className='block pl-[180px]'>
                <li
                  onClick={() => setId(e.id)}
                  className='hover:bg-[white] hover:text-[#FFBE1F] rounded-md cursor-pointer px-[10px] py-[12px]'
                >
                  {e.categoryName}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="overflow-y-auto w-[885px] h-[75vh] p-5">
        <div className="grid grid-cols-3 w-[95%] m-auto gap-[50px]">
       {cotegoryById?.subCategories?.map((el) => (
          <div key={el?.id}>
            <h1 className=''>{el?.subCategoryName}</h1>
          </div>
        ))}
       </div>
        </div>
      </div>
    </div>
  );
};

export default Cotegory;