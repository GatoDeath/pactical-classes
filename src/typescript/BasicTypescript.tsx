

export default function BasicTypescript() {

    const name:string = 'Deymian';
    const age:number = 24;
    const isActive:boolean = true;

    const people = ['Esto', 'Es', 'Un', 'Arreglo'];

  return (
    <>
    <h2>TIPOS BASICOS</h2>
    {name} - {age} - {isActive ? 'Activo':'No Activo'} - {people.join(', ')}
    </>
  )
}
