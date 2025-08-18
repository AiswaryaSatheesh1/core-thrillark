import { Box, Modal } from "@mui/material";
import "./createexp.css";

function CreateExp({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Box className={`createexp-modal ${open ? "open" : ""}`}>
        <div>
          <h2>Create Experience</h2>
          <label className="label">Title</label>
          <input className="input" type="text" placeholder="Experience Name" />
          <label className="label">Location</label>
          <input
            className="input"
            type="text"
            placeholder="Experience Description"
          />
          <label className="label">Category</label>
          <input
            className="input"
            type="text"
            placeholder="Experience Location"
          />
          <label className="label">Description</label>
          <input
            className="input"
            type="text"
            placeholder="Experience Description"
          />
          <label className="label">Inclusion</label>
          <input
            className="input"
            type="text"
            placeholder="Experience Inclusion"
          />
          <label className="label">Exclusion</label>
          <input
            className="input"
            type="text"
            placeholder="Experience Exclusion"
          />
          <label className="label">Cancellation Policy</label>
          <input
            className="input"
            type="text"
            placeholder="Experience Cancellation Policy"
          />
          <label className="label">Know before you go</label>
          <input className="input" type="text" placeholder="Experience Tips" />
          <label className="label">Photos</label>
          <input className="input" type="file" multiple />
          <label className="label">Videos</label>
          <input className="input" type="file" multiple />
          <div className="button-container">
            <button className="button">Create Experience</button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default CreateExp;
