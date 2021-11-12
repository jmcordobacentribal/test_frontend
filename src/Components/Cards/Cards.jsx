import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Modals from "../Modal/Modal";

const Cards = ({ heroe }) => {
  const { image, name } = heroe;
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia component="img" height="500" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Modals heroes={heroe} />
      </CardActions>
    </Card>
  );
};

export default Cards;
