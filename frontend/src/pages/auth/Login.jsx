import "./auth.scss";
import authVector from "../../assets/images/auth-vector2.png";
import { Link } from "react-router-dom";
import authGoogleIcon from "../../assets/icons/icon-auth-google.svg";
import authFacebookIcon from "../../assets/icons/icon-auth-fb.svg";
import authAppleIcon from "../../assets/icons/icon-auth-apple.svg";

export default function Login() {
  return (
    <section className="auth-page" aria-labelledby="login-title">
      <div className="container">
        <div className="auth-flex">
          <div className="auth-card">
            <h1 id="login-title" className="card-title">
              Log <span>In</span>
            </h1>
            <form className="auth-form" onSubmit={(event) => event.preventDefault()} aria-label="Login form" noValidate>
              <div className="form-group">
                <label htmlFor="login-email" className="sr-only">
                  Email Address
                </label>
                <input
                  className="input-field"
                  type="email"
                  id="login-email"
                  name="email"
                  placeholder="Email Address"
                  required
                  aria-required="true"
                  aria-describedby="email-description"
                  autoComplete="email"
                />
                <span id="email-description" className="sr-only">Enter your email address</span>
              </div>
              <div className="form-group">
                <label htmlFor="login-password" className="sr-only">
                  Password
                </label>
                <input
                  className="input-field"
                  type="password"
                  id="login-password"
                  name="password"
                  placeholder="Password"
                  required
                  aria-required="true"
                  aria-describedby="password-description"
                  autoComplete="current-password"
                />
                <span id="password-description" className="sr-only">Enter your password</span>
              </div>
              <label className="remember">
                <input type="checkbox" id="remember-me" name="remember" defaultChecked aria-describedby="remember-description" />
                <span id="remember-description">Remember Me</span>
              </label>
              <button type="submit" className="btn btn--blue btn--sm btn-submit" aria-label="Submit login form">
                Log In
              </button>
              <p className="helper-text">
                Don't have an account?{" "}
                <Link to="/signup" aria-label="Navigate to sign up page">
                  Create Account
                </Link>
              </p>
            </form>
            <div className="separator" role="separator" aria-label="Or continue with social login">
              <span>or</span>
            </div>
            <div className="social-actions" role="group" aria-label="Social login options">
              <button className="btn btn--sm social-btn social-btn--google" type="button" aria-label="Login with Google">
                <img className="social-icon" src={authGoogleIcon} alt="" aria-hidden="true" />
                <span>Login with Google</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--facebook" type="button" aria-label="Login with Facebook">
                <img className="social-icon" src={authFacebookIcon} alt="" aria-hidden="true" />
                <span>Login with Facebook</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--apple" type="button" aria-label="Login with Apple">
                <img className="social-icon" src={authAppleIcon} alt="" aria-hidden="true" />
                <span>Login with Apple</span>
              </button>
            </div>
            <p className="terms" role="note" aria-label="Terms and privacy notice">
              By continuing, you agree to the{" "}
              <Link to="/terms" className="link-inline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="link-inline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="vector-container" aria-hidden="true">
            <img className="vector" src={authVector} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
