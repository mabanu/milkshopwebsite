import {Box, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import CardTemplate from "./card";
import {MilkModel} from "../models/milkModel";
import {milkAPI} from "../milkAPI";

function CardList() {
    const [products, setProducts] = useState<MilkModel[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

    useEffect(() => {
        function loadProducts() {
            setLoading(true);
            try {
                milkAPI.getAll()
                    .then(d => setProducts(d));

            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    return (
        <Box sx={{p: 5}}>
            <Grid container spacing={{xs: 6, md: 7}} columns={{xs: 4, sm: 8, md: 12}}>
                {products.map((product, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                        < CardTemplate product={product} loading={loading}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default CardList;
