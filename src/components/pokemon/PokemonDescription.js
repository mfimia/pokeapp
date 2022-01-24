import PropTypes from "prop-types";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import {
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  capitalize,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "../layout/TabPanel";
import StatsTable from "./StatsTable";

const PokemonDescription = ({ basicInfo, species }) => {
  const [value, setValue] = useState(0);
  const { stats, types, weight, moves } = basicInfo;

  const handleChange = (_, newValue) => setValue(newValue);

  const typeChips = types.map((type, index) => (
    <Chip
      color="primary"
      sx={{ mx: 1 }}
      key={index}
      label={capitalize(type.type.name)}
    />
  ));

  const movesList = moves.map((move, index) => (
    <ListItem sx={{ p: 0 }} key={index}>
      <ListItemText
        primary={
          <Typography fontSize="medium">
            {capitalize(move.move.name)}
          </Typography>
        }
        secondary={
          <Typography color="text.secondary" fontSize="small">
            Game: {capitalize(move.version_group_details[0].version_group.name)}
          </Typography>
        }
      />
    </ListItem>
  ));

  return (
    <CardContent>
      <Typography color="text.secondary" fontSize="small">
        {species.flavor_text_entries[9].flavor_text}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Pokemon description"
          variant="fullWidth"
          centered
        >
          <Tab label="Stats" />
          <Tab label="Types" />
          <Tab label="Moves" />
        </Tabs>
      </Box>
      <TabPanel component="div" value={value} index={0}>
        <StatsTable stats={stats} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography mb={2} fontSize="medium">
          Weight: {weight}kg
        </Typography>
        {typeChips}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <List sx={{ height: 150, overflow: "auto" }}>{movesList}</List>
      </TabPanel>
    </CardContent>
  );
};

PokemonDescription.propTypes = {
  species: PropTypes.object.isRequired,
  basicInfo: PropTypes.object.isRequired,
};

export default PokemonDescription;
