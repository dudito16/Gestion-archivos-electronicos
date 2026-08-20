import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

/** Shell shared by every route: sticky header, fixed sidebar, animated page outlet, footer. */
export function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md transition-theme">
      <Header />
      <div className="flex flex-col lg:flex-row w-full max-w-container-max mx-auto">
        <Sidebar />
        <main className="flex-1 w-full lg:ml-sidebar-width p-md md:p-lg lg:p-xl space-y-xl pt-24 lg:pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </div>
  );
}
