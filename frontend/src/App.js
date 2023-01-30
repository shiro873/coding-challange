import './App.css';
import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from "react";

function App() {
  const [service, setService] = useState([
    {
      group: 'Manufacturing',
      sub: 'Construction materials'
    },
    {
      group: 'Manufacturing',
      sub: 'Electronics and Optics'
    },
    {
      group: 'Manufacturing',
      sub: 'Food and Beverage'
    },
    {
      group: 'Manufacturing',
      sub: 'Furniture'
    },
    {
      group: 'Manufacturing',
      sub: 'Machinery'
    },
    {
      group: 'Manufacturing',
      sub: 'Metalworking'
    },
    {
      group: 'Manufacturing',
      sub: 'Plastic and Rubber'
    },
    {
      group: 'Manufacturing',
      sub: 'Printing'
    },
    {
      group: 'Manufacturing',
      sub: 'Textile and Clothing'
    },
    {
      group: 'Manufacturing',
      sub: 'Wood'
    },
    {
      group: 'Other',
      sub: 'Creative industries'
    },
    {
      group: 'Other',
      sub: 'Energy technology'
    },
    {
      group: 'Other',
      sub: 'Environment'
    },
    {
      group: 'Service',
      sub: 'Business services'
    },
    {
      group: 'Service',
      sub: 'Engineering'
    },
    {
      group: 'Service',
      sub: 'Information Technology and Telecommunications'
    },
    {
      group: 'Service',
      sub: 'Tourism'
    },
    {
      group: 'Service',
      sub: 'Translation services'
    },
    {
      group: 'Service',
      sub: 'Transport and Logistics'
    }
  ]);


  return (
    <div className="bg-gradient-to-br from-gray-400 via-gray-100 to-gray-400">
      <div className='ml-32 py-36 pb-72'>
        <p className='text-3xl font-bold mb-5'>Update Profile</p>
        <p>Please enter "Your Name" and pick the "Sectors" you are currently involved in.</p>
        {/* Form */}
        <form>
          <div>
            <label>Name: </label>
            <input className='input input-bordered mt-5 w-64' type="text" name="name" />
          </div>
          {/* Sectors */}
          <div className="mt-3 w-1/2">
            <label>Sector: </label>
            <Multiselect
              displayValue="sub"
              groupBy="group"
              onKeyPressFn={function noRefCheck() { }}
              onRemove={function noRefCheck() { }}
              onSearch={function noRefCheck() { }}
              onSelect={function noRefCheck() { }}
              options={service}
              showCheckbox
            />
          </div>
          <div className="flex my-4">
            <input type="checkbox" className="checkbox checkbox-success mr-2" />
            <span>Agree to terms</span>
          </div>
          <button className="btn btn-outline bg-gradient-to-r from-accent to-info text-white w-24">Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
