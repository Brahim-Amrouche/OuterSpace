import { waitFor } from '@testing-library/react';
import React ,{useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid'
import holder from '../sources/holder.jpg';
import Holder2 from '../sources/Holder2.jpg';
import Holder3 from '../sources/Holder3.jpg';



function Display_exemple() {
    const [images,setImages]=useState([holder,Holder2,Holder3,holder]);
    const [page , setPage]=useState(1);
    
    const pages= Math.ceil(images.length/3);
    
    useEffect(()=>{
        setDiplayed(imagesToShow(page))
    },[page])
    
    const numbers=()=>{
        let x=[]
        let n=0
        while(n<pages){
            n++;
            x.push(n)
        }
        
        return x;
    };
    
   
    
    const handlePageNext=()=>{
        setPage(()=>{
            const p= page<pages ? page+1:page
            return p
        });
        
        
    }
    
    const handlePagePrev=()=>{
        setPage(()=>{
            const p= page>1 ? page-1:page;
            return p

        });
        
        
    }

    let i=0;
    let count=0;
    
    const imagesToShow=(page)=>{
        count=(page*3)-3
        return images.filter((imag)=>{
            if(i<3 && imag==images[count] && count < images.length){
                
                count++
                i++
                return true
            }else{
                i=0;
                
                return false
            }
        })
    }
    const [displayed, setDiplayed]=useState(imagesToShow(page));
    
    
    const handlePage=(page)=>{
        setPage(page);
    }

    return (
        <div className="display">
          <div id="page-control">
          <button className="page-buttons left" onClick={handlePagePrev}>Prev </button>
          {
            numbers().map((x)=>{
                return <button id="page-number" onClick={handlePage.bind(this,x)} key={uuid()}>{x}</button>
            })
          }
          
          <button className="page-buttons right" onClick={handlePageNext}>Next</button>
          </div>
          
          <ul id="img-list">
          {
            displayed.map((imag)=>{
                
                return <img  id="images" key={uuid()} src={imag}/>
            })
        
          }
          </ul>
          
        </div>
    )
}

export default Display_exemple
