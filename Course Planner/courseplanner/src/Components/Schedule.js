import React, { useState } from 'react'

const Schedule = () => {
    const [state, setstate] = useState(0);
    const handleCheck=()=>{
        if(state==0){
            setstate(1);
        }
        else{
            setstate(0);
        }
    }
    return (
        <div className='container d-sm-flex inputs'>
            <input placeholder='Course' type="text" className="form-control mx-1" />
            <input placeholder='Section' type="text" className="form-control mx-1" />
            <select className="form-select mx-1 text-center" aria-label="Default select example"  id="days1">
                     <option value="MW">MW</option>
                     <option value="ST">ST</option>
                     <option value="TR">TR</option>
                     <option value="SR">SR</option>
            </select>

            <select className="form-select text-center mx-1" aria-label="Default select example" id="time2">
                     <option value="1"> 8:30 - 10:00</option>
                     <option value="2">10:10 - 11:40</option>
                     <option value="3">11:50 - 1:20</option>
                     <option value="4">1:30 - 3:00</option>
                     <option value="5">3:10 - 4:40</option>
            </select>
            {/* Lab */}
            <div className="lab">
            <div type="checkbox" >
                     <input onClick={()=>handleCheck()} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                 </div>
                     <select className="form-select" aria-label="Disabled select example" disabled={state===0?true:false} id="l1">
                         <option selected>Day</option>
                         <option value="M">M</option>
                         <option value="W">W</option>
                         <option value="T">T</option>
                         <option value="R">R</option>
                         <option value="S">S</option>
                       </select>
                       <select  className="form-select" aria-label="Disabled select example" disabled={state===0?true:false}>
                         <option selected>Time</option>
                         <option value="1"> 8:00 - 10:00</option>
                         <option value="2"> 8:00 - 11:00</option>
                          <option value="3">10:10 - 12:10</option>
                         <option value="4">10:10 - 1:10</option>
                         <option value="5">1:30 - 3:30</option>
                          <option value="6">4:50 - 6:50</option>
                          <option value="7">4:50 - 7:50</option>
                       </select>


            </div>
        </div>
    )
}

export default Schedule
