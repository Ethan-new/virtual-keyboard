import React from "react";
import { FaTrashAlt, FaUndo, FaRedo, FaCopy, FaPaste } from "react-icons/fa";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./KeyBoardStylee.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConvertToPdf from "./ConvertToPdf";

function SpecialButtons({ handleEvent, isUndo, isRedo,text }) {
  const notify = () => {
    toast("Text is copied to clipboard!");
    handleEvent("copy");
  };

  return (
    <div id="spacial_buttons" className="spacial_buttons">
      <ConvertToPdf text={text}></ConvertToPdf>
      <Popup
        trigger={
          <button className="button">
            {" "}
            <FaTrashAlt />{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              {" "}
              Are you sure you want to delete all text?{" "}
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  handleEvent("deleteAll");
                  close();
                }}
              >
                Confirm{" "}
              </button>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      <span className="MuiIconButton-label">
        <button
          id="undo"
          onClick={() => handleEvent("undo")}
          disabled={!isUndo}
        >
          <FaUndo />
        </button>
      </span>

      <span className="MuiIconButton-label">
        <button
          id="redo"
          onClick={() => handleEvent("redo")}
          disabled={!isRedo}
        >
          <FaRedo />
        </button>
      </span>

      <div>
        <button onClick={notify}>
          <FaCopy />
        </button>
        <ToastContainer />
      </div>

      <span className="MuiIconButton-label">
        <button id="paste" onClick={() => handleEvent("paste")}>
          <FaPaste />
        </button>
      </span>
     
    </div>  
  );
}

export default SpecialButtons;
