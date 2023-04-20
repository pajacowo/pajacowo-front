import { Container } from "@mui/system";
import React from "react";
import Mem from "./Mem";
import EmptyList from "./EmptyList";

const MemList = ({ mems }) => {
  const memsList = mems.map((mem) => <Mem key={mem.id} mem={mem} />);

  return (
    <Container className="pt-28 flex flex-wrap justify-center">
      {memsList.length > 0 ? (
        memsList
      ) : (
        <EmptyList text="Wybrana kategoria nie zawiera elementów" />
      )}
    </Container>
  );
};

export default MemList;
