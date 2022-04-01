import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search, { checkValidity } from './Components/Search';
import Error from './Components/Error';
import { STUDENTS } from './studentList';


function App() {

  const [error, setError]=useState('')

    const [input, setInput]=  useState('')
    
    const [input2, setInput2]=useState(Date)

    
const [card, setCard]=useState([])


    
    
    const currentStudent = STUDENTS.filter((student) => student.name.toLowerCase() === input.toLowerCase());
    
    const handleClick=()=>{

      if (input2==='') {
        setError("please fill calendar")
      }

      if (''==STUDENTS.filter((student) => student.name.toLowerCase() === input.toLowerCase())) {
        setError(`there is no student name:${input}`)

        setInput('')
         setInput2('')
       }


      if ('' !== input && ''!== input2 && checkValidity(input2,currentStudent[0].validityDate) ===true ){
       
      // arr1.push(STUDENTS.filter((student) => student.name.toLowerCase() === input.toLowerCase()))
      
        setCard([...card,input])


        console.log([...card])
      console.log(input)

     } 
     if ('' !== input && ''!== input2 && checkValidity(input2,currentStudent[0].validityDate) ===false) {
       setError(`${input} is unvalidity`)
     }

     console.log(checkValidity(input2,currentStudent[0].validityDate))

    //  console.log(input2,currentStudent.map((student)=>student.validityDate))
     setInput('')
     setInput2('')
     console.log(input, input2)
     }


     

     

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search input={input} input2={input2} setInput={setInput} setInput2={setInput2} handleClick={handleClick} currentStudent={currentStudent}/>
          <Error error={error} setError={setError}/>
        <ResidentsList  card={card}/>
      </div>
    </div>
  );
  }
export default App;
