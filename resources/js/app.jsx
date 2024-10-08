import "./bootstrap";
import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "@/Layout/Layout";

createInertiaApp({
    title: (title) =>
        title ? `${title} - Laravel Inertia` : "Laravel Inertia",
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

        // before apply layout
        // return pages[`./Pages/${name}.jsx`];

        // after apply layout
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            // default payout
            page.default.layout ||
            // use specific layout declared on page
            ((page) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#fff",
        showSpinner: true,
    },
});
