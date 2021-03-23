import { useState } from "react";

import EditIcon from "./editIcon-24px.svg";
import TrashCanIcon from "./trashcanIcon-24px.svg";

// initialStatus: Can be todo, progress, done
function TodoElement({ name, initialStatus }) {
  let [status, setStatus] = useState(initialStatus);

  let showStyles = {
    // visibility: showButtons ? "visible" : "hidden"
    opacity: 0
  };

  const fadeAnimationTime = 1000;
  let running = false;
  const toggleShowButtons = (entering) => {
    // TODO - Add fading instead of a quick visible hidden (use opacity instead of visiblity)
    console.log(`toggling - Entering: ${entering}`);
    if (running) return;
    if (entering) {
      // When prevOpacity = 0

      let fadeInterval = setInterval(() => {
        const prevOpacity = showStyles.opacity;
        if (showStyles.opacity === 1) {
          clearInterval(fadeInterval);
          running = false;
        }

        showStyles.opacity = prevOpacity + 10 / fadeAnimationTime;
        console.log(showStyles.opacity);
        console.log(prevOpacity + 10 / fadeAnimationTime);
      }, 10);
    } else {
      // When prevOpacity = 1
      let fadeInterval = setInterval(() => {
        const prevOpacity = showStyles.opacity;
        if (showStyles.opacity === 0) {
          clearInterval(fadeInterval);
          running = false;
        }
        showStyles.opacity = prevOpacity - fadeAnimationTime / 10;
      }, 10);
    }
  };

  let classes = `item ${status}`;
  return (
    <div
      className={classes}
      onMouseEnter={() => toggleShowButtons(true)}
      onMouseLeave={() => toggleShowButtons(false)}
    >
      <span>{name}</span>
      <div id="buttons-wrapper">
        <button style={showStyles} className="edit">
          <img src={EditIcon} alt="Edit" />
        </button>
        <button style={showStyles} className="remove">
          <img src={TrashCanIcon} alt="Del" />
        </button>
      </div>
    </div>
  );
}

export default TodoElement;
