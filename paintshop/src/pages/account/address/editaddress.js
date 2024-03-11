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
  Autocomplete,
  createTheme,
  ThemeProvider,
  Alert,
} from "@mui/material";
import addAddress, { editAddress } from "@/firebase/addAddresses";
import { useAuthContext } from "@/context/AuthContext";
import { getUser } from "@/firebase/getData";
export default function Addressedit({ addressData, onFormSubmitSuccess }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      edit: {
        main: "#FFC300",
      },
      error: {
        main: "#FE616A",
      },
    },
  });
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alert, setAlert] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [provinces, setProvinces] = React.useState([]);
  const [amphures, setAmphures] = React.useState([]);
  const [tambons, setTambons] = React.useState([]);
  const [zipCode, setZipCode] = React.useState(undefined);
  const [provinceName, setProvinceName] = React.useState(undefined);
  const [amphureName, setAmphureName] = React.useState(undefined);
  const [tambonName, setTambonName] = React.useState(undefined);
  const [addressDoc, setAddressDoc] = React.useState(addressData);
  const user = useAuthContext();
  const [selected, setSelected] = React.useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined,
  });
  React.useEffect(() => {
    console.log(selected);
    if (provinces) {
      const allAmphures = provinces.find(
        (province) => province.id === selected.province_id
      )?.amphure;
      setAmphures(allAmphures);
      const nameProvince = provinces.find(
        (province) => province.id === selected.province_id
      )?.name_th;
      setProvinceName(nameProvince);
    }
    if (amphures) {
      const allTambons = amphures.find(
        (amphure) => amphure.id === selected.amphure_id
      )?.tambon;
      setTambons(allTambons);
      const nameAmphure = amphures.find(
        (amphure) => amphure.id === selected.amphure_id
      )?.name_th;
      setAmphureName(nameAmphure);
    }
    if (tambons) {
      const nameTambon = tambons.find(
        (tambon) => tambon.id === selected.tambon_id
      )?.name_th;
      const zipcode = tambons.find(
        (tambon) => tambon.id === selected.tambon_id
      )?.zip_code;
      setTambonName(nameTambon);

      setZipCode(zipcode);
    }
  }, [selected, provinces, amphures, tambons]);

  console.log("ทดสอบ", address, provinceName, amphureName, tambonName, zipCode);
  React.useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProvinces(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleForm = async (event) => {
    event.preventDefault();
    console.log("Handling form submission");
    handleClose();

    const userEdit = {
      address: address,
      province: provinceName,
      amphure: amphureName,
      tambon: tambonName,
      zipcode: zipCode,
    };

    console.log("Submitting form with data:", userEdit);

    const { result, error } = await editAddress("users", user.user.uid, {
      addresses: [userEdit],
    });

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
      setAddress(userData.address);
      setProvinces(userData.province);
      setAmphures(userData.amphure);
      setTambons(userData.tambon);
      setZipCode(userData.zipCode);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleClickOpen = (addressData) => {
    setOpen(true);
    setAddressDoc(addressData);
    if (addressDoc) {
      setAddress(addressDoc.address);
      setProvinceName(addressDoc.province);
      setAmphureName(addressDoc.amphure);
      setTambonName(addressDoc.tambon);
      setZipCode(addressDoc.zipcode);
    }
    console.log("ทดสอบที่อยู่", addressDoc.zipcode);
  };
  console.log("ทดสอบอื่นๆ", zipCode);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button
          variant="contained"
          color="edit"
          onClick={() => handleClickOpen(addressData)}
        >
          แก้ไข
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ fontWeight: "bold" }}>ที่อยู่จัดส่ง</DialogTitle>
          <form onSubmit={handleForm} className="form">
            <DialogContent>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <TextField
                    variant="outlined"
                    label="บ้านเลขที่"
                    fullWidth
                    multiline
                    required
                    rows={4}
                    value={address}
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    options={provinces || []}
                    getOptionLabel={(option) => option.name_th || option}
                    value={String(provinceName)}
                    onChange={(e, newValue) => {
                      setSelected((prevState) => ({
                        ...prevState,
                        province_id: newValue ? newValue.id : provinceName,
                        amphure_id: undefined,
                        tambon_id: undefined,
                      }));
                      setProvinceName(
                        newValue ? newValue.name_th : provinceName
                      );
                    }}
                    fullWidth
                    required
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="จังหวัด" />
                    )}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    options={amphures || []}
                    getOptionLabel={(option) => option.name_th}
                    onChange={(e, newValue) => {
                      setSelected((prevState) => ({
                        ...prevState,
                        amphure_id: newValue ? newValue.id : undefined,
                        tambon_id: undefined,
                      }));
                    }}
                    fullWidth
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="อำเภอ/เขต" />
                    )}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    options={tambons || []}
                    getOptionLabel={(option) => option.name_th}
                    onChange={(e, newValue) => {
                      setSelected((prevState) => ({
                        ...prevState,
                        tambon_id: newValue ? newValue.id : undefined,
                      }));
                    }}
                    fullWidth
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="ตำบล" />
                    )}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    variant="outlined"
                    label="รหัสไปรษณีย์"
                    value={String(zipCode || "")}
                    fullWidth
                    required
                    size="small"
                  />
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
                sx={{
                  color: "error",
                  mb: 4,
                  "&:hover": {
                    backgroundColor: "#FE616A",
                    color: "#fff",
                  },
                }}
              >
                ยกเลิก
              </Button>

              <Button
                variant="contained"
                color="success"
                sx={{
                  color: "#fff",
                  mb: 4,
                  "&:hover": {
                    backgroundColor: "#A9C470",
                  },
                }}
                type="submit"
              >
                บันทึก
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
