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
} from "@mui/material";
import addAddress from "@/firebase/addAddresses";
import { useAuthContext } from "@/context/AuthContext";
import { getUser } from "@/firebase/getData";
export default function Addressdialog() {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState(null);
  const [provinces, setProvinces] = React.useState([]);
  const [amphures, setAmphures] = React.useState([]);
  const [tambons, setTambons] = React.useState([]);
  const [zipCode, setZipCode] = React.useState(undefined);
  const [provinceName, setProvinceName] = React.useState(undefined);
  const [amphureName, setAmphureName] = React.useState(undefined);
  const [tambonName, setTambonName] = React.useState(undefined);
  const [zipNum, setZipNum] = React.useState(undefined);
  const [userData, setUserData] = React.useState(null);
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
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    const collection = "users";
    const uid = user.user.uid;
    const { result, error } = await getUser(collection, uid);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const user = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
      }));

      setUserData(user);
    }
  };
  const handleForm = async (event) => {
    event.preventDefault();
    console.log("Handling form submission");
    handleClose();

    const addAddresses = {
      address,
      provinceName,
      amphureName,
      tambonName,
      zipCode,
      tel,
    };

    console.log("Submitting form with data:", addAddresses);

    const { result, error } = await addAddress(
      "users",
      user.user.uid,
      addAddresses
    );
    fetchAllData();
  };

  const handleFormSubmitSuccess = () => {
    fetchAllData();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} sx={{ color: "#018294" }}>
        เพิ่มที่อยู่
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
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Autocomplete
                  disablePortal
                  options={provinces}
                  getOptionLabel={(option) => option.name_th}
                  onChange={(e, newValue) => {
                    setSelected((prevState) => ({
                      ...prevState,
                      province_id: newValue ? newValue.id : undefined,
                      amphure_id: undefined,
                      tambon_id: undefined,
                    }));
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
                  value={zipCode || ""}
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
        </form>
      </Dialog>
    </React.Fragment>
  );
}
