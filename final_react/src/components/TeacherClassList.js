import React, {useState,useEffect} from 'react';





const ClassList = () => {
    const [data, setData]=useState([]);
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    const Teacherid = urlParams.get('id')
    console.log(Teacherid);

    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };
        
        async function getData(){
            const response=await fetch("http://localhost:8000/api/teacher/id/"+ Teacherid, requestOptions);
            const result = await response.json();
            setData(result);
            console.log(result)
        }
        getData();



    },[]);//use effect


    return(
        <div>
            {data.map((classList) => (
    <div className='singleClass_teacher'>
    <div className="labels1">{classList.id}</div>
     <div className="labels2_teacher">{classList.slot}</div>
     <div className="labels3_teacher"  >{classList.subject}</div>
     <div className="labels4_teacher" >{classList.group}</div>
     <div className="labels5_teacher" >{classList.classroom}</div>
     <div className="labels6_teacher" >{classList.link}</div>
     <div className='edit-btn' >EDIT</div>
     <div className='delete-btn'>DELETE</div>


     </div>
        ))}


</div>


    );


};

export default ClassList