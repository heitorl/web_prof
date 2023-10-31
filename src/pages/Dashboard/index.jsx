import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { Container, Content } from "./style"

const Dashboard = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Sidebar />        
      </Content>




    </Container>
  )
}


export default Dashboard