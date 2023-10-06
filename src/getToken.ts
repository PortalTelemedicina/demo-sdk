export const getToken = async () => {
  // this call should be done in the backend
  return fetch("https://dev.auth.screening.portaltelemedicina.com.br/api/auth/v1/signin/email/token", {
    method: "POST",
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json",
      Cookie:
        ".ptm.application.id=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Il90ZXN0X2ZhY2Vib29rX2hjYWRtaW5AcHRtLmNvbSIsIm5hbWVpZCI6IjE5ODc2M2NiLTBlNDctNDNhZi05YTllLThmNGExNWUwM2NiZCIsInJvbGUiOiJoZWFsdGhjZW50ZXJhZG1pbiIsImF1dGhfdXNlcl9pZCI6IjI3OTNiZWQ5LTlmMWYtNDY1ZC1iMDM3LWY2YmNkYTFjYWQyZCIsInByb2ZpbGVfaWQiOiI3OTMwYjk0Yi02NjZhLTRmOGEtYmJkNS1lNTI2ZGU3ZWM0MGMiLCJoZWFsdGhfY2VudGVyX2lkIjoiMzAyMWNhYTEtZWRhNC00YjBjLTk2ZjItMWEwNTgxM2MxZTQxIiwiZGV2aWNlX2lkIjoiIiwibmJmIjoxNjk2MzU4NTgzLCJleHAiOjE2OTYzNTk0ODMsImlhdCI6MTY5NjM1ODU4M30.5hu0uuLr2bG6_aayvSQb3EYxIqhEBPGIQyeTeVcCoX4",
    },
    body: '{"credentials":{"username":"patrick+exemplodemosdk@portaltelemedicina.com.br","password":"WrfX1759"}}',
  }).then((response) => response.json());
};
