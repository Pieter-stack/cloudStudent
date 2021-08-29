import React, {useState,useEffect} from 'react';
import ClassList from './ClassList';









const StudentPage = () => {
    
    const [data, setData]=useState([]);
    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };

        async function getData(){
            const response=await fetch("http://localhost:8000/api/learners/", requestOptions);
            const result = await response.json();
            setData(result);
            console.log(result)
        }
        getData();




    },[]);//use effect

    const [data2, setData2]=useState([]);
    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };

        async function getData2(){
            const response=await fetch("http://localhost:8000/api/slots", requestOptions);
            const result2 = await response.json();
            setData2(result2);
            console.log(result2)
        }
        getData2();




    },[]);//use effect

    





    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const Studentid = urlParams.get('id');

    console.log(Studentid);


    var undefinedData=[];
    var studentName=[];


    for(var j=0; j<data.length; j++){
        if(data!== undefined&&data!==null){
            studentName.push(data[j].name);
            console.log(studentName)
        }else{
            console.log("api not loaded");
        }
    }




    

    return(
        <div className = 'student_container'>
            <h1 className = 'classes'>Classes</h1>
            <div className = 'profile'>
                <div className = 'pfp'><img style={{borderRadius:'150px'}} src='https://picsum.photos/150/150'></img></div>
                <h1 className = 'name'>{studentName[Studentid-1]}</h1>
                <h1 className = 'title'>Student</h1>
            </div>

            <div className = 'slot_index'>
                <h1 style={{textAlign:'center'}}>Slot key</h1>
            {data2.map((slots, index) => (
                <div key={index}>
                <div className="lab1">Slot:{slots.slot}</div>
                <div className="lab2"><strong>Day: </strong>{slots.times[0].day}</div>
                <div className="lab3"><strong> Period: </strong>{slots.times[0].period}</div>
                <div className="lab2"><strong>Day: </strong>{slots.times[1].day}</div>
                <div className="lab3"><strong> Period: </strong>{slots.times[1].period}</div>
                <div className="lab2"><strong>Day: </strong>{slots.times[2].day}</div>
                <div className="lab3"><strong> Period: </strong>{slots.times[2].period}</div>
                <div className="lab2"><strong>Day: </strong>{slots.times[3].day}</div>
                <div className="lab3"><strong> Period: </strong>{slots.times[3].period}</div>
                <div className="lab2"><strong>Day: </strong>{slots.times[4].day}</div>
                <div className="lab3"><strong> Period: </strong>{slots.times[4].period}</div>
        
                </div>
         
         ))}

            </div>

<ClassList/>


        </div>



    );
};

export default StudentPage

