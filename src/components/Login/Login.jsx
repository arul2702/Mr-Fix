
import React from 'react';
import Cookies from 'js-cookie';
import './Login.css'
import { useNavigate } from 'react-router';

function Login() {
   const navigate=useNavigate();
  const dash=()=>{
            navigate("/dashboard")
  }
  // const handleAdminLogin = () => {
  //   Cookies.set('userRole', 'admin');
  //   window.location.href = '/home';
  // };

  // const handleUserLogin = () => {
  //   Cookies.set('userRole', 'user');
  //   window.location.href = '/home';
  // };

  return (
    <div>
      
      <section class="login">
        <div class="form-box">
            <div class="form-value">
                <form action="inputbox">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required/>
                        <lable for="">Email</lable>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <lable for="">Password</lable>
                    </div>
                    <div class="remember-me">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                    </div>
                    <button className='login-btn' onClick={dash}>Log in</button>
                    <div class="register">
                        <p>Don't have a account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Login;