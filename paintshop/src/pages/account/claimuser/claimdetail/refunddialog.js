import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, Snackbar } from "@mui/material";
import { editClaim } from "@/firebase/addClaim";
export default function RefundDialog({ onClose, ClaimData, claim_id }) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("อยู่ระหว่างจัดส่ง");
  const [tracker, setTracker] = React.useState("");
  const [alert, setAlert] = React.useState(null);
  const [snackbaropen, setSnackbarOpen] = React.useState(false);
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleForm = async (event) => {
    event.preventDefault();
    const data = {
      status: status,
      tracker: tracker,
    };
    const result = await editClaim(claim_id, data);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={onClose}>
          แก้ไขข้อมูลสำเร็จ
        </Alert>
      );

      setSnackbarOpen(true);
      ClaimData();
      onClose();
    } else {
      setAlert(
        <Alert severity="error" onClose={onClose}>
          ผิดพลาด! ไม่สามารถแก้ไขข้อมูลได้
        </Alert>
      );
      setSnackbarOpen(true);
    }
  };
  return (
    <React.Fragment>
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#018294",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "#018294",
          },
        }}
        onClick={handleClickOpen}
      >
        เพิ่มตัวติดตามสินค้า
      </Button>
      <Snackbar
        open={snackbaropen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        {alert}
      </Snackbar>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleForm}>
          <DialogTitle> เพิ่มตัวติดตามสินค้า</DialogTitle>
          <DialogContent>
            <TextField
              value={tracker}
              onChange={(e) => setTracker(e.target.value)}
              variant="outlined"
              label="tracker"
              fullWidth
              size="small"
              sx={{ mt: 1, mb: 1 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ยกเลิก</Button>
            <Button type="submit">บันทึก</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
