import axios from "axios";

export const getCoordinatesFromAddress = async (address) => {
  const addressString = `${address.number} ${address.street}, ${address.city}, ${address.state} ${address.cep}`;
  try {
    const response = await axios.get(
      `https://geocode.maps.co/search?q=${addressString}`
    );

    console.log("geooo", response.data[0]);
    const location = response.data[0];

    return location;
  } catch (error) {
    console.error("Erro ao obter coordenadas:", error);
    return null;
  }
};
