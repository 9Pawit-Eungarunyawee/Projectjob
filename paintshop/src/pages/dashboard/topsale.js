import { Pagination, Stack } from "@mui/material";

export default function Topsale() {
    const styles = {
        pagination: {
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
          '& .MuiPaginationItem-root': {
            fontSize: '1vw',
          },
        },
      };
  return (
    <>
      <Stack spacing={2} >
        <Pagination count={3}  sx={styles.pagination} color="primary"/>
      </Stack>
    </>
  );
}
