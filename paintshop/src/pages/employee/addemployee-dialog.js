import editData from "@/firebase/editData";
import { ThemeProvider } from "@emotion/react";
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
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function AddEmployeeDialog({ item, open, handleClose, style }) {
  //แก้ไขพนักงาน
  const handleForm = async (id) => {
    const employeeUser = {
      role: "employee",
    };
    const result = await editData("users", id, employeeUser);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleSnackbarClose}>
          แก้ไข้ข้อมูลสำเร็จ
        </Alert>
      );
      setSnackbarOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleSnackbarClose}>
          ผิดพลาด! ไม่สามารถแก้ไข้ข้อมูลได้
        </Alert>
      );
      setSnackbarOpen(true);
    }
  };
  const [alert, setAlert] = useState(null);
  const [snackbaropen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };
  return (
    <ThemeProvider theme={style}>
      <Snackbar
        open={snackbaropen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        {alert}
      </Snackbar>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>เพิ่มพนักงาน</DialogTitle>
        <DialogContent>
          <Typography variant="body2">ชื่อ: {item.name}</Typography>
          <Typography variant="body2">อีเมล: {item.email}</Typography>
          <Typography variant="body2">เบอร์ติดต่อ: {item.tel}</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={()=>handleForm(item.id)}
          >
            เพิ่ม
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
