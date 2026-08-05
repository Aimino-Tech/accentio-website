import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <>
    <Helmet>
      <title>404 — Accentio</title>
    </Helmet>
    <div className="py-20 sm:py-24 lg:py-32 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-semibold mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <Link to="/">
          <Button>Go home</Button>
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
