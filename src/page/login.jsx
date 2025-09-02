import React,{useState} from 'react';

export default function Login({onLogin}) {

    const [selectedRole,setselectedRole] = useState("Admin");
    const initialState = {
      email : "",
      password : ""
    }

    const [formdata,setformData] = useState(initialState);
    const [error,seterror] = useState("");

    const handleChange = (e) => {
      const { name,value} = e.target;
      setformData ({...formdata ,[name] : value})
    }
  
    const validEmail = () => {
      if(!formdata.email) {
        seterror("Email must be required");
        return false;
      }
     else if(formdata.email.endsWith(".com") && formdata.email.includes("@")) {
        seterror("")
        return true
      } else {
        seterror("Please enter valid Email");
        return false;
     }
    }
    
    const validPassword = () => {
       if(!formdata.password) {
           seterror("Password must be required");
           return false;
       }
       else if(formdata.password.length < 6) {
        seterror("Password must be atleast 6 haracter");
        return false;
       }
        seterror("");
        return true;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validEmail();
        const isPassword = validPassword();
        if (isEmailValid && isPassword) {
          console.log(formdata);
          onLogin(selectedRole);
        }
        
    }

    return(
        <>
        <div style={{width:'100vw',display:'flex',justifyContent:'center',    height: '100vh',
alignItems:'center', textAlign:'center'}}>
    <div
        style={{
        
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          textAlign: 'center',
          backgroundColor: 'wheat',
          
        }}
      >
            <h1>Login Form</h1>
            <label style={{fontWeight:'bold',fontSize: '20px'}}>Email :</label>
            <input className="form-control my-3" type="text" onChange={handleChange} name='email'  value={formdata.email} onBlur={validEmail} placeholder="Enter Email id" style={{marginLeft:'30px',backgroundColor:'lightgray',color:'black',width:'200px',height:'30px',borderRadius:'5px',borderColor:'blue',fontSize:'15px'}}/>
   {error && <p className='text-danger'>{error}</p>}
   <p><label  style={{fontWeight:'bold',fontSize: '20px'}}>Password :</label>
   <input className="form-control my-3" type="password" onChange={handleChange} name='password'  value={formdata.password} onBlur={validPassword} placeholder="Enter password" style={{marginLeft:'15px',backgroundColor:'lightgray',color:'black',width:'200px',height:'33px',borderRadius:'5px',borderColor:'blue',fontSize:'15px'}}/>
   {error && <p className='text-danger'>{error}</p>}</p>
            <form onSubmit={handleSubmit}>
                <label>Selected Role</label>
                <select
                  value={selectedRole}
                  onChange={(e)=>setselectedRole(e.target.value)}
                  >  
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>User</option>
                 </select><br/>
                 <button type="submit"
                 style={{backgroundColor:'blue',marginTop: '10px'}}>Login</button>
            </form>
              </div>
        </div>
        </>

    )
}