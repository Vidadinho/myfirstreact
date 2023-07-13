import NewmeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewMeetUps() {
  const history = useHistory();
  function addMeetupHandler(formData) {
    fetch(
      "https://react-getting-started-7a1b4-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>New MeetUps Pages</h1>
      <NewmeetupForm onAddmeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUps;
