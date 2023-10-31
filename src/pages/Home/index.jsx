import Button from "../../components/Button"
import { Container, Content } from "./style"
import online from "../../assets/online.svg"
import { useNavigate } from "react-router-dom"


const Home = () => {

  const history = useNavigate()

  return <Container>
    <Content>
      <div className="ctn-img">
        <img src={online} alt="online" />
      </div>

      <h1>Web<span>.</span>Prof</h1>
      <span>Estude de forma prática e efetiva com os melhores professores online</span>
      <div>
        <Button whiteSchema  onClick={() => history("/student/login")}>Você é um aluno?</Button> 
        <Button onClick={() => history("/teacher/login")}>Você é um professor?</Button>      
      </div>

    </Content>

  </Container>
}

export default Home