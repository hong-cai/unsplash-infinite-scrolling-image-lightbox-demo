import React, {createContext,useState} from 'react';
const ImageContext=createContext([{},()=>{}]);
const ImageProvider=(props)=>{
    const [state,setState]=useState({});
return(
    <ImageContext.Provider value={[state,setState]}>
        {props.children}
    </ImageContext.Provider>
)
}
export {ImageContext,ImageProvider};