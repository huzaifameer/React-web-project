import "./ContactForm-styles.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send your message to us !</h1>
            <form>
                <input placeholder="Enter Your Name" type="text" required />
                <input placeholder="Enter Your E-Mail" type="email" required />
                <input placeholder="Enter the Subject" type="text" required />
                <textarea placeholder="Type your message" rows="4"></textarea>
                <button>Send Us</button>
            </form>
        </div>
    )
}
export default ContactForm;