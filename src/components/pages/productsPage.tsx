import CardList from "../card-components/cardList";
import {Autocomplete, Box, Grid, TextField} from "@mui/material";
import {useState} from "react";

function ProductsPage() {
    const [types, setTypes] = useState<string[]>(['']);
    const getTypes = (propTypes : string[]) => setTypes(propTypes);

    return (
        <main>
            <Grid container spacing={{xs: 10, md: 20}} sx={{p: 5}}>
                <Grid item>
            <TextField id="outlined-search" label="Search field" type="search" />
                </Grid>
                <Grid item>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={types}
                    getOptionLabel={(option) => option}
                    defaultValue={[types[13]]}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Filter Milk`s Type"
                            placeholder="Filter Milk`s Type"
                        />
                    )}
                />
                </Grid>
                </Grid>
            <CardList propTypes={getTypes}/>
        </main>
    );
}

export default ProductsPage;
