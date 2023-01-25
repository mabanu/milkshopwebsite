import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, Skeleton} from '@mui/material';
import {MilkModel} from "../models/milkModel";
import {ShoppingCartRounded} from "@mui/icons-material";

interface IProduct {
    product: MilkModel
    loading: boolean
}
function CardTemplate(props: IProduct) {
    const { product } = props


    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                {props.loading ? (
                    <Skeleton sx={{height: 140}} animation="wave" variant="rectangular" />
                ) : (
                <CardMedia
                    component="img"
                    height="140"
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pTYJDnQuER-Jz4nCymS_lgHaHa%26pid%3DApi&f=1&ipt=ff2ecab549ce9e4e33b7d7395507079aed95142218dc7b89ae41148c1900cf05&ipo=images"
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
            </CardActionArea>
            <Button variant="outlined" startIcon={<ShoppingCartRounded />}>
                Add to Cart
            </Button>
        </Card>
    );
}

export default CardTemplate;
