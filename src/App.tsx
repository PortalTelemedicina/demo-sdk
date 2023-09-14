import { useEffect } from "react";

import { PortalSdk } from "portal-sdk";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const portalSDK = new PortalSdk({
  containerId: "portal-sdk-container",
});

function App() {
  useEffect(() => {
    portalSDK.initialize();

    return () => {
      portalSDK.destroy();
    };
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
      <div id="portal-sdk-container"></div>
    </div>
  );
}

export default App;
