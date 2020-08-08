import React,{useState} from 'react';
import './todaygames.css';
import Todaygamecard from '../todaygamecard/todaygamecard';
import Carousel from 'react-bootstrap/Carousel'

export default function Todaygames(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return(
        <>
        <div className="scrolling-wrapper ">
            <Todaygamecard/>
            <Todaygamecard/>
            <Todaygamecard/>
            <Todaygamecard/>
            <Todaygamecard/>
        </div>
        </>

    )
}