import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Modal from '../UI/Modal'
import { Button } from '@material-ui/core';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/actions';


const validateName = name =>  /^[ A-z ]+$/.test(name);

const validateEmail = email =>  /\S+@\S+\.\S+/.test(email);

const validatePhone = phone =>  /^[6-9]\d{9}$/.test(phone);


const AddUser = (props) => {

  // accessing store data and dispatching actions 

  const dispatch = useDispatch();
  const colleges = useSelector(state => state.app.colleges)

  // Reactive Validation and state management name input

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false)
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(null)

  const nameInputHandler = e => {
    const name = e.target.value;
    setEnteredName(name)
    setEnteredNameWasTouched(true)
    if(validateName(name) && name.length > 2 && name.length < 31){
      setEnteredNameIsValid(true)
    }else{
      setEnteredNameIsValid(false)
    }
  }

  // Reactive Validation and state management email input

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailWasTouched, setEnteredEmailWasTouched] = useState(false)
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(null)

  const emailInputHandler = e => {
    const email = e.target.value.trim();
    setEnteredEmail(email)
    setEnteredEmailWasTouched(true)
    if(validateEmail(email)){
      setEnteredEmailIsValid(true)
    }else{
      setEnteredEmailIsValid(false)
    }
  }

    // Reactive Validation and state management phone input

  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredPhoneWasTouched, setEnteredPhoneWasTouched] = useState(false)
  const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(null)

  const phoneInputHandler = e => {
    const phone = e.target.value.trim();
    setEnteredPhone(phone)
    setEnteredPhoneWasTouched(true)
    if(validatePhone(phone)){
      setEnteredPhoneIsValid(true)
    }else{
      setEnteredPhoneIsValid(false)
    }
  }

  // Using useRef hooks for access other inputs which needs no validations

      const dobRef = useRef()
      const genderRef = useRef()
      const addressRef = useRef()
      const collegeRef = useRef()
      const readingRef = useRef()
      const gamingRef = useRef()
      const travellingRef = useRef()
      const drawingRef = useRef()
      const otherHobbiesRef = useRef()

  // State for managing other hobbies 

    const [otherHobbies, setOtherHobbies] = useState(false)
    const otherHobbiesHandler = e => {
      if(e.target.checked){
        setOtherHobbies(true)
        return
      }
      setOtherHobbies(false)
    }

  const submitFormHandler = event => {
    event.preventDefault();
    setEnteredNameWasTouched(true)
    setEnteredEmailWasTouched(true)
    setEnteredPhoneWasTouched(true)

    if(!enteredNameIsValid || !enteredPhoneIsValid || !enteredEmailIsValid){
      return;
    }

    const name = enteredName
    const email = enteredEmail
    const phone = enteredPhone

    const dob = dobRef.current.value
    const gender = genderRef.current.value
    const address = addressRef.current.value
    const college = collegeRef.current.value
    let otherHobbies =  '';
    if(otherHobbiesRef.current){
      otherHobbies = otherHobbiesRef.current.value;
    }
    const reading = readingRef.current.checked ? 'Reading, ' : '' ; 
    const gaming = gamingRef.current.checked ? 'Gaming, ' : '' ;
    const travelling = travellingRef.current.checked ? 'Travelling, ' : '' ;
    const drawing = drawingRef.current.checked ? 'Drawing, ' : '' ;
    const hobbies = reading + gaming + travelling + drawing + otherHobbies 
    const id = Math.random().toString(36).substr(2, 7);
    const data = { id,name,dob,gender,email,phone,address,college,hobbies }
    dispatch(addUser(data))
    props.onHideModal();
  }
  
  return (
    <Modal>
        <Card>
          <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control}>
              <label htmlFor='name'>Name*</label>
              <input type='text' value={enteredName} onChange={nameInputHandler} required/>
              {enteredNameWasTouched && !enteredNameIsValid && <p style={{color:'red'}}>Please Enter Valid Name (3-30 Chars)</p>}
            </div>
            <div className={`${classes.control} ${classes['col-1']}`} >
              <label htmlFor='gender'>Gender*</label>
              <select id="gender" ref={genderRef} >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                </select>
            </div>
            <div className={`${classes.control} ${classes['col-2']}`} >
              <label htmlFor='dob'>Birth Date</label>
              <input type='date' ref={dobRef} />
            </div>
            <div className={`${classes.control} ${classes['col-1']}`} >
              <label htmlFor='phone'>Phone*</label>
              <input type='number' value={enteredPhone} onChange={phoneInputHandler} required/>
              {enteredPhoneWasTouched && !enteredPhoneIsValid && <p style={{color:'red'}}>Please Enter Valid 10 Digit Phone</p>}
            </div>
            <div className={`${classes.control} ${classes['col-2']}`} >
              <label htmlFor='email'>Email*</label>
              <input type='email' value={enteredEmail} onChange={emailInputHandler} required/>
              {enteredEmailWasTouched && !enteredEmailIsValid && <p style={{color:'red'}}>Please Enter Valid Email</p>}

            </div>
            <div className={classes.control}>
              <label htmlFor='address'>Address</label>
              <textarea id='address' ref={addressRef}></textarea>
            </div>
            <div className={classes.control}>
              <label htmlFor='college'>College*</label>
              <select id="college" ref={collegeRef} required>
                <option value="">Select College</option>
                {colleges.map((college, index) => (
                  <option key={index} value={college.name}>{college.name}</option>
                ))}
                {colleges.length === 0 && <option>No Data Found</option> }
                </select>
            </div>
            <div className={classes.control}>
              <label htmlFor='hobbies'>Hobbies</label>
            </div>
              <input type='checkbox' ref={readingRef} name="reading" /> Reading 
              <input type='checkbox' ref={gamingRef} name="gaming"  /> Gaming 
              <input type='checkbox' ref={travellingRef} name="travelling"  /> Travelling 
              <input type='checkbox' ref={drawingRef} name="drawing" /> Drawing 
              <input type='checkbox' name="other"  onChange={otherHobbiesHandler} /> Other 
              
           { otherHobbies &&  <div className={classes.control}>
              <input type='text' ref={otherHobbiesRef} placeholder="Enter comma separated hobbies"  autoComplete='off' style={{marginTop:'10px'}} />
            </div> }
            <div className={classes.actions}>
              <Button onClick={props.onHideModal} variant="contained" color="default" style={{marginRight:'10px'}}>Close</Button>
              <Button type="submit" variant="contained" color="primary" >Save</Button>
            </div>
          </form>
        </Card>
    </Modal>
  );
};

export default AddUser;
