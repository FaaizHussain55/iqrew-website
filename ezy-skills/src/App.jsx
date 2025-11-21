import './App.scss'
import heroIllustration from './assets/hero-illustration.svg'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="container hero__container">
            <div className="signup-card">
              <h1>
                Create <span>Account</span>
              </h1>
              <form className="signup-form" onSubmit={(event) => event.preventDefault()}>
                <label className="input-field">
                  <span>Email Address</span>
                  <input type="email" name="email" placeholder="hello@ezyskills.in" required />
                </label>
                <label className="input-field">
                  <span>Password</span>
                  <input type="password" name="password" placeholder="Enter password" required />
                </label>
                <label className="input-field">
                  <span>Confirm Password</span>
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder="Re-enter password"
                    required
                  />
                </label>

                <label className="remember">
                  <input type="checkbox" defaultChecked />
                  Remember Me
                </label>

                <button type="submit" className="btn btn--primary btn--block">
                  Create Account
                </button>

                <p className="helper-text">
                  Already created? <a href="#login">Login here</a>
                </p>
              </form>

              <div className="social-actions">
                <button className="social-btn" type="button">
                  <span className="social-icon">G</span>
                  Sign in
                </button>
                <button className="social-btn" type="button">
                  <span className="social-icon social-icon--blue">f</span>
                  Sign in
                </button>
                <button className="social-btn" type="button">
                  <span className="social-icon social-icon--dark"></span>
                  Sign in
                </button>
              </div>

              <p className="terms">
                By continuing, you agree to the <a href="#terms">Terms of Service</a> and{' '}
                <a href="#privacy">Privacy Policy</a>
              </p>
            </div>

            <div className="hero__visual">
              <img src={heroIllustration} alt="Two people building a mobile experience" />

              <div className="floating-card floating-card--primary">
                <span className="dot dot--orange" />
                <div>
                  <p>Secure Cloud</p>
                  <strong>99.9%</strong>
                </div>
              </div>

              <div className="floating-card floating-card--secondary">
                <span className="dot dot--blue" />
                <div>
                  <p>Live Courses</p>
                  <strong>250+</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
