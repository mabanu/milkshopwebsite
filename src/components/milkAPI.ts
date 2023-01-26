import {MilkModel} from "./models/milkModel";

const baseUrl = 'http://localhost:7138';
const url = `${baseUrl}/api/MilkProducts`;

const milkAPI = {


    async getAll() {
        const response = await fetch('https://localhost:7138/api/MilkProducts')
        return await response.json()
    },

    put(product: MilkModel) {
        return fetch(`${url}/${product.id}`, {
            method: 'PUT', body: JSON.stringify(product), headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(r => r.json())
            .catch((error: TypeError) => {
                console.log('log client error ' + error);
                throw new Error('There was an error updating the product. Please try again.');
            });
    },

    find(id: number) {
        return fetch(`${url}/${id}`)
            .then(r => r.json())
    },
};

export {milkAPI};
