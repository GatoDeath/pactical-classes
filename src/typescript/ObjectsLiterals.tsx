import { Person } from "../models/Person";

export default function ObjectsLiterals() {
  const person: Person = {
    age: 24,
    FirstName: "Deymian",
    LastName: "Benavides",
    address: {
      country: "Ecuador",
      houseNo: 144,
    },
  };

  return (
    <>
      <h3>OBJETOS</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
