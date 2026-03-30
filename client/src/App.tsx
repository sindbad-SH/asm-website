import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FieldNotes from "./pages/FieldNotes";
import Arsenal from "./pages/Arsenal";
import TheMap from "./pages/TheMap";
import LetsConnect from "./pages/LetsConnect";
import StoryTest from "./pages/StoryTest";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/field-notes"} component={FieldNotes} />
      <Route path={"/arsenal"} component={Arsenal} />
      <Route path={"/map"} component={TheMap} />
      <Route path={"/connect"} component={LetsConnect} />
      <Route path={"/story-test"} component={StoryTest} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
