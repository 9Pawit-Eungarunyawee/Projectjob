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
export default function Addressedit({
  addressData,
  onFormSubmitSuccess,
  addressIndex,
}) {
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
  const [tel, setTel] = React.useState(undefined);
  const [addressDoc, setAddressDoc] = React.useState(addressData);
  const [prevAddresses, setPrevAddresses] = React.useState([]);
  console.log("testtttttttttttttt", provinces);
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
  React.useEffect(() => {
    setPrevAddresses(addressData);
  }, [addressData]);
  // Inside handleForm function
  const handleForm = async (event) => {
    event.preventDefault();
    handleClose();
    const updatedAddressData = {
      tel: tel,
      address: address,
      amphure: amphureName,
      province: provinceName,
      tambon: tambonName,
      zipcode: zipCode,
    };

    try {
      const userData = { ...addressData };
      userData.addresses = userData.addresses || [];

      userData.addresses[addressIndex] = updatedAddressData;

      const { result, error } = await editAddress(
        "users",
        user.user.uid,
        addressIndex,
        updatedAddressData
      );

      // Handle success or error
      if (!error) {
        setAlert(<Alert severity="success">แก้ไขข้อมูลสำเร็จ</Alert>);
        onFormSubmitSuccess();
        setOpenAlert(true);
      } else {
        setAlert(
          <Alert severity="error">ผิดพลาด! ไม่สามารถแก้ไขข้อมูลได้</Alert>
        );
        setOpenAlert(true);
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
      setAlert(
        <Alert severity="error">ผิดพลาด! ไม่สามารถแก้ไขข้อมูลได้</Alert>
      );
      setOpenAlert(true);
    }
  };

  React.useEffect(() => {
    if (addressData) {
      setAddress(addressData.address);
    }
  }, [addressData]);

  const handleClickOpen = (addressData) => {
    setOpen(true);
    setAddressDoc(addressData);
    if (addressDoc) {
      setTel(addressDoc.tel);
      setAddress(addressDoc.address);
      setProvinceName(addressDoc.province);
      setAmphureName(addressDoc.amphure);
      setTambonName(addressDoc.tambon);
      setZipCode(addressDoc.zipcode);
    }
    console.log("ทดสอบที่อยู่", addressDoc);
  };
  console.log("ทดสอบอื่นๆ", zipCode);
  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setTel(value);
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
                    label="เบอร์โทรศัพท์"
                    fullWidth
                    required
                    value={tel}
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => {
                      const input = e.target.value;
                      // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                      if (/^\d*$/.test(input) || input === "") {
                        // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                        if (input === "" || parseInt(input) >= 0) {
                          handleInputChange(e);
                        }
                      }
                    }}
                  />
                </Grid>
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
                    options={provinces}
                    value={provinceName}
                    getOptionLabel={(option) => option.name_th || option}
                    onChange={(e, newValue) => {
                      setSelected((prevState) => ({
                        ...prevState,
                        province_id: newValue ? newValue.id : undefined,
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
                    value={amphureName}
                    getOptionLabel={(option) => option.name_th || option}
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
                    value={tambonName}
                    getOptionLabel={(option) => option.name_th || option}
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
                    disabled
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
