import React from 'react';


function ActionBtns({session, playPause, isTimerRunning, classNames, stop}){
    return(      
    <div className="row">
    <div className="col">
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/* DONE! TODO: Disable the stop button when there is no active session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="stop"
          title="Stop the session"
          onClick={stop}
          disabled={!session}
        >
          <span className="oi oi-media-stop" />
        </button>
      </div>
    </div>
  </div>)
}

export default ActionBtns;