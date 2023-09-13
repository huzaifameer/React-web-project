import "./SignUp-styles.css"
function SignUp(){
    return(
        <div class="container">
        <h1>Sign Up</h1>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />

            <button>Sign Up</button>
        </form>
    </div>
    )
}
export default SignUp;