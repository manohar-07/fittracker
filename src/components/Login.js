import React from 'react'

function Login() {
  return (

<div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Login</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" required />
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-success">Login</button>
                        </div>                       
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default Login
