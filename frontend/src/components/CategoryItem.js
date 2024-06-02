import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
//import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
//import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
//import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
//import Button from "@mui/material/Button";
//import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CategoryItem = ({ data }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "row", maxWidth: 200, m:2, borderRadius: '16px', boxShadow: "5px 5px 5px yellow" }}>
      <CardActionArea component={RouterLink} to={`/category/${data.cid}`}>
      <CardMedia
        component="img"
        sx={{ width: 'auto' }}
        image={data?.image ? data.image.image : ""}
        alt={data.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>
          
        
          
        </CardContent>
        
      </Box>
      </CardActionArea>
    </Card>
  );
}
export default CategoryItem;



