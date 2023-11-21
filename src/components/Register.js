import React, {useState} from "react";

function Register() {

  const [registerform,setregisterForm]=useState({});

  const handleForm= (e)=>{
    console.log(e.target.value,e.target.name);
    // name=e.target.name;
    // value=e.target.value;
    setregisterForm({ ...registerform,[e.target.name]:e.target.value})
    
  }
  const saveRegister=async (e)=>{
    e.preventDefaulf();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(registerform),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json();
    console.log(data);
  }


  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Register</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" 
                            value={registerform.username}required  onChange={handleForm}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" 
                            value={registerform.email}required onChange={handleForm} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" 
                            value={registerform.password}required  onChange={handleForm}/>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-success" onClick={saveRegister}>Register</button>
                        </div>                       
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Register
