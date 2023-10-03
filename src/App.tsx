import { useEffect } from "react";
import { Button } from "@mui/material";

import { PortalSdk } from "@ptm-screening/portal-sdk";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const portalSDK = new PortalSdk({
  containerId: "portal-sdk-container",
  iframeSDKUrl: "https://comforting-bublanina-d11568.netlify.app/",
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

      <Button
        variant="outlined"
        onClick={() =>
          portalSDK.startVitalMeasurement({
            age: 30,
            height: 180,
            antihypertensive: "1",
            bloodpressuremedication: "1",
            diabetes: "type1",
            gender: "male",
            identifier: "123456789",
            smoking: "0",
            weight: 80,
          })
        }
      >
        Start
      </Button>
    </div>
  );
}

export default App;
