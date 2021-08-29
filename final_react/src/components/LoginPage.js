import lock from '../public/lock.svg';
import email from '../public/email.svg';
import {Link, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import $ from 'jquery';




    var teacherData=[];
    var learnersData=[];
    






const LoginPage = () => {

    const [data, setData] = useState({});
    const history = useHistory();



    useEffect(()=>{
        var requestOptions = {
        method: 'GET',
        };

        async function getData() {
        const response = await fetch('http://localhost:8000/api/users/', requestOptions);
        const result = await response.json();
        setData(result);
        
        };

        getData();


    }, []);


    // teacherData.slice(0, 5);
    // learnersData.slice(0, 5);
       
    teacherData.push(data.teachers); 
    learnersData.push(data.learners); 


    console.log(teacherData[2]);
    console.log(learnersData);





var user1 = null;



$(".student-btn").on("click", function(){
    $(this).addClass("active");
    $(".teacher-btn").removeClass("active");
    user1 = "student";

   });

   $(".teacher-btn").on("click", function(){
       $(this).addClass("active");
       $(".student-btn").removeClass("active");
       user1 = "teacher";
      });  
      
    






    const onEmailChange = event => {
        setData({email: event.target.value, password: data.password});
    };

    const onPasswordChange = event => {
        setData({email: data.email, password: event.target.value});        
    };





const onSubmit =(event) =>{
    event.preventDefault();

if(user1 === "student"){
    console.log("Student working");
    for(var i=0; i< learnersData[2].length; i++){
        if(document.getElementById('email').value ===learnersData[2][i].email && document.getElementById('password').value === learnersData[2][i].password ){
        //console.log(learnersData[2][i].id);
        var idStudent = learnersData[2][i].id;
        history.push("/student/?id="+ idStudent);
        }else{
            console.log("error");
            $(".student-btn").removeClass("active");
            user1 = null;
        }

    }
    
}else if(user1 === "teacher"){
    console.log("Teacher working");
    for(var i=0; i< teacherData[2].length; i++){
                 if(document.getElementById('email').value ===teacherData[2][i].email && document.getElementById('password').value === teacherData[2][i].password ){
        //console.log(teacherData[2][i].id);
        var idTeacher = teacherData[2][i].id;
        history.push("/teacher/?id=" + idTeacher );
        }else{
            console.log("error");
            $(".teacher-btn").removeClass("active");
            user1 = null;
        }
    }
}


// teacherData[0][0].email

    


    // 

};


    return(
        <div className = 'login_container'>
            <h1 className = 'Welcome_h1'> Welcome</h1>
            <input onChange={onEmailChange} className = 'email_input' id='email' placeholder = 'Email' ></input>
            <input onChange={onPasswordChange}  className = 'password_input'id='password' placeholder = 'Password' ></input>
            <img className='lock' src ={lock}></img>
            <img className='email_img' src ={email}></img>
            <h1 className = 'forgot'>Forgot Your Password?</h1>
            <div className="student-btn ">Student</div>
            <div  className="teacher-btn">Teacher</div>

            <button onClick={onSubmit} type='submit' className = 'login_btn'>LOGIN</button>
            <h1 className = 'new_user'>New User? Sign Up now!</h1>
            

        </div>

    );


};





export default LoginPage