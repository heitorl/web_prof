import { Container, Content, ContentList } from "./style"

import fotoAvatar from "../../assets/bob.jpg"

const Assessment = () => {

  return (
    <Container>

      <Content>
        <div className="ctn-header"><span>Melhores Avaliados</span></div>


        <ContentList>
          <ul>
            <li>
              <div className="ctn-li">
                <div className="ctn-avatar"></div>
                <span>5.0</span>
                <span>Jose Albuquerque de oliveira</span>
              </div>
            </li>
            <li>
              <div className="ctn-li">
              <div className="ctn-avatar"></div>
                <span>5.0</span>
                <span>Jose Albuquerque de oliveira</span>
              </div>
            </li>              
            <li>
              <div className="ctn-li">
              <div className="ctn-avatar"></div>
                <span>5.0</span>
                <span>Jose Albuquerque de oliveira</span>
              </div>
            </li>
            <li>
            <div className="ctn-li">
              <div className="ctn-avatar"></div>
                <span>5.0</span>
                <span>Jose Albuquerque de oliveira</span>
              </div>
            </li>
            <li>
              <div className="ctn-li">
                <div className="ctn-avatar"></div>
                <span>5.0</span>
                <span>Jose Albuquerque de oliveira</span>
              </div>
            </li>              
            <li>
              <div className="ctn-li">
                <div className="ctn-avatar"></div>  
                <span>5.0</span>
                <span>Jose Albuquerque de oliveira</span>
              </div>
            </li>
          </ul>
        </ContentList>
      </Content>


    </Container>
  )
}


export default Assessment