import Home from "./pages/Home";
import Privacy from "./pages/Privacy"
import TermsOfUse from "./pages/TermsOfUse";


const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        name: 'Home',
    },
    {
        path: '/privacy-policy',
        element: <Privacy />,
        name: 'Privacy',
    },
    {
        path: '/terms-of-use',
        element: <TermsOfUse />,
        name: 'Terms',
    },
];

export default AppRoutes;
