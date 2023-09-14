import "./SignUp-styles.css"
import Footer from "../Components/footer";
function SignUp(){
    return(
        <div className="container">
        <h2>Sign Up Form</h2>
        <form>
            <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
                <label for="phone">Telephone No:</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
                <button type="submit">Sign Up</button>
            </div>
        </form>
        <Footer/>
    </div>
    )
}
export default SignUp;