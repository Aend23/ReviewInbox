import React, { useEffect, useState, useRef } from 'react';
import Review from './components/Review';
import LeftSiderBar from './components/LeftSideBar';
import ContentCard from './components/ContentCard';
import Availabel from "./components/Availabel";
import Slide from './components/Slide';

export default function App() {
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const contentCardRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentCardRef.current && !contentCardRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleView = (obj, id) => {
    setBody(obj);
    setId(id);
    setShow(true);
  };

  const handleDelete = () => {
    // Implement your delete logic here
  };

  return (
    <div className='p-10' id='close'>
      <Review />
      <LeftSiderBar handleView={handleView} handleDelete={handleDelete} />
      {show ? (
        <div ref={contentCardRef} className=''>
    <Slide body={body}id={id}/>
       </div>
      ) : null}

    </div>

  );
}
