import { editOrder } from "@/firebase/addOrder";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Snackbar,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function EditDialog({ open, onClose, sell_id, fetchData,sellData }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      error: {
        main: "#FE616A",
      },
    },
  });
  const [alert, setAlert] = useState(null);
  const [snackbaropen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const [status, setStatus] = useState("");
  const [tracker, setTracker] = useState("");

  useEffect(()=>{
    if(sellData){
      setStatus(sellData.status)
      setTracker(sellData.tracker)
    }
  },[sellData])
  const handleForm = async (event) => {
    event.preventDefault();
    const data = {
      status: status,
      tracker: tracker,
    };
    const result = await editOrder(sell_id, data);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={onClose}>
          แก้ไขข้อมูลสำเร็จ
        </Alert>
      );

      setSnackbarOpen(true);
      fetchData();
      onClose()

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
    <ThemeProvider theme={theme}>
      <Snackbar
        open={snackbaropen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        {alert}
      </Snackbar>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle>แก้ไขรายการ</DialogTitle>
        <form onSubmit={handleForm}>
          <DialogContent>
            <TextField
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              size="small"
              fullWidth
              select
              label="สถานะรายการ"
              sx={{ mt: 1, mb: 1 }}
              required
            >
              <MenuItem value={"จัดเตรียมสินค้า"}>จัดเตรียมสินค้า</MenuItem>
              <MenuItem value={"อยู่ระหว่างจัดส่ง"}>อยู่ระหว่างจัดส่ง</MenuItem>
            </TextField>
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
            <Button variant="contained" color="error" onClick={onClose}>
              ยกเลิก
            </Button>
            <Button variant="contained" color="success" type="submit">
              แก้ไข
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </ThemeProvider>
  );
}
