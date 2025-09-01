import React,{useState} from 'react';

export default function Login({onLogin}) {

    const [selectedRole,setselectedRole] = useState("Admin");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(selectedRole);
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
          backgroundColor: 'whitesmoke'
        }}
      >
            <h1>Login</h1>
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
                 style={{backgroundColor:'blue',marginTop: '10px'}}  >Login</button>
            </form>
              </div>
        </div>
        </>

    )
}