import { ThemeProvider } from "@emotion/react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { deleteColor, editColor } from "@/firebase/addColor";
export default function EditColor({
  editOpen,
  handleEditClose,
  color,
  colorShade,
  setOpen,
  handleClose,
  setAlert,
  fetchAllColor,
}) {
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

  const [code, setCode] = useState("");
  const [code_name, setCode_name] = useState("");
  const [name, setName] = useState("");
  const [colorshade_id, setColorShadeID] = useState("");
  
  useEffect(() => {
    if (color != null && color !== undefined) {
      if (color.colorshade_id && color.colorshade_id.id) {
        // console.log(color.colorshade_id.id);
        setColorShadeID(color.colorshade_id.id);
      }
      if (color.code) {
        setCode(color.code);
      }
      if (color.code_name) {
        setCode_name(color.code_name);
      }
      if (color.name) {
        setName(color.name);
      }
    }
  }, [color]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      code: code,
      code_name: code_name,
      name: name,
      colorshade_id: colorshade_id,
    };
    const result = await editColor("colors", color.id, data);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          แก้ไขสีสำเร็จ
        </Alert>
      );
      setOpen(true);
      handleEditClose();
      fetchAllColor();
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถแก้ไขสีได้
        </Alert>
      );
      setOpen(true);
    }
  };

  const handleDeleteColor = async() =>{
    const result = await deleteColor("colors", color.id);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ลบสีสำเร็จ
        </Alert>
      );
      setOpen(true);
      handleEditClose();
      fetchAllColor();
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถลบสีได้
        </Alert>
      );
      setOpen(true);
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={editOpen} onClose={handleEditClose} maxWidth="xs" fullWidth>
        <DialogTitle>แก้ไขสี</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleEditClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit} className="form">
          <DialogContent>
            <TextField
              size="small"
              select
              label="เลือกเฉดสี"
              required
              fullWidth
              sx={{ mt: 1 }}
              value={colorshade_id}
              onChange={(e) => setColorShadeID(e.target.value)}
            >
              <MenuItem>กรุณาเลือกเฉดสี</MenuItem>
              {colorShade &&
                colorShade.map((shade) => (
                  <MenuItem key={shade.id} value={shade.id}>
                    <Box
                      sx={{
                        bgcolor: shade.code,
                        p: 1,
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    >
                      {shade.name}
                    </Box>
                  </MenuItem>
                ))}
            </TextField>
            <TextField
              variant="outlined"
              value={code}
              label="โค้ดสี"
              size="small"
              type="color"
              fullWidth
              sx={{ mt: 2, mb: 1 }}
              onChange={(e) => setCode(e.target.value)}
              InputLabelProps={{
                shrink: true,
                // ให้ label ลอยค้าง
                sx: {
                  backgroundColor: "#FFF", // สีพื้นหลังของ label
                  padding: "0 5px", // ให้พื้นที่ขอบของ label เป็นช่องว่าง
                  zIndex: 1, // ให้ label อยู่ด้านบนสุด
                },
              }}
            />
            <TextField
              variant="outlined"
              value={name}
              label="ชื่อสี"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              value={code_name}
              label="โค้ดเนม"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setCode_name(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" onClick={handleDeleteColor}>
              ลบ
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
