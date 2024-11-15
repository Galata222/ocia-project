import React from 'react';
import './../style/forgotpassword.css';

function ForgotPassword() {
  return (
    <div>
      <div className="auth-panel forgot-password-panel">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="auth-heading">
              <h3 className="auth-title">Recover Your Password</h3>
              <p>Fill in your email address below, and we will send you an email with further instructions.</p>
            </div>
            <form name="forgotPasswordForm" className="forgot-password-form" action="#" method="POST">
              <div className="form-group input-wrapper">
                <input type="email" className="form-control" name="email" placeholder="Email address" />
                <span className="input-focus" />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Recover Your Password</button>
              </div>
              <div className="form-group">
                <a className="link-toggle" data-panel=".login-panel" href="/login">Already have an account?</a>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;