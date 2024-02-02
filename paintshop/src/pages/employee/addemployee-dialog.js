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

export default function AddEmployeeDialog({
  item,
  open,
  handleClose,
  style,
  debouncedSearchUser,
}) {
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const handleForm = async (id) => {
    const employeeUser = {
      role: "employee",
      salary: salary,
      position: position,
      isFormerEmployee: false,
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
    debouncedSearchUser("");
    handleClose();
    handleSnackbarClose();
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
          <TextField
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            size="small"
            fullWidth
            select
            label="ตำแหน่ง"
            sx={{ mt: 1, mb: 1 }}
            required
          >
            <MenuItem value={"รับลูกค้า"}>รับลูกค้า</MenuItem>
            <MenuItem value={"จัดการคลังสินค้า"}>จัดการคลังสินค้า</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            label="เงินเดือน"
            fullWidth
            required
            size="small"
            sx={{ mt: 1, mb: 1 }}
            onChange={(e) => {
              const input = e.target.value;
              // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
              if (/^\d*$/.test(input) || input === "") {
                // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                if (input === "" || (parseInt(input) > 0 && input[0] !== "0")) {
                  setSalary(input);
                }
              }
            }}
            value={String(salary)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleForm(item.id)}
          >
            เพิ่ม
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
