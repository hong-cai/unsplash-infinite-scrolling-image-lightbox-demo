import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function TestSearch(query,pageNum,oneCount,images,setImages) {
useEffect(()=>{
    const urlBase = "https://api.unsplash.com";
        const string = query.replace(/\s/g, '-').toLowerCase();
        const accessKey = "5OUK6ToN68rS7YXWjPhBhvqeo_Tf5qP5Pe-mANWZs_c";
        // setIsloading(true);
        // setError(false);
        let cancel;
        axios({
            method:'GET',
            url:`${urlBase}/search/photos?query=${string}&page=${pageNum}&client_id=${accessKey}&count=${oneCount}`,
            params:{query:string,page:pageNum,client_id:accessKey,count:oneCount},
            cancelToken: new axios.CancelToken(c=>cancel=c)
        })
        .then(res =>{setImages([...images,...res.data.results]);
                    // setIsloading(false);
                })
        .catch(e=>{
            if(axios.isCancel(e)) return;
            // setError(true);
        })
        // return ()=>cancel();

},[query,pageNum])
}
