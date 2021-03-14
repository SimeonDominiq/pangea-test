import HomePage from 'components/HomePage';

const Routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: HomePage,
    },
];

export default Routes;
