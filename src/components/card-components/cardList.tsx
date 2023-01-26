import {Autocomplete, Box, Button, Grid, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import CardTemplate from "./card";
import {MilkModel} from "../models/milkModel";
import {milkAPI} from "../milkAPI";

interface IPropTypes {
    propTypes: (x: string[]) => void
}

function CardList(props: IPropTypes) {
    const [products, setProducts] = useState<MilkModel[]>([]);
    const [filterProducts, setFilterProducts] = useState<MilkModel[]>(products);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filtersInput, setFiltersInput] = useState<string[]>([''])

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

    useEffect(() => {
        async function loadProducts() {
            setLoading(true);
            try {
                await milkAPI.getAll()
                    .then(d => {
                        setProducts(d);
                        setFilterProducts(d);
                    });

                props.propTypes(passPropType);
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

    let typesRender = products.map((m) => m.type);
    let passPropType = Array.from(new Set(typesRender));

    const filterItem = (curcat: string) => {
        if (curcat === '') {
            return products;
        }
        let newItem: MilkModel[];
        newItem = products.filter((newVal: MilkModel) => {
            return newVal.type === curcat;
            // comparing category for displaying data
        });
        return newItem;
    };

    const multipleFilterItem = (multipleFilter: string[]) => {
        if (multipleFilter.length === 0) {
            return products
        }
        let data: MilkModel[] = [];
        multipleFilter.map((filter) => data = data.concat(filterItem(filter)));
        return data;
    }

    useEffect(() => {
        setFilterProducts(multipleFilterItem(filtersInput));
    }, [filtersInput])


    return (<Box sx={{p: 5}}>
        <Button onClick={() => console.log(filterProducts)}>filter</Button>
        <Button onClick={() => console.log(filtersInput)}>multiple filter</Button>
        <Autocomplete
            multiple
            id="tags-standard"
            options={passPropType}
            getOptionLabel={(option) => option}
            defaultValue={['']}
            onChange={(e, value) => {
                setFiltersInput(value);
            }}
            renderInput={(params) => (<TextField
                {...params}
                variant="standard"
                label="Milk`s Type"
                placeholder="Milk`s Type"
            />)}
        />
        {loading ? (<div>wait</div>) : (<Grid container spacing={{xs: 6, md: 7}} columns={{xs: 4, sm: 8, md: 12}}>
            {filterProducts?.map((product, index) => (<Grid item xs={4} sm={4} md={4} key={index}>
                < CardTemplate product={product} loading={loading}/>
            </Grid>))}
        </Grid>)}
    </Box>)
}

export default CardList;
