var express = require('express');
var app = express();

// global varibles and inserts
var cors = require('cors');
app.use(cors({"origin": "http://localhost:3000"}));

app.use(express.static('public'));

var logger = require('./public/logger.js');
app.use(logger);

var data = require("./public/data-1.js");


app.param('name', function (request, response, next){
    request.lowerName = request.params.name.toLowerCase();
    next();
});

        var classid=0;
        var teachers=[];
        var learners=[];
        var timesA = [];
        var classroom = [];
        var subject = [];
        var meetLink = [];

        

// var authenticator = require('./public/authenticator.js');
// app.use(authenticator);



/////////////////////////       end of variables      /////////////////////////

app.get('/', (req,res) => {
    res.send('<h1>Cloud Student</h1>');
});

app.get('/home', function(req,res){
res.redirect(301,'/');
});


// api data

//all classes
app.get('/api/classes', function(req, res){
    res.json(data.classes);
});

//details of spesific class
app.get('/api/class', function(req, res){

    var classParameter= +req.query.class;
    console.log(classParameter);

    if(classParameter !== ""){
        for(var i=0; i < data.classes.length; i++){
            if(data.classes[i].id === classParameter){
                classid = classParameter;
                console.log(classid)
            }
        };
    }else{
        res.status(404).json("Cannot find any classes with the id ");
    };

    for(var i=0;i<data.teachers.length;i++){
        var teacherClasses = data.teachers[i].classes;
    
        // console.log(teacherClasses);
    
        for(var j=0;j<teacherClasses.length;j++){
            // console.log(teacherClasses[j]);
    
            if(teacherClasses[j]===classid){
                var indexPoint=i;
                 teachers.push(data.teachers[indexPoint].name);
            }
        }
    
        };

        console.log(teachers);

        for(var i=0;i<data.learners.length;i++){
            var learnersClasses = data.learners[i].classes;
        
            for(var j=0;j<learnersClasses.length;j++){
        
                if(learnersClasses[j]===classid){
                    var indexPoint=i;
                     learners.push(data.learners[indexPoint].name);
            }
            }
            };
            console.log(learners);


            var slotNum= data.classes[classid-1].slot;
            //   console.log(slotNum);
        
            for(var i=0;i<data.slots.length;i++){
        
                if(data.slots[i].slot===slotNum){
                    timesA.push(data.slots[i].times);
                } 
        };
        console.log(timesA);
        

        var classroomNum= data.classes[classid-1].classroom;
        //console.log(classroomNum);
            classroom.push(classroomNum);
                 console.log(classroom);

        var subjectNum= data.classes[classid-1].subject;
            subject.push(subjectNum);
                 console.log(subject);

        var linkNum= data.classes[classid-1].link;
        meetLink.push(linkNum);
             console.log(meetLink);



             if(classParameter !== ""){
                for(var i=0; i < data.classes.length; i++){
                    if(data.classes[i].id === classParameter){
                        var concetenate=[data.classes[i], "Teacher :"+teachers, "Learner:" + learners, {timesA}, "Classroom:" + classroom, "Subject" + subject, "Google meet link" + meetLink];
                        res.json(concetenate);
                    }
                };
            }else{
                res.status(404).json("Cannot find any classes with the id ");
            };

    

});

// list of classes by one teacher

var teacherClasses = [];


app.get('/api/teacher/:name', function(req, res){
    var teacherid = null;

    for (var i=0;i<data.teachers.length; i++){
      
        
        if(data.teachers[i].name === req.params.name){

            teacherid = data.teachers[i].classes;
            for(var j=0; j < teacherid.length;j++){
                teacherClasses.push(data.classes[data.teachers[i].classes[j]-1]);
                
               
            };
            res.json(teacherClasses);
        };

    //    console.log(teacherClasses);
    };
    if(teacherid === null){
        res.status(404).json("No teacher with name:'" + req.params.name + "' found.")
    };

});


// list of classes taken by one learner

var learnerClasses = [];


app.get('/api/learners/:name', function(req, res){
    var learnerid = null;

    for (var i=0;i<data.learners.length; i++){
      
        
        if(data.learners[i].name === req.params.name){

            learnerid = data.learners[i].classes;
            for(var j=0; j < learnerid.length;j++){
                learnerClasses.push(data.classes[data.learners[i].classes[j]-1]);
                
               
            };
            res.json(learnerClasses);
        };

    //    console.log(teacherClasses);
    };
    if(learnerid === null){
        res.status(404).json("No student with name:'" + req.params.name + "' found.")
    };

});


//user id for valid email and password

app.get('/api/user/:email/:password', function(req, res){
    userid = null;

    for (var i=0;i<data.teachers.length; i++){
        
        if(data.teachers[i].email === req.params.email && data.teachers[i].password === req.params.password){
            userid = data.teachers[i].id;
            res.json("userid:" + userid);

    };
}; 
for (var i=0;i<data.learners.length; i++){
        
    if(data.learners[i].email === req.params.email && data.learners[i].password === req.params.password){
        userid = data.learners[i].id;
        res.json("userid:" + userid);

};

        if(userid === null){
        res.status(404).json("No user with pw and email:'" + req.params.email+ " and " +req.params.password + "' found.");
        };
    };



});









// app.get('/api/class', function(req, res){

//     if(req.query.limit >= 0){
//         res.json(data.classes.slice(0, req.query.limit));
//     }else{
//         res.json(data.classes);
//     };


// });



app.get('/api/slots', function(req, res){
    res.json(data.slots);
});

app.get('/api/teachers', function(req, res){
    res.json(data.teachers);
});

app.get('/api/learners', function(req, res){
    res.json(data.learners);
});






// app.get('/api/teachers/:name', function(req, res){

//     var teacher = null;
//     var lowerName = req.params.name.toLowerCase();
//     for(var i=0;i < data.teachers.length; i++){
//         if(data.teachers[i].name === lowerName){
//             teacher = data.teachers[i];
//             res.json(teacher);
//         };
//     };
//     if(teacher == null){
//         res.status(404).json("No teacher named '" + lowerName + "' found.");
//     };
// });

// app.get('/api/learners/:name', function(req, res){
//     var learner = null;
//     var lowerName = req.params.name.toLowerCase();
//     for(var i=0;i < data.learners.length; i++){
//         if(data.learners[i].name === lowerName){
//             learner = data.learners[i];
//             res.json(learner);
//         };
//     };
//     if(learner == null){
//         res.status(404).json("No teacher named '" + lowerName + "' found.");
//     };
// });


///////////////////////////////   end of api data   ///////////////////////////////////

app.get('/test', cors(), function(request, response, next) {
    response.json({msg: 'This is a CORS-enabled for a sing route'});
});

app.listen(8000, function() {
    console.log('listening on port 8000')
});