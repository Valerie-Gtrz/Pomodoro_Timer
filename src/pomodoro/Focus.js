import React from 'react';
import { minutesToDuration } from '../utils/duration';


function Focus({focusDuration, handleFocusDecrease, handleFocusIncrease, session}) {
    return (
<div className="col">
<div className="input-group input-group-lg mb-2">
  <span className="input-group-text" data-testid="duration-focus">
    {/* DONE? ======TODO: Update this text to display the current focus session duration */}
    {/*minutesToDuration converts numbers into minutes */}
    Focus Duration: {minutesToDuration(focusDuration)}
  </span>
  <div className="input-group-append">
    {/* DONE? TODO: Implement decreasing focus duration and disable during a focus or break session */}
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="decrease-focus"
      onClick={handleFocusDecrease}
      disabled={session || focusDuration === 5}
    >
      <span className="oi oi-minus" />
    </button>
    {/*DONE! TODO: Implement increasing focus duration  and disable during a focus or break session */}
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="increase-focus"
      onClick={handleFocusIncrease}
      disabled={session || focusDuration >= 60}
    >
      <span className="oi oi-plus" />
    </button>
  </div>
</div>
</div>
    )
}

export default Focus;