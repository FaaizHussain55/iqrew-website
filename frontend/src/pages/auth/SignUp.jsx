import "./auth.scss";
import authVector from "../../assets/images/auth-vector3.png";
import { Link } from "react-router-dom";
import authGoogleIcon from "../../assets/icons/icon-auth-google.svg";
import authFacebookIcon from "../../assets/icons/icon-auth-fb.svg";
import authAppleIcon from "../../assets/icons/icon-auth-apple.svg";

export default function SignUp() {
  return (
    <section className="auth-page" aria-labelledby="signup-title">
      <div className="container">
        <div className="auth-flex">
          <div className="auth-card">
            <h1 id="signup-title" className="card-title">
              Create <span>Account</span>
            </h1>
            <form className="auth-form" onSubmit={(event) => event.preventDefault()} aria-label="Sign up form" noValidate>
              <div className="form-group">
                <label htmlFor="signup-email" className="sr-only">
                  Email Address
                </label>
                <input
                  className="input-field"
                  type="email"
                  id="signup-email"
                  name="email"
                  placeholder="Email Address"
                  required
                  aria-required="true"
                  aria-describedby="signup-email-description"
                  autoComplete="email"
                />
                <span id="signup-email-description" className="sr-only">Enter your email address</span>
              </div>
              <div className="form-group">
                <label htmlFor="signup-password" className="sr-only">
                  Password
                </label>
                <input
                  className="input-field"
                  type="password"
                  id="signup-password"
                  name="password"
                  placeholder="Password"
                  required
                  aria-required="true"
                  aria-describedby="signup-password-description"
                  autoComplete="new-password"
                />
                <span id="signup-password-description" className="sr-only">Enter a secure password</span>
              </div>
              <div className="form-group">
                <label htmlFor="signup-confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  className="input-field"
                  type="password"
                  id="signup-confirm-password"
                  name="confirm-password"
                  placeholder="Confirm password"
                  required
                  aria-required="true"
                  aria-describedby="signup-confirm-password-description"
                  autoComplete="new-password"
                />
                <span id="signup-confirm-password-description" className="sr-only">Confirm your password</span>
              </div>
              <button type="submit" className="btn btn--blue btn--sm btn-submit" aria-label="Submit sign up form">
                Create Account
              </button>
              <p className="helper-text">
                Already have an account?{" "}
                <Link to="/login" aria-label="Navigate to login page">
                  Login here
                </Link>
              </p>
            </form>
            <div className="separator" role="separator" aria-label="Or continue with social sign up">
              <span>or</span>
            </div>
            <div className="social-actions" role="group" aria-label="Social sign up options">
              <button className="btn btn--sm social-btn social-btn--google" type="button" aria-label="Sign up with Google">
                <img className="social-icon" src={authGoogleIcon} alt="" aria-hidden="true" />
                <span>Signup with Google</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--facebook" type="button" aria-label="Sign up with Facebook">
                <img className="social-icon" src={authFacebookIcon} alt="" aria-hidden="true" />
                <span>Signup with Facebook</span>
              </button>
              <button className="btn btn--sm social-btn social-btn--apple" type="button" aria-label="Sign up with Apple">
                <img className="social-icon" src={authAppleIcon} alt="" aria-hidden="true" />
                <span>Signup with Apple</span>
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
