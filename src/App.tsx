import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import { PortalSdk } from "@ptm-screening/portal-sdk";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { getToken } from "./getToken";

type TokeStateType = {
  value: string;
  isLoading: boolean;
  isError: boolean;
};

let portalSDK: PortalSdk | undefined;

function App() {
  const [token, setToken] = useState<TokeStateType>({
    value: "",
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    if (token.isLoading || token.value) {
      return;
    }

    setToken({ value: "", isLoading: true, isError: false });

    getToken()
      .then((response) => {
        setToken({ value: response.token, isLoading: false, isError: false });
      })
      .catch(() => {
        setToken({ value: "", isLoading: false, isError: true });
      });
  }, [token]);

  useEffect(() => {
    if (token.value) {
      portalSDK = new PortalSdk({
        containerId: "portal-sdk-container",
        iframeSDKUrl: import.meta.env.DEV
          ? "http://localhost:3003"
          : "https://dev.app.screening.portaltelemedicina.com.br/",
        token: token.value,
      });

      portalSDK.initialize();
    }

    return () => {
      portalSDK?.destroy();
    };
  }, [token.value]);

  if (token.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ResponsiveAppBar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "4px 0",
        }}
      >
        <Button
          variant="outlined"
          onClick={() =>
            portalSDK?.startVitalMeasurement({
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
          Iniciar medidas vitais
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            portalSDK?.startPatientAppointment(
              "a.garbiati+qc+p1@portaltelemedicina.com.br"
            )
          }
        >
          Iniciar consulta paciente
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            portalSDK?.startDoctorAppointment(
              "a.garbiati+qc+spec2@portaltelemedicina.com.br"
            )
          }
        >
          Iniciar consulta médico
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            portalSDK?.startOperatorAppointment(
              "a.garbiati+qc+op1@portaltelemedicina.com.br"
            )
          }
        >
          Iniciar consulta operador
        </Button>
      </div>
      <div id="portal-sdk-container"></div>
    </div>
  );
}

export default App;
