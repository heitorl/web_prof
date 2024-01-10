import { FaMapMarked } from "react-icons/fa";
import GoogleMapWithGeocoding from "../LocationMap";
import { Container } from "./style";

export const MapComponnet = ({ user }) => {
  return (
    <Container>
      <div className="ctn-title">
        <h3>Endereço</h3>
        <FaMapMarked />
      </div>
      <GoogleMapWithGeocoding addressData={user.address} />
    </Container>
  );
};
