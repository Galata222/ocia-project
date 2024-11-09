import React from 'react';
import './../style/forgotpassword.css';

function ForgotPassword() {
  return (
    <div>
      <div className="forgotpassword__auth-panel forgotpassword__forgot-password-panel">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="forgotpassword__auth-heading">
              <h3 className="forgotpassword__auth-title">Recover Your Password</h3>
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
                <a className="forgotpassword__link-toggle" data-panel=".login-panel" href="/login">Already have an account?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
