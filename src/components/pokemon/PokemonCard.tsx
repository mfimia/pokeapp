import { useEffect, useState } from "react";
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
import { PokemonListType } from "../../context/pokemon/PokemonContext";
import { emptyPokemonDescription } from "../../utils/emptyPokemonDescription";
import { emptyPokemonData } from "../../utils/emptyPokemonData";

const PokemonCard = ({ name }: PokemonListType["pokemon"]) => {
  const [expanded, setExpanded] = useState(false);
  const [pokemonDescription, setPokemonDescription] = useState(
    emptyPokemonDescription
  );

  const [pokemonCardData, setPokemonCardData] = useState(emptyPokemonData);

  const getPokemonCardData = async () => {
    const basicInfo = await P.getPokemonByName(name);
    const species = await P.getPokemonSpeciesByName(name);
    const speciesText = species.flavor_text_entries[9].flavor_text;
    setPokemonDescription((prev) => {
      return {
        ...prev,
        basicInfo,
      };
    });
    setPokemonCardData((prev) => {
      return { ...prev, basicInfo, speciesText };
    });
  };

  const handleExpandClick = () => setExpanded((prev) => !prev);

  useEffect(() => {
    getPokemonCardData();
    return () => setPokemonCardData(emptyPokemonData);
    // eslint-disable-next-line
  }, []);

  if (pokemonCardData.basicInfo.id !== 0) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={2}>
          <CardHeader
            avatar={<Avatar>{pokemonCardData.basicInfo.id}</Avatar>}
            title={<Typography fontWeight={500}>{capitalize(name)}</Typography>}
            subheader={capitalize(
              pokemonDescription.basicInfo.types[0].type.name
            )}
          />
          <CardActionArea onClick={handleExpandClick}>
            <CardMedia
              component="img"
              image={pokemonCardData.basicInfo.sprites.front_default}
              alt={name}
            />
          </CardActionArea>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <PokemonDescription
              speciesText={pokemonCardData.speciesText}
              basicInfo={pokemonDescription.basicInfo}
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

export default PokemonCard;
