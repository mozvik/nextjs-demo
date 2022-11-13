import { useRef } from "react";
import classes from "./Contact.module.css";

function ContactForm(props: any) {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: any) {
    event.preventDefault();

    const enteredEmail = emailRef.current?.value;
    const enteredSubject = subjectRef.current?.value;
    const enteredMessage = messageRef.current?.value;

    const formData = {
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };

    props.onSubmitContact(formData);
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="email">Email címed</label>
        <input type="email" name="email" id="email" ref={emailRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="subject">Tárgy</label>
        <input type="text" name="subject" id="subject" ref={subjectRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="message">Üzenet</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          ref={messageRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button onClick={submitHandler}>Üzenet küldése</button>
      </div>
    </form>
  );
}

export default ContactForm;
