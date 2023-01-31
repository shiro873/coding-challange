import './App.css';
import Multiselect from 'multiselect-react-dropdown';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const cachedData = [
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
]

function App() {
  const [service, setService] = useState();
  const [selectedService, setSelectedService] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [fullName, setFullName] = useState('');
  const [nameError, setNameError] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [agreedError, setAgreedError] = useState('');

  useEffect(() => {
    getSectorsData();
  }, []);

  const formatSectorsData = (sectors) => {
    let formattedSectors = [];
    sectors.map(sector => {
      sector?.sectorSubTypes?.map(subSector => {
        let groupData = {
          group: sector.name,
          sub: subSector.name
        };
        formattedSectors.push(groupData);
      });
    });
    setService(formattedSectors);
  }

  const getSectorsData = () => {
    axios.get('http://localhost:8080/api/v1/selector').then(response => {
      console.log(response);
      formatSectorsData(response.data);
    }).catch(error => {
      console.log(error);
      setService(cachedData);
    });
  }

  const saveData = (e) => {
    e.preventDefault();
    if(fullName === '') {
      setNameError('Please enter your name');
      return;
    }
    if(selectedService.length === 0) {
      setServiceError('please select service');
      return;
    }
    if(!agreed) {
      setAgreedError('please agree to our term and conditions');
      return;
    }
    makeApiCall();
  }

  const makeApiCall = (e) => {
    axios.post('http://localhost:8080/api/v1/user-data', {
      name: fullName,
      categories: selectedService,
      agreedToTerms: agreed
    }).then(response => {
      let userData = response.data;
      setFullName(userData.name);
      setAgreed(userData.agreedToTerms);
      setSelectedService(userData.categories);
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div className="bg-gradient-to-br from-gray-400 via-gray-100 to-gray-400">
      <div className='ml-32 py-36 pb-72'>
        <p className='text-3xl font-bold mb-5'>Update Profile</p>
        <p>Please enter "Your Name" and pick the "Sectors" you are currently involved in.</p>
        {/* Form */}
        <form>
          <div>
            <label>Name: </label>
            <input
              className='input input-bordered mt-5 w-64'
              type="text"
              name="name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setNameError('');
              }} />
          </div>
          <span style={{ color: "red" }}>{nameError}</span>
          <br />
          {/* Sectors */}
          <div className="mt-3 w-1/2">
            <label>Sector: </label>
            <Multiselect
              displayValue="sub"
              groupBy="group"
              onRemove={(items) => {
                console.log('remaining items ----->', items);
                setSelectedService(items);
              }}
              onSelect={(item) => {
                let items = selectedService;
                items.push(item);
                setSelectedService(items);
                setServiceError('');
              }}
              options={service}
              showCheckbox
            />
          </div>
          <span style={{ color: "red" }}>{serviceError}</span>
          <br />
          <div className="flex my-4">
            <input
              type="checkbox"
              className="checkbox checkbox-success mr-2"
              checked={agreed}
              onChange={() => {
                setAgreed(!agreed);
                setAgreedError('');
              }}
            />
            <span>Agree to terms</span>
          </div>
          <span style={{ color: "red" }}>{agreedError}</span>
          <br />
          <button
            className="btn btn-outline bg-gradient-to-r from-accent to-info text-white w-24"
            onClick={(e) => saveData(e)}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
