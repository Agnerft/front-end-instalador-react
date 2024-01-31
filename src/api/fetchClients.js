export const fetchClients = async (query) => {
 

  const response = await fetch(`https://basesip.makesystem.com.br/clientes?documento=${query}`) ;
  
  const data = await response.json();
  
  
  console.log(response);

  return data;
  
};


// export default fetchClients;

