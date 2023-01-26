import CardList from "../card-components/cardList";
import {Button} from "@mui/material";
import React, {useState} from "react";

function ProductsPage() {
    const [types, setTypes] = useState<string[]>(['']);
    const getTypes = (propTypes: string[]) => setTypes(propTypes);

    return (
        <main>
            <Button onClick={() => console.log(types)}>types</Button>
            <CardList propTypes={getTypes}/>
        </main>
    );
}

export default ProductsPage;
