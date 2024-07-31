const router = require("express").Router();
let Student = require("../models/Student");

//Added Data to database
//getting request deatils from body and add that details to aour declared varibles
router.route("/add").post((req, res) => {
  //body details added to the declared varibles
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  //create object called "Student" using above mention student model
  const newStudent = new Student({
    name,
    age,
    gender,
  });

  //save to the data base and error handeling
  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//see added student details from frontend
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

//use asix await with easy way "T strcture method"
//Update student data
router.route("/update/:id").put(async (req, res) => {
  //get id from requet data url link
  let userId = req.params.id;
  //used t structure method for get age,name,gender details at one single line
  const { name, age, gender } = req.body;

  //update object
  const updateStudent = {
    name,
    age,
    gender,
  };

  //check weather that provided user id is availble or not
  const update = await Student.findByIdAndUpdate(userId, updateStudent).then(
    () => {
        //if user updated sending that to frontend code 200 is error code number (200 is a unic number)
      res.status(200).send({ status: "User updated" });
    } ).catch((err) => {
        console.log(err);
    //if user not updated sending that eror to frontend code 500 is error code number (500 is a unic error number)
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
});



//delete student

router.route("/delete/:id").delete(async(req,res) =>{
    //geting userid form frontend
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "user deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})


//find a student

router.route("/get/:id").get(async(req, res) => {
 //geting userId form frontend
 let userId = req.params.id;

 const user = await Student.findById(userId).then((student)=>{
    res.status(200).send({status:"User fetched" ,student})
 }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"error with get user", error: err.message});
 })
})

module.exports = router;
