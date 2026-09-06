import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./layouts/AppShell";
import { RouteLoader } from "./components/loaders/RouteLoader";
import { RootErrorBoundary } from "./components/ui/RootErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ExpertisePage = lazy(() => import("./pages/ExpertisePage"));
const ExpertiseDetailPage = lazy(() => import("./pages/ExpertiseDetailPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<RouteLoader />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <RootErrorBoundary />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: "about", element: withSuspense(<AboutUsPage />) },
      { path: "expertise", element: withSuspense(<ExpertisePage />) },
      { path: "expertise/:slug", element: withSuspense(<ExpertiseDetailPage />) },
      { path: "projects", element: withSuspense(<ProjectsPage />) },
      { path: "faq", element: withSuspense(<FaqPage />) },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "privacy", element: withSuspense(<PrivacyPolicyPage />) },
      { path: "terms", element: withSuspense(<TermsPage />) },
      { path: "admin", element: withSuspense(<AdminPage />) },
      { path: "*", element: withSuspense(<NotFoundPage />) },
    ],
  },
]);
