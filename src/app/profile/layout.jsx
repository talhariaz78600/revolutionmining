
import "@/assets/css/customer-dashboard.css"
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "@/components/profile/Sidebar";
export const metadata = {
    title: "Profile",
    description: "The purpose of this application is provide services to clients",
};
export default function RootLayout({ children }) {
    return (
        <div>
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
                <div className="dis-flex dashboard">
                    <Sidebar />
                    <div className="customer account">
                        {children}
                    </div>
                </div>
            </main>
        </div>

    );
}