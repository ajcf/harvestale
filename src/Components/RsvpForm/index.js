import { Fragment, useState } from "react";
import Label from "./label";
import Input from "./input";
import RadioGroup from "./RadioGroup";

const Status = {
  InProgress: "in-progress",
  Submitting: "submitting",
  Success: "success",
  Error: "error",
};

function RsvpForm() {
  const [names, setNames] = useState("");
  const [attending, setAttending] = useState(undefined);
  const [food, setFood] = useState("");
  const [shuttle, setShuttle] = useState(undefined);
  const [staying, setStaying] = useState("");
  const [other, setOther] = useState("");
  const [ showValidationErrors, setShowValidationErrors ] = useState(false);
  const [status, setStatus] = useState(Status.Pending);

  const namesInvalid = !names || !names.trim().length;
  const attendingInvalid = attending === undefined;

  const submitRsvp = () => {
    setShowValidationErrors(true);
    if (namesInvalid || attendingInvalid) {
      return;
    }
    setStatus(Status.Submitting);
    fetch("https://n0e8sj9tbh.execute-api.us-east-1.amazonaws.com/default/rsvp-notifier", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        names,
        attending,
        food,
        shuttle,
        staying,
        other,
      }),
    }).then((res) => {
      if (res.ok) {
        setStatus(Status.Success);
      } else {
        setStatus(Status.Error);
        alert(
          "We're sorry, something went wrong...this is embarrassing. Please try again, and if that doesn't work just reach out to us directly."
        );
      }
    });
  };

  return (
    <div id="rsvp-container">
      {status === Status.Submitting ? (
        <div id="overlay">
          <div className="loader"></div>
        </div>
      ) : null}
      {status === Status.Success ? (
        <div>
          <h2>Thank you!</h2>
        </div>
      ) : (
        <div className="rsvpForm">
          <div>
            <Label text="Who's RSVPing?" />
            <Input onChange={(e) => setNames(e.target.value)} value={names} error={showValidationErrors && namesInvalid} />
          </div>
          <div>
            <Label text="Can you join us?" />
            <RadioGroup
              name="attending"
              error={showValidationErrors && attendingInvalid}
              onChange={(val) => setAttending(val)}
              options={[
                {
                  value: true,
                  label: "Love to!",
                },

                {
                  value: false,
                  label: "Unfortunately not",
                },
              ]}
            />
          </div>
          {attending && (
            <Fragment>
              <div>
                <Label text="Do you have any dietary restrictions we should know about? Do you need any kids meals?" />
                <textarea
                  onChange={(e) => setFood(e.target.value)}
                  value={food}
                />
              </div>
              <div>
                <Label text="We're providing a shuttle between the room block hotels and the venue" />
                <RadioGroup
                  name="shuttle"
                  onChange={(val) => setShuttle(val)}
                  options={[
                    {
                      value: true,
                      label: "I'm probably interested",
                    },

                    {
                      value: false,
                      label: "No thanks, I'll drive",
                    },
                  ]}
                />
              </div>

              {shuttle && (
                <div>
                  <Label text="For shuttle planning purposes, where are you staying?" />
                  <Input
                    onChange={(e) => setStaying(e.target.value)}
                    value={staying}
                  />
                </div>
              )}
            </Fragment>
          )}

          <div>
            <Label text="Anything else we should know?" />
            <textarea
              onChange={(e) => setOther(e.target.value)}
              value={other}
            />
          </div>

          <button onClick={submitRsvp} id="rsvp-btn">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default RsvpForm;
