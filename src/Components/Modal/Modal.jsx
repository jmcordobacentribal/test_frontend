import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modals = ({ heroes }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="button">
        Ver Mas
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style} className="cont-modal">
          <span onClick={handleClose} className="close">
            <i className="material-icons" id="car">
              close_fullscreen
            </i>
          </span>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {heroes.name}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="Text"
          >
            {heroes.descripcion}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
