import "./auth.scss";
import authVector from "../../assets/images/auth-vector2.png";
import { Link } from "react-router-dom";
import authGoogleIcon from "../../assets/icons/icon-auth-google.svg";
import authFacebookIcon from "../../assets/icons/icon-auth-fb.svg";
import authAppleIcon from "../../assets/icons/icon-auth-apple.svg";

export default function Login() {
  return (
    <section className="auth-page">
      <div className="container">
        <div className="auth-flex">
          <div className="auth-card">
            <h1 className="card-title">
              Log <span>In</span>
            </h1>
            <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
              <input className="input-field" type="email" name="email" placeholder="Email Address" required />
              <input className="input-field" type="password" name="password" placeholder="Password" required />
              <label className="remember">
                <input type="checkbox" defaultChecked />
                Remember Me
              </label>
              <button type="submit" className="btn btn--blue btn--sm btn-submit">
                Log In
              </button>
              <p className="helper-text">
                Don't have an account? <Link to="/signup">Create Account</Link>
              </p>
            </form>
            <div className="separator">or</div>
            <div className="social-actions">
              <button className="btn btn--sm social-btn social-btn--google" type="button">
                <img className="social-icon" src={authGoogleIcon} alt="Login with Google" />
                <span>Login with Google</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--facebook" type="button">
                <img className="social-icon" src={authFacebookIcon} alt="Login with Facebook" />
                <span>Login with Facebook</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--apple" type="button">
                <img className="social-icon" src={authAppleIcon} alt="Login with Apple" />
                <span>Login with Apple</span>
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
