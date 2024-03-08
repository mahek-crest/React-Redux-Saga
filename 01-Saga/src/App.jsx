import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

let initialEntries = [
  { id: 1, description: "salary", value: "$1000.00", isExpense: false },
  { id: 2, description: "groceries", value: "$15.00", isExpense: true },
  { id: 3, description: "electricity bill", value: "$150.00", isExpense: true },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  const deleteEntry = (id) => {
    const results = entries.filter((entry) => entry.id !== id);
    setEntries(results);
  };

  const editEntry = (id) => {
    console.log(`editing wntry with id ${id} `);
    if (id) {
      const index = entries.findIndex((entry) => entry.id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    const newEntries = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(newEntries);
    resetEntry();
  };

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  return (
    <>
      <Container>
        <MainHeader title={"Budget"} />

        <DisplayBalance
          title={"Your Balance"}
          value={"25,550.32"}
          size="small"
        />
        <EntryLines
          entries={entries}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />

        <MainHeader title={"History"} type={"h3"} />

        <MainHeader title={"Add new transaction"} type={"h3"} />
        <NewEntryForm
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
        <ModalEdit
          alEdit
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Container>
    </>
  );
}

export default App;
