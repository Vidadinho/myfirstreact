import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewmeetupForm(props) {
  const submitTitle = useRef();
  const submitImage = useRef();
  const submitAddress = useRef();
  const submitDescription = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = submitTitle.current.value;
    const enteredImage = submitImage.current.value;
    const enteredAddress = submitAddress.current.value;
    const enteredDescription = submitDescription.current.value;

    const formData = {
      Title: enteredTitle,
      Image: enteredImage,
      Address: enteredAddress,
      Description: enteredDescription,
    };
    props.onAddmeetup(formData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={submitTitle}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={submitImage}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" id="address" required ref={submitAddress}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={submitDescription}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewmeetupForm;
