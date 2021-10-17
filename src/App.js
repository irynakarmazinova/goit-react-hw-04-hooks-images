import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

import './App.css';

export default function App() {
  const [searchImageName, setSearchImageName] = useState('');

  // const handleFormSubmit = searchImageName => {
  //   setSearchImageName(searchImageName);
  // };

  return (
    <div className="App">
      <ToastContainer />

      {/* в Searchbar передаю проп submit(имя пропса), куда я передаю ссылку на метод handleFormSubmit */}
      <Searchbar submit={setSearchImageName} />
      {/* <Searchbar submit={handleFormSubmit} /> */}

      <ImageGallery searchImageName={searchImageName} />
    </div>
  );
}

//PureComponent и shouldComponentUpdate

// --------------------
// API - bk

// const fn = a => {
//   return console.log(a);
// };
// fn('2');
// fn('a');
