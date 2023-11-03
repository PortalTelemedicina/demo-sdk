## Introdução

Esta biblioteca fornece uma forma eficiente de coletar e gerenciar sinais vitais. Ela é projetada para ser fácil de integrar e usar em qualquer projeto que necessite de monitoramento de saúde.

## Instalação

```bash
npm install @ptm-screening/portal-sdk
```

```ts
import { PortalSdk } from "@ptm-screening/portal-sdk";
```

## Interfaces

### `portalTelemedicinaSDK()`

#### Parâmetros

- `containerId: string` - Chave de API utilizada para autenticar com a Portal Telemedicina
- `iframeSDKUrl: string` - URL do iframe utilizado pela SDK
- `token: string` - Token de autenticação utilizado para autenticar com a Portal Telemedicina

#### Exemplo de Uso

```ts
const portalSDK = new PortalSdk({
  containerId: "portal-sdk-container",
  iframeSDKUrl: "https://dev.app.screening.portaltelemedicina.com.br",
  token: token,
});
```

# Sinais Vitais

### `startVitalMeasurement()`

#### Parâmetros

- `identifier: String` - CPF do usuário. (Obrigatório)
- `containerId: String` - ID do contêiner onde o componente será renderizado. (Obrigatório)
- `age: Int` - Idade do usuário em anos.
- `height: Int` - Altura do usuário em centímetros.
- `weight: Int` - Peso do usuário em quilogramas.
- `gender: string` - Sexo do usuário. Valores possíveis: "male" ou "female".
- `smoking: string` - Indica se o usuário é fumante. Valores possíveis: "0" ou "1".
- `antihypertensive: string` - Indica se o usuário tem hipertensão. Valores possíveis: `true` ou `false`.
- `diabetes: string` - Tipo de diabetes. Valores possíveis: "type1" ou "type2".
- `bloodpressuremedication: string` - Indica se o usuário toma medicamentos para pressão alta. Valores possíveis: `1` ou `0`.

##### Exemplos de Uso

```ts
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
});
```

# Videochamada

## startPatientAppointment(`email`)
#### Parâmetros
- `email: string` - Email do paciente (Obrigatorio)
##### Exemplo de Uso
```ts
<Button
  variant="outlined"
  onClick={() =>
    portalSDK.startPatientAppointment(
      "a.garbiati+qc+p1@portaltelemedicina.com.br"
    )
  }
>
  Iniciar consulta médico
</Button>
```

## startDoctorAppointment(`email`)
#### Parâmetros
- `email: string` - Email do operador (Obrigatorio)
##### Exemplo de Uso
```ts
<Button
  variant="outlined"
  onClick={() =>
    portalSDK.startOperatorAppointment(
      "a.garbiati+qc+op1@portaltelemedicina.com.br"
    )
  }
>
  Iniciar consulta operador
</Button>
```

## startOperatorAppointment(`email`)
#### Parâmetros
- `email: string` - Email do médico (Obrigatorio)
##### Exemplo de Uso
```ts
<Button
  variant="outlined"
  onClick={() =>
    portalSDK.startPatientAppointment(
      "a.garbiati+qc+p1@portaltelemedicina.com.br"
    )
  }
>
  Iniciar consulta paciente
</Button>
```
