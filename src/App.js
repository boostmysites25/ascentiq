import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { routes } from "./constant";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

AOS.init({
  once: true,
  duration: 1000,
  easing: "ease-in-out-quart",
  throttleDelay: 200,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingSpinner />}>
        <SpinnerContextProvider>
          <Router>
            <LoadingSpinnerContext />
            <WhatsAppIcon />
            <ScrollToTop />
            <Toaster
              position="top-bottom"
              toastOptions={{
                style: {
                  background: "#010C2A",
                  color: "#ffffff",
                },
              }}
            />
            <Routes>
              {/* Website pages */}
              {routes.map((route) => (
                <Route path={route.path} element={route.element} />
              ))}

              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/thank-you" element={<ThankYou />} />

              {/* Blog pages */}
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />

              {/* Landing pages */}
              <Route
                path="/web-development"
                element={<LandingPage page={"web-development"} />}
              />
              <Route
                path="/app-development"
                element={<LandingPage page={"app-development"} />}
              />
            </Routes>
          </Router>
        </SpinnerContextProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
