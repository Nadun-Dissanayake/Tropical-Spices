import { useLocation ,Outlet } from "react-router-dom";
import Navbar from "../Component/navbar.jsx";

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
                {/* Your footer content goes here */}
            </footer>
        </div>
    );
};

export default RootLayout;