import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActions, IconButton, Skeleton} from '@mui/material';
import {MilkModel} from "../models/milkModel";
import {ShoppingCartRounded} from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import milkPhoto from './milk.png';
import {milkAPI} from "../milkAPI";

interface IProduct {
    product: MilkModel
    loading: boolean
}

function CardTemplate(props: IProduct) {
    const {product} = props

    return (
        <Card sx={{maxWidth: 345}}>
            {props.loading ? (
                <Skeleton sx={{height: 140}} animation="wave" variant="rectangular"/>
            ) : (
                <CardMedia
                    component="img"
                    image={milkPhoto}
                    alt="milk product"
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{minHeight: 70}}>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type: {product.type}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    Storage: {product.storage}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <Button variant="outlined" startIcon={<ShoppingCartRounded/>}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardTemplate;
