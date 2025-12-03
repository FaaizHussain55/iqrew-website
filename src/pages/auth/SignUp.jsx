import "./auth.scss";
import authVector from "../../assets/images/auth-vector3.png";
import { Link } from "react-router-dom";
import authGoogleIcon from "../../assets/icons/icon-auth-google.svg";
import authFacebookIcon from "../../assets/icons/icon-auth-fb.svg";
import authAppleIcon from "../../assets/icons/icon-auth-apple.svg";

export default function SignUp() {
  return (
    <section className="auth-page">
      <div className="container">
        <div className="auth-flex">
          <div className="auth-card">
            <h1 className="card-title">
              Create <span>Account</span>
            </h1>
            <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
              <input className="input-field" type="email" name="email" placeholder="Email Address" required />
              <input className="input-field" type="password" name="password" placeholder="Password" required />
              <input className="input-field" type="password" name="confirm-password" placeholder="Confirm password" required />
              <button type="submit" className="btn btn--blue btn--sm btn-submit">
                Create Account
              </button>
              <p className="helper-text">
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </form>
            <div className="separator">or</div>
            <div className="social-actions">
              <button className="btn btn--sm social-btn social-btn--google" type="button">
                <img className="social-icon" src={authGoogleIcon} alt="Login with Google" />
                <span>Signup with Google</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--facebook" type="button">
                <img className="social-icon" src={authFacebookIcon} alt="Login with Facebook" />
                <span>Signup with Facebook</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--apple" type="button">
                <img className="social-icon" src={authAppleIcon} alt="Login with Apple" />
                <span>Signup with Apple</span>
              </button>
            </div>
            <p className="terms">
              By continuing, you agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.
            </p>
          </div>

          <div className="vector-container">
            <img className="vector" src={authVector} alt="Login Vector" />
          </div>
        </div>
      </div>
    </section>
  );
}
