import { Box, capitalize, CardActionArea, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { PokemonListType } from "../../context/pokemon/PokemonContext";
import { emptyPokemonData } from "../../utils/emptyPokemonData";
import { emptyPokemonDescription } from "../../utils/emptyPokemonDescription";
import { P } from "../../utils/Pokedex";
import CardSkeleton from "../layout/CardSkeleton";
import PokemonDescription from "./PokemonDescription";

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
