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

### `startVitalMeasurement(patientData, options)`

Ira iniciar a medição de sinais vitais, inicialmente tenta abrir uma nova aba para a medição, caso não seja possível ira abrir na mesma aba.

#### Parâmetros

#### patientData

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

##### options (Opcional)

- `timeout: Int` - Tempo limite para a medição em segundos. (Opcional)

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

### `onError(callback)`

#### Parâmetros

- `callback: Function` - Função que será executada quando ocorrer um erro.

#### Retorno

- `error: {type: string}` - Objeto com informações do erro. Sendo eles:

  - **MISSING_MEASUREMENT_IDENTIFIER:** O campo identificador está ausente no objeto PROFILE_DATA.
  - **INVALID_AGE:** O valor da idade é inválido.
  - **INVALID_WEIGHT:** O valor do peso é inválido.
  - **INVALID_HEIGHT:** O valor da altura é inválido.
  - **INVALID_BMI:** Os valores fornecidos para peso e altura representam um valor de IMC inválido.
  - **MEASUREMENT_CANCELED:** A medição foi cancelada pelo usuário.
  - **TOKEN_EXPIRED:** O token de autorização expirou.
  - **WORKER_ERROR:** Ocorreu um erro no servidor ao processar uma carga.
  - **MEASUREMENT_TIMED_OUT:** Se, após o envio de um fragmento ou durante a espera pelos resultados finais, nenhuma resposta for recebida da API por 60 segundos devido a problemas de rede, esse erro é retornado.
  - **CAMERA_PERMISSION_NOT_GRANTED:** A permissão da câmera foi negada pelo usuário.
  - **TIMELIMIT_EXCEEDED:** O tempo limite de medição foi excedido.

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
