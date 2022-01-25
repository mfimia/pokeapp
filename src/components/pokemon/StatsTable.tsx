import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { PokemonTypes } from "../../context/pokemon/PokemonContext";

const tableFonts = {
  title: {
    xs: 15,
  },
  body: {
    xs: 14,
  },
};

interface StatsType {
  stats: PokemonTypes["basicInfo"]["stats"];
}

const StatsTable = ({ stats }: StatsType) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography
                fontSize={tableFonts.title}
                color="primary"
                fontWeight={700}
              >
                HP
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography
                fontSize={tableFonts.title}
                color="primary"
                fontWeight={700}
              >
                ATK
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography
                fontSize={tableFonts.title}
                color="primary"
                fontWeight={700}
              >
                DEF
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography fontSize={tableFonts.body}>
                {stats[0].base_stat}
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography fontSize={tableFonts.body}>
                {stats[1].base_stat}
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography fontSize={tableFonts.body}>
                {stats[2].base_stat}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography
                fontSize={tableFonts.title}
                color="primary"
                fontWeight={700}
              >
                S-ATK
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography
                fontSize={tableFonts.title}
                color="primary"
                fontWeight={700}
              >
                S-DEF
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ p: 1.4 }}>
              <Typography
                fontSize={tableFonts.title}
                color="primary"
                fontWeight={700}
              >
                SPD
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ border: 0, p: 1.4 }}>
              <Typography fontSize={tableFonts.body}>
                {stats[3].base_stat}
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 0, p: 1.4 }}>
              <Typography fontSize={tableFonts.body}>
                {stats[4].base_stat}
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ border: 0, p: 1.4 }}>
              <Typography fontSize={tableFonts.body}>
                {stats[5].base_stat}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatsTable;
