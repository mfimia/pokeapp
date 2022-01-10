import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { Typography, CardActionArea, Box, capitalize } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import PokemonDescription from "./PokemonDescription";
import CardSkeleton from "../layout/CardSkeleton";
import { P } from "../../utils/Pokedex";

const PokemonCard = ({ pokemon }) => {
  const [expanded, setExpanded] = useState(false);

  const [pokemonData, setPokemonData] = useState({
    basicInfo: null,
    species: null,
  });

  const getPokemonData = async () => {
    const basicInfo = await P.getPokemonByName(pokemon.name);
    const species = await P.getPokemonSpeciesByName(pokemon.name);
    setPokemonData((prev) => {
      return { ...prev, basicInfo, species };
    });
  };

  const handleExpandClick = () => setExpanded((prev) => !prev);

  useEffect(() => {
    getPokemonData();
    // eslint-disable-next-line
  }, []);

  if (pokemonData.basicInfo) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={2}>
          <CardHeader
            avatar={<Avatar>{pokemonData.basicInfo.id}</Avatar>}
            title={
              <Typography fontWeight={500}>
                {capitalize(pokemon.name)}
              </Typography>
            }
            subheader={capitalize(pokemonData.basicInfo.types[0].type.name)}
          />
          <CardActionArea onClick={handleExpandClick}>
            <CardMedia
              component="img"
              image={pokemonData.basicInfo.sprites.front_default}
              alt={pokemon.name}
            />
          </CardActionArea>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <PokemonDescription
              species={pokemonData.species}
              basicInfo={pokemonData.basicInfo}
            />
          </Collapse>
        </Card>
      </Grid>
    );
  }

  return (
    <Box display="inline-block">
      <CardSkeleton />
    </Box>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
