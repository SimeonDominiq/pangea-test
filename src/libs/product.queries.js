import gql from 'graphql-tag';

export const GET_PRODUCTS = (currency) => {
    return gql`
        query products {
            products {
                id
                title
                image_url
                price(currency: ${currency})
            }
        }
    `;
};
