import PropTypes from "prop-types";
import { useContext } from "react";
import PokemonContext from "../../context/pokemon/PokemonContext";
import { capitalize, Box, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StatsTable from "./StatsTable";
import Spinner from "../layout/Spinner";

const IndividualPokemonCard = ({ basicInfo, species }) => {
  const pokemonContext = useContext(PokemonContext);
  const { loading } = pokemonContext;

  const { name, id, stats, types } = basicInfo;
  const { habitat, is_legendary, generation, is_mythical } = species;

  const typeChips = types.map((type, index) => (
    <Chip
      color="primary"
      component="span"
      sx={{ mx: 1 }}
      key={index}
      label={capitalize(type.type.name)}
    />
  ));

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box component="div" sx={{ my: 6 }}>
      <Card
        elevation={6}
        sx={{
          width: {
            xs: "80%",
            sm: "70%",
            md: "50%",
          },
          margin: "0 auto",
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          image={basicInfo.sprites.other.home.front_default}
        />
        <CardContent>
          <Typography color="primary" gutterBottom variant="h5" component="div">
            {capitalize(name)}
            {is_legendary && (
              <Typography color="text.primary" component="span">
                {" "}
                (Legendary)
              </Typography>
            )}
            {is_mythical && (
              <Typography color="text.primary" component="span">
                {" "}
                (Mythical)
              </Typography>
            )}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {species.flavor_text_entries[habitat ? 9 : 1].flavor_text}
          </Typography>
          <Typography gutterBottom variant="body2" color="primary">
            ID:{" "}
            <Typography component="span" variant="body2" color="text.secondary">
              {id}
            </Typography>
          </Typography>
          <Typography gutterBottom variant="body2" color="primary">
            Generation:{" "}
            <Typography component="span" variant="body2" color="text.secondary">
              {capitalize(generation.name)}
            </Typography>
          </Typography>
          <Typography gutterBottom variant="body2" color="primary">
            Habitat:{" "}
            <Typography component="span" variant="body2" color="text.secondary">
              {habitat ? capitalize(habitat.name) : "Unknown"}
            </Typography>
          </Typography>
          <Typography gutterBottom variant="body2" color="primary">
            Type{typeChips.length >= 2 ? "s" : ""}: {typeChips}
          </Typography>
          <StatsTable stats={stats} />
        </CardContent>
      </Card>
    </Box>
  );
};

IndividualPokemonCard.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  species: PropTypes.object.isRequired,
};

export default IndividualPokemonCard;
