import { useLocation ,Outlet } from "react-router-dom";
import Navbar from "../Component/navbar.jsx";
import Footer from "../Component/footer.jsx";

const RootLayout = () => {

    const location = useLocation();
    const isSignInPage = location.pathname === '/signIn';
    const isSignOutPage = location.pathname === '/signOut'; 

    return (
        <div>
            {/* Header */}
            <header>
                {!isSignInPage && !isSignOutPage && <Navbar />}
            </header>

            {/* Main content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;