import editData from "@/firebase/editData";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
export default function ProfileDiaLog({
  handleClose,
  handleForm,
  open,
  style,
  salary,
  position,
  setPosition,
  setSalary,
}) {

// const [position, setPosition] = useState("")
// const [salary,setSalary] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    handleForm(salary, position);
    handleClose();
  };

  return (
    <ThemeProvider theme={style}>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>แก้ไขข้อมูลพนักงาน</DialogTitle>
        <DialogContent>
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
          <Button variant="contained" color="success" onClick={handleSubmit}>
            แก้ไข
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
