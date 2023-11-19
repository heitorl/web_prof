import { CircularProgressbar } from "react-circular-progressbar";
import { Container, FileInfo, Preview } from "./style";
import { MdLink, MdCheckCircle, MdError } from "react-icons/md";

export const ImagePreview = ({ file }) => {
  return (
    <Container>
      <div className="content">
        <FileInfo>
          <Preview style={{ backgroundImage: `url(${file.preview})` }} />
          <div>
            <strong>{file.name}</strong>
            <span>{file.readableSize} </span>
          </div>
        </FileInfo>

        <div>
          {!file.uploaded && !file.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: "#1E90FF" },
              }}
              strokeWidth={10}
              percentage={file.progress}
            />
          )}
          {file.url && (
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}
          {file.uploaded && <MdCheckCircle size={24} color="#1E90FF" />}
          {file.error && <MdError size={24} color="#FF6666" />}
        </div>
      </div>
    </Container>
  );
};
