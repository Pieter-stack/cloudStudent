import React, {useState,useEffect} from 'react';
import $ from 'jquery';




const ClassList = () => {
    const [data, setData]=useState([]);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const Studentid = urlParams.get('id');

    console.log(Studentid);

    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };
        
        async function getData(){
            const response=await fetch("http://localhost:8000/api/learners/id/"+ Studentid, requestOptions);
            const result = await response.json();
            setData(result);
            console.log(result)
        }
        getData();



    },[]);//use effect



    $('.chevron3').on('click', function(){
 
    $(this).parent('.singleClass').css("height", "90px");
      console.log("clicked");
      $(this).parent('.singleClass').children('.labels6').css("opacity","1");
        $('.chevron3').css("z-index", "2");
        $('.chevron4').css("z-index", "3");
        $(this).parent('.singleClass').children('.chevron1').css( "transform"," rotate(45deg)");
        $(this).parent('.singleClass').children('.chevron2').css( "transform"," rotate(-45deg)");

             
    });


    $('.chevron4').on('click', function(){
 
        $(this).parent('.singleClass').css("height", "30px");
           console.log("clicked");
           $(this).parent('.singleClass').children('.labels6').css("opacity","0");
            $('.chevron4').css("z-index", "2");
            $('.chevron3').css("z-index", "3");
            $(this).parent('.singleClass').children('.chevron1').css( "transform"," rotate(-45deg)");
            $(this).parent('.singleClass').children('.chevron2').css( "transform"," rotate(45deg)");
    
    
      
        });

    







    return(
        <div className = 'period_container'>
            
        <h1 className = 'id_h1'>ID</h1>
            <h1 className = 'slot_h1'>SLOT</h1>
            <h1 className = 'subject_h1'>SUBJECT</h1>
            <h1 className = 'group_h1'>GROUP</h1>
            <h1 className = 'classroom_h1'>CLASSROOM</h1>
           
            <div className ='line'></div>
            <div className='spacer'></div>
{data.map((classList) => (
    <div className='singleClass'>
    <div className="labels1">{classList.id}</div>
     <div className="labels2">{classList.slot}</div>
     <div className="labels3"  >{classList.subject}</div>
     <div className="labels4" >{classList.group}</div>
     <div className="labels5" >{classList.classroom}</div>
     <div className="labels6">Meet Link: <a href ={classList.link}>{classList.link} </a></div>
     <div className='chevron1'></div>
     <div className='chevron2'></div>
     <div className='chevron3'></div>
     <div className='chevron4'></div>

    </div>
         
         ))}

        </div>





    );


};

export default ClassList