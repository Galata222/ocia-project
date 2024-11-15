import React from 'react';
import './../style/forgotpassword.css';

function ForgotPassword() {
  return (
    <div className='container d-flex justify-content-center align-items-center  vh-100'>
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body">
        <h5 className="card-title text-center text-dark">Forgot Password</h5>
          <div className="col-xs-12 col-sm-12">
            <div className="forgotpassword__auth-heading">
              <h3 className="card-title text-center">Recover Your Password</h3>
              <p>Fill in your email address below, and we will send you an email with further instructions.</p>
            </div>
            <form name="forgotPasswordForm" className="forgotpassword__forgot-password-form" action="#" method="POST">
              <div className="forgotpassword__form-group forgotpassword__input-wrapper">
                <input type="email" className="form-control" name="email" placeholder="Email address" />
                <span className="forgotpassword__input-focus" />
              </div>
              <div className="forgotpassword__form-group">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Recover Your Password</button>
              </div>
              <div className="forgotpassword__form-group">
                <a className="forgotpassword__link-toggle text-dark" data-panel=".login-panel" href="/login">Already have an account?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
