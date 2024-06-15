import "./globals.css";
import "../assets/css/base.css"
import "../assets/css/bold-options.css"
import "../assets/css/bsub.scss.css"
import "../assets/css/component-card.css"
import "../assets/css/component-cart-items.css"
import "../assets/css/component-cart-notification.css"
import "../assets/css/component-facets.css"
import "../assets/css/component-list-menu.css"
import "../assets/css/component-list-payment.css"
import "../assets/css/component-loading-overlay.css"
import "../assets/css/component-list-social.css"
import "../assets/css/component-newsletter.css"
import "../assets/css/component-menu-drawer.css"
import "../assets/css/component-newsletter.css"
import "../assets/css/component-rating.css"
import "../assets/css/disclosure.css"
import "../assets/css/section-footer.css"
import "../assets/css/section-rich-text.css"
import "../assets/css/template-collection.css"
import "../assets/css/component-menu-drawer.css"
import "../assets/css/component-price.css"
import "../assets/css/component-search.css"
import "../assets/css/component-rte.css"
import "../assets/css/custom.css"
import '../assets/css/customer-dashboard.css'
import "../assets/css/component-card.css"
import Headernav from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Missdrop from "@/components/missdrop/Missdrop";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Suspense } from "react";
export const metadata = {
  title: "Revolution",
  description: "The purpose of this application is provide services to clients",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
        <Headernav />
        </Suspense>
        <Missdrop />
        {children}
        <ToastContainer className="w-[380px]" position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <Footer />
        <script src="https://kit.fontawesome.com/94794741f1.js" crossorigin="anonymous"></script>
        <script src="https://www.paypal.com/sdk/js?client-id=ASBc1CfwUgwGrRf2YIXleQ8dJou3JaMh4hOR-lhCVh5LMlwi_mFGq5sXSEAo1S8AJT9TwSO1OZoU_j1i"></script>
      </body>
    </html>
  );
}