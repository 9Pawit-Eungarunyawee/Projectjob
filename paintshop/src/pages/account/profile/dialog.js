import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Snackbar,
} from "@mui/material";
import { useAuthContext } from "@/context/AuthContext";
import { getUser } from "../../../firebase/getData";
import { useRouter } from "next/router";
import editData from "@/firebase/editData";
export default function FormDialog({ handleClickOpen, onFormSubmitSuccess }) {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [name, setName] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [alert, setAlert] = React.useState(null);
  const user = useAuthContext();
  const router = useRouter();
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const handleClickOpenDialog = async () => {
    setOpen(true);
    handleClickOpen();
    await fetchData();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleForm = async (event) => {
    event.preventDefault();
    console.log("Handling form submission");
    handleClose();

    const userEdit = {
      email: email,
      name: name,
      tel: tel,
    };

    console.log("Submitting form with data:", userEdit);

    const { result, error } = await editData("users", user.user.uid, userEdit);

    console.log("Result:", result);
    console.log("Error:", error);
    if (!error) {
      setAlert(<Alert severity="success">แก้ไข้ข้อมูลสำเร็จ</Alert>);
      onFormSubmitSuccess();
      setOpenAlert(true);
    } else {
      setAlert(
        <Alert severity="error">ผิดพลาด! ไม่สามารถแก้ไข้ข้อมูลได้</Alert>
      );
      setOpenAlert(true);
    }
  };

  const fetchData = async () => {
    const collection = "users";
    const uid = user.user.uid;
    const { result, error } = await getUser(collection, uid);

    if (error) {
      console.error("Error fetching document:", error);
    } else if (result.docs.length > 0) {
      const userData = result.docs[0].data();
      setName(userData.name);
      setEmail(userData.email);
      setTel(userData.tel);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontWeight: "bold" }}>
          แก้ไขข้อมูลส่วนตัว
        </DialogTitle>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          {alert}
        </Snackbar>
        <form onSubmit={handleForm} className="form">
          <DialogContent>
            <TextField
              variant="outlined"
              value={String(name)}
              label="ชื่อ"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              value={String(email)}
              label="อีเมล"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="เบอร์ติดต่อ"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setTel(e.target.value)}
              value={String(tel)}
            />
          </DialogContent>
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
                  backgroundColor: "#01576e", // Change to the desired hover color
                },
              }}
              type="submit"
            >
              บันทึก
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Open the dialog when clicking the "แก้ไข" button */}
      <Button sx={{ color: "#018294" }} onClick={handleClickOpenDialog}>
        แก้ไข
      </Button>
    </React.Fragment>
  );
}