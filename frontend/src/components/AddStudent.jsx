import React, {useState} from 'react'
import axios from 'axios'

export default function AddStudent() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e){
    e.preventDefault();
     
    const newStudent = {
        name,
        age,
        gender
    }

    axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
        alert("Student Added")
        //when student add successfully reload the page
        window.location.reload()
    }).catch((err)=>{alert(err)})

  }


  return (
    <div className="container " style={{maxWidth:500, alignItems:'center', marginTop:50} }>
      
      <form>
  <div class="mb-3 mt-0">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="nameInput" aria-describedby="namelHelp" placeholder="Enter Student Name" 
    onChange={(e)=>{
        setName(e.target.value)
    }} />
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="text" class="form-control" id="ageInput" aria-describedby="ageHelp" placeholder="Enter Student Age"
     onChange={(e)=>{
        setAge(e.target.value)
    }}/>
  </div>
  <div class="mb-3">
    <label for="gender" class="form-label">Gender</label>
    <input type="text" class="form-control" id="genderInput" aria-describedby="genderHelp" placeholder="Enter Student Gender"
     onChange={(e)=>{
        setGender(e.target.value)
    }}/>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={sendData} >Add Student</button>

</form>

    </div>
  )
}
