import Layout from "@/components/layout";
import { getCollection } from "@/firebase/getData";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function AddProduct() {
 
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <Layout>
      <Typography sx={{ mt: 5 }}>เพิ่มสินค้า</Typography>
      <Grid
        container
        spacing={1}
        sx={{
          width: "100%",
          mt: 3,
          backgroundColor: "#fff",
          p: 1,
          borderRadius: "10px",
          boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Grid item xs={12} sm={7}>
          <FormControl fullWidth>
            <TextField
              value={age}
              onChange={handleChange}
              size="small"
              select
              label="เลือกแคตตาล๊อค"
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </TextField>
            <TextField
              variant="outlined"
              label="ชื่อสินค้า"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={age}
              onChange={handleChange}
              size="small"
              select
              label="แบรนด์"
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
      </Grid>
    </Layout>
  );
}
