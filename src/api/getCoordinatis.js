import axios from "axios";

export const getCoordinatesFromAddress = async (address) => {
  const addressString = `${address.street} - ${address.neighborhood}, ${address.city}, ${address.state} ${address.cep}`;

  console.log(process.env.REACT_APP_API_KEY_GEOCOD);
  try {
    const response = await axios.get(
      `https://geocode.maps.co/search?q=${addressString}&api_key=${process.env.REACT_APP_API_KEY_GEOCOD}`
    );

    const location = response.data[0];

    console.log(location, "LOCATION");

    return location;
  } catch (error) {
    console.error("Erro ao obter coordenadas:", error);
    return null;
  }
};
