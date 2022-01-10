import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const CardSkeleton = () => {
  return (
    <Stack spacing={2} m={2} px={2} pt={2}>
      <Skeleton variant="text" width={210} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={218} />
    </Stack>
  );
};

export default CardSkeleton;
