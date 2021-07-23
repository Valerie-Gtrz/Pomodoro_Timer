import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";


function Session({ session, breakDuration, focusDuration }) {
    const duration = session?.label === "Focusing" ? focusDuration: breakDuration;
    const totalTime = duration * 60;
  return (
    session && (
      <div>
        {/* DONE! This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* DONE! Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for {session.label === "Focusing" ? minutesToDuration(focusDuration): minutesToDuration(breakDuration)} minutes
            </h2>
            {/* DONE! Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
           <ProgressBar currentTime={Math.abs(session.timeRemaining - totalTime)} totalTime={totalTime}/>
          </div>
        </div>
      </div>
    )
  );
}

export default Session;
