import React from 'react';
import '../style/terms.css';  

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-intro">
        By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>
      <div className="terms-content">
        <p className="terms-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="terms-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        </p>
        <p className="terms-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tempor sapien. Cras at dui nec nulla consequat pretium. Nam sollicitudin justo ac metus pretium, nec pharetra felis venenatis. Fusce at ullamcorper metus. Nunc malesuada consectetur lorem, et interdum erat dictum id. Donec non vestibulum nisi. 
        </p>
        <p className="terms-paragraph">
          Vivamus euismod urna nec leo volutpat, eu condimentum erat pretium. Etiam auctor orci non justo faucibus, nec congue leo vehicula. In sollicitudin tortor in nulla rutrum, ac ultricies neque condimentum. Etiam at consectetur metus. Nulla vel nisl et purus dapibus auctor ut vel risus.
        </p>
      </div>
      <p className="terms-acknowledgment">
        By clicking "I Agree", you acknowledge that you have read and understood our Terms and Conditions.
      </p>
      <p>
        I understood back to Terms and Conditions <a href="/admin/registration"> Back to Registration</a>.
                        </p>
    </div>
  );
}

export default TermsAndConditions;
