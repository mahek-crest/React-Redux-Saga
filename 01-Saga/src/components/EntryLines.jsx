import { Container } from "semantic-ui-react";
import EntryLine from "./Entryline";

const EntryLines = ({ entries, deleteEntry, editEntry }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.description}
          {...entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
};

export default EntryLines;
