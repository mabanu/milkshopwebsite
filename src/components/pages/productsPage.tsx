import CardList from "../card-components/cardList";
import {useEffect, useState} from "react";
import {MilkModel} from "../models/milkModel";
import {milkAPI} from "../milkAPI";

function ProductsPage() {

    return (
        <>
            <CardList />
        </>
    );
}

export default ProductsPage;
