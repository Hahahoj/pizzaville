import ProductsPage from "./ProductsPage";
import AuthPage from "./AuthPage"

export default function StartPage() {

    if (!(global.log)) {
        return (
            <AuthPage />
        );
    } else {
        return (
            <ProductsPage />
        );
    };
};