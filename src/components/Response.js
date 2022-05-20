import "../styles/response.css";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

function Response({ prompt, response }) {
  const [open, setOpen] = useState(true);
  const responseSplit = response.split("\n");
  return (
    <div className="responseContainer mv3">
      <div className="flex pt5 bb justify-between">
        <div className="flex pr3">
          <h2 className="promptHeader b ma0 pr3">Prompt:</h2>
          <div className="f4 flex items-center">{prompt}</div>
        </div>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </div>
      <Collapse className="lh-title" in={open} timeout="auto" unmountOnExit>
        {responseSplit.map((response) => (
          <p className="flex mv0 pv1">{response}</p>
        ))}
      </Collapse>
    </div>
  );
}

export default Response;
