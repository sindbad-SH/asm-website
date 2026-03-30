import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"}>
        <ComingSoon
          title="The Dispatch"
          subtitle="Stories, insights, and field notes. Coming soon."
        />
      </Route>
      <Route path={"/events"}>
        <ComingSoon
          title="The Calendar"
          subtitle="Events worth your time. Coming soon."
        />
      </Route>
      <Route path={"/resources"}>
        <ComingSoon
          title="Tools I Use"
          subtitle="Recommendations and resources. Coming soon."
        />
      </Route>
      <Route path={"/book"}>
        <ComingSoon
          title="Book a Call"
          subtitle="Coming soon."
        />
      </Route>
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
