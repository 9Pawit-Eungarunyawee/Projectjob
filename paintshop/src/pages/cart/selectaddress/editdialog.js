import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  DialogActions,
  Box,
} from "@mui/material";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import searchUser from "@/firebase/searchData";
export default function SelectAddressDialog({ onSelectAddress }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();
  const user = useAuthContext();
  const [addressData, setAddressData] = React.useState(null);
  const [selectedAddressIndex, setSelectedAddressIndex] = React.useState(-1);
  React.useEffect(() => {
    handleSearch("");
  }, []);
  const debouncedSearchUser = debounce(async (term) => {
    const uid = user.user.uid;
    try {
      const collectionName = "users";
      const field = "name";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.uid == uid);
      setAddressData(filteredResults[0]?.addresses);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };
  const [open, setOpen] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddressChange = (event, index) => {
    setSelectedAddressIndex(index);
  };

  const handleConfirm = () => {
    onSelectAddress(selectedAddressIndex);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} sx={{ color: "#018294" }}>
        เปลี่ยนที่อยู่
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          variant="h4"
          sx={{
            fontWeight: "bold",
            pb: 2,
            color: "#018294",
            fontSize: "30px",
          }}
        >
          เลือกที่อยู่
        </DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="address"
              name="address"
              value={selectedAddressIndex.toString()}
              onChange={handleAddressChange}
            >
              {addressData &&
                addressData.map((address, index) => (
                  <Box key={index}>
                    <FormControlLabel
                      sx={{
                        mt: 2, // margin-top
                        mb: 2,
                      }}
                      value={index.toString()}
                      control={<Radio />}
                      label={`${address.address} อำเภอ ${address.amphure} ตำบล ${address.tambon} จังหวัด ${address.province}`}
                    />
                    <Box sx={{ borderBottom: "1px solid #CCC" }}></Box>
                  </Box>
                ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
