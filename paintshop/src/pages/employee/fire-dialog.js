import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function FireDialog({
  open,
  style,
  handleClose,
  name,
  handleFireForm,
}) {
  const [ename, setEname] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFireForm();
    handleClose();
  };
  return (
    <ThemeProvider theme={style}>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>เลิกจ้างพนักงาน</DialogTitle>
        <DialogContent>
          <Typography>กรอกชื่อพนักงานเพื่อยืนยัน</Typography>
          <TextField
            onChange={(e) => setEname(e.target.value)}
            size="small"
            fullWidth
            label="ชื่อพนักงาน"
            sx={{ mt: 1, mb: 1 }}
            required
          />
          <Typography color="text.secondary">ชื่อ: {name}</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleSubmit}
            disabled={ename === name ? false : true}
          >
            เลิกจ้าง
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
