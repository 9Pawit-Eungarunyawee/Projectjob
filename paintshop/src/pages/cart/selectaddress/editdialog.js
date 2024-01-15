import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";

export default function Editaddress() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} sx={{ color: "#018294" }}>
        แก้ไข
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>ที่อยู่จัดส่ง</DialogTitle>
        <form className="form">
          <DialogContent>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="ชื่อ"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="หมายเลขโทรศัพท์"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  variant="outlined"
                  label="ที่อยู่"
                  fullWidth
                  required
                  size="small"
                  multiline
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="แขวง/ตำบล"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="อำเภอ/เขต"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="จังหวัด"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  variant="outlined"
                  label="รหัสไปรษณีย์"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
            </Grid>
          </DialogContent>
        </form>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              borderColor: "#018294",
              color: "#018294",
              mb: 4,
              "&:hover": {
                backgroundColor: "#018294",
                color: "#fff",
              },
            }}
          >
            ยกเลิก
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#018294",
              color: "#fff",
              mb: 4,
              "&:hover": {
                backgroundColor: "#01576e",
              },
            }}
            type="submit"
          >
            บันทึก
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
