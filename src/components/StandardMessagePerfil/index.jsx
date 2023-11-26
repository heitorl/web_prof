import { Container } from "./style";

export const StandardMessagePerfil = ({ user }) => {
  return (
    <Container>
      <h2>
        Olá, eu sou {user.name} {user.lastName}
      </h2>
      <br />
      <p>
        Sou um educador apaixonado por ensinar. Tenho dedicado minha carreira ao
        enriquecimento acadêmico dos meus alunos, proporcionando uma experiência
        de aprendizado envolvente e inspiradora.
      </p>
      <br />
      <br />
      <h3>Formação</h3>
      <br />
      {user.curriculum?.formation ? (
        <p>
          - {user.curriculum.formation[0].academicDegree} em{" "}
          {user.curriculum.formation[0].studyArea} pela{" "}
          {user.curriculum.formation[0].institution}
        </p>
      ) : (
        <p>- </p>
      )}
      <br />
      <br />
      <h3>Estilo de Ensino:</h3>
      <p>
        Eu acredito em criar um ambiente de aprendizado positivo e encorajador,
        onde os alunos se sintam motivados a explorar e alcançar seu potencial
        máximo. Utilizo métodos inovadores e práticos para tornar as aulas
        interessantes e relevantes.
      </p>
      <br />
      <br />
      <h3>Áreas de Especialização:</h3>
      {!user.disciplines ? (
        <p>-</p>
      ) : (
        <div>
          {user?.disciplines[0]?.disciplines.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
      )}
      <br />
      <br />
      <p>
        Além de ministrar aulas, estou comprometido em auxiliar os alunos no
        desenvolvimento de habilidades críticas e no alcance de seus objetivos
        acadêmicos. Estou ansioso para ajudá-lo a alcançar o sucesso acadêmico!
      </p>
      <br />
      <br />
      <p>
        Entre em contato comigo para discutir suas metas educacionais e agendar
        uma aula.
      </p>
    </Container>
  );
};
