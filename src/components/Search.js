import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

function Search() {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            debitis?
          </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi
            et atque nobis, ut cumque deleniti distinctio placeat harum debitis
            tempora inventore quos dolor sit quidem consequuntur obcaecati ab
            corporis id quam fugit incidunt assumenda nostrum. Harum molestiae,
            distinctio corporis magnam nostrum suscipit possimus quo vel alias
            magni aspernatur earum quos minus nesciunt ea maxime tempore in
            quis! Voluptate sed debitis alias, blanditiis magni odit cumque
            dignissimos nisi voluptatem rerum distinctio, obcaecati nostrum
            minima facere. Harum officiis quisquam autem quasi, cupiditate alias
            saepe tenetur eos quo magni atque et odit? Quasi molestias dicta
            consectetur asperiores, error omnis? Obcaecati, eius facilis.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>

            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">INCLLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>

            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">INCLLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-IN</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
