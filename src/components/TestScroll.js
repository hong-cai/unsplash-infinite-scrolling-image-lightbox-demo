import React,{useState} from 'react';
import TestSearch from './TestSearch';

const TestScroll = () => {
const [query,setQuery]=useState("");
const [pageNum, setPageNum]=useState(1);
const [images,setImages]=useState([]);
    TestSearch(query,pageNum,10,images,setImages);
    const handleSearch=(e)=>{
        setQuery(e.target.value);
        setPageNum(1);
    }
    return (
        <div>
            <input type="text" onChange={handleSearch} />
            {/* <div>{images.id}</div>
            <div>{images.id}</div>
            <div>{images.id}</div>
            <div>{images.id}</div> */}
            <div>Loading...</div>
            <div>Error</div>
        </div>
    )
}

export default TestScroll;