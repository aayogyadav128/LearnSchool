import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AddIssue, auth } from '../utils/firebase';

const Support = () => {

const [issue, setIssue] = useState();
const [user] = useAuthState(auth);
const userId = user.uid;
const isu = {User:userId,Issue:issue}

  return (
    
    <div className='container'>
    <div className='row justify-content-md-center'>
    <h2 style={{textAlign:'center'}}>Support</h2>
    </div>
    <div className='row' style={{textAlign:'center'}}><p>Having any issue? Please describe your issue here so that we can help you Asap!...</p></div>
    <div className='row'>
    <div class="form-group">
    <form>
    <label style={{textAlign:'center'}}  for="exampleFormControlTextarea1">Write you issue here:</label>
    <textarea className="form-control" value={issue} onChange={(e)=>{setIssue(e.target.value)}} placeholder='I am Having issue related to.....' id="exampleFormControlTextarea1" rows="3"></textarea>
    <button onClick={(e)=>{e.preventDefault();AddIssue(isu).then(()=>{setIssue('');alert("Thanks for Submitting an issue we will respond Asap.")})}} type="submit" style={{marginTop:"10px"}} className="btn btn-primary">Submit</button>
    </form>
  </div></div>
    
    </div>
    
  )
}

export default Support