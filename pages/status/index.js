import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <DataBaseSatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";
  if (!isLoading && data) {
    updatedAtText = new Date(data.update_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DataBaseSatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let dataBaseStatusInformation = "Carregando...";

  if (!isLoading && data) {
    dataBaseStatusInformation = (
      <>
        <div>Versão: {data.database.version}</div>
        <div>Conexões abertas: {data.database.opened_connections}</div>
        <div>Conexões máximas: {data.database.max_connections}</div>
      </>
    );
  }

  return (
    <>
      <h2>Database</h2>
      <div>{dataBaseStatusInformation}</div>
    </>
  );
}
