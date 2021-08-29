import React, {useState,useEffect} from 'react';

const TeacherPage = () => {

    
    const [data, setData]=useState([]);
    useEffect(()=>{
        var requestOptions={
            method:'GET',
        };

        async function getData(){
            const response=await fetch("http://localhost:8000/api/teachers/", requestOptions);
            const result = await response.json();
            setData(result);
            console.log(result)
        }
        getData();




    },[]);//use effect


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




    const[editClasses, SetEditClasses] = useState({});
    const onSubjectChange = event => {
        SetEditClasses({subject: event.target.value, group: editClasses.group, classroom: editClasses.classroom, slot: editClasses.slot, link: editClasses.link});
    }

    const onGroupChange = event => {
        SetEditClasses({subject:editClasses.subject , group: event.target.value, classroom: editClasses.classroom, slot: editClasses.slot, link: editClasses.link});
        }

    const onClassroomChange = event => {
        SetEditClasses({subject: editClasses.subject, group: editClasses.group, classroom: event.target.value, slot: editClasses.slot, link: editClasses.link});
        }
    
    const onLinkChange = event => {
        SetEditClasses({subject: editClasses.subject, group: editClasses.group, classroom: editClasses.classroom, slot: editClasses.slot, link: event.target.value});
        }




    

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    const Teacherid = urlParams.get('id')
    console.log(Teacherid);

    var undefinedData=[];
    var TeacherName=[];


    for(var j=0; j<data.length; j++){
        if(data!== undefined&&data!==null){
            TeacherName.push(data[j].name);
            console.log(TeacherName)
        }else{
            console.log("api not loaded");
        }
    }

    //update the complete of the tasks
    const handleUpdate=(event)=>{
        const url="http://localhost:8000/api/classes/"+Teacherid;
        const requestOptions={
          method:"PUT",
          headers : {'Content-Type':'application/json'},
          body : JSON.stringify(data)
        };
        fetch(url,requestOptions);
      };



    return(
        <div className = 'teacher_container'>


            <h1 className = 'classes'>Classes</h1>
            <div className = 'profile'>
                <div className = 'pfp'><img style={{borderRadius:'150px'}} src='https://picsum.photos/150/150'></img></div>
                <h1 className = 'name'>{TeacherName[Teacherid-1]}</h1>
                <h1 className = 'title'>Teacher</h1>
</div>

<div className = 'period_container_teacher'>

            <h1 className = 'id_h1_teacher'>ID</h1>
            <h1 className = 'slot_h1_teacher'>SLOT</h1>
            <h1 className = 'subject_h1_teacher'>SUBJECT</h1>
            <h1 className = 'group_h1_teacher'>GROUP</h1>
            <h1 className = 'classroom_h1_teacher'>CLASSROOM</h1>
            <h1 className = 'link_h1_teacher'>MEET LINK</h1>
           
            <div className ='line'></div>
            <div className='spacer'></div>
            {data.map((classList) => (
    <div className='singleClass_teacher'>
    <div className="labels1">{classList.id}</div>
     <div className="labels2_teacher">{classList.slot}</div>
     <div className="labels3_teacher"  >{classList.subject}</div>
     <div className="labels4_teacher" >{classList.group}</div>
     <div className="labels5_teacher" >{classList.classroom}</div>
     <div className="labels6_teacher" >{classList.link}</div>
     <div className='edit-btn' onClick={handleUpdate}>EDIT</div>
     <div className='delete-btn'>DELETE</div>


     </div>
        ))}
        <form onSubmit={handleUpdate} encType="application/x-www-form-urlencoded">
        <div style={{marginTop:'-290px'}} className='slot_container'>
        <div className='slot_edit'> Slot:</div>
        <input className='slot_edit_input' type='text'></input>
        </div>


        <div style={{marginTop:'-235px'}} className='slot_container'>
        <div className='subject_edit'>Subject:</div>
        <input  className='subject_edit_input' type='text'  onChange={onSubjectChange}></input>
        </div>
        <div style={{marginTop:'-180px'}} className='slot_container'>
        <div className='group_edit'>Group:</div>
        <input  className='group_edit_input' name='group' type='text'  onChange={onGroupChange}></input>
        </div>
        <div style={{marginTop:'-125px'}} className='slot_container'>
        <div className='classroom_edit'>Classroom:</div>
        <input  className='classroom_edit_input' name='classroom' type='text'  onChange={onClassroomChange}></input>
        </div>
        <div style={{marginTop:'-70px'}} className='slot_container'>
        <div className='link_edit'>Meet-Link:</div>
        <input  className='link_edit_input' type='text' name='link' onChange={onLinkChange}></input>
        </div>

        <div className='add_btn'>ADD</div>
        <div className='save_btn'>Save Changes</div>
        </form>
        </div>
        </div>


    );
};

export default TeacherPage