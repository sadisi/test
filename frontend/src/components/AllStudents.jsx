import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function AllStudents() {

const [students, setStudents] = useState([]);
    useEffect(() => {
        
        function getStudents() {
            axios.get("http://localhost:8070/student/").then((res) => {
                console.log(res.data);
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }

        getStudents();

    }, [])

    return (
        <div className='container mt-4'>
        <h1 className='mb-4'> Students Details</h1> <hr/>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
    
}
