import "../styles/response.css";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

function Response({ prompt, response }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="responseContainer mv3">
      <div className="flex pt5 bb">
        <h2 className="b ma0 pr3">Prompt:</h2>
        <div className="f4 flex items-end">{prompt}</div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="flex pv3 lh-title">{response}</div>
      </Collapse>
    </div>
  );
}

export default Response;
