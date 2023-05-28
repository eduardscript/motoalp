type SuccessProps = {
  id: any
  name: string
};

export default function Sucess({ name, id }: SuccessProps) {
  return (
    <div className="container">
        <strong>{name}</strong> inscricao feita com sucesso
        <br />
        <p>Referencia da inscricao: {id}</p>

        <button className="btn btn-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sair</button>
    </div>
  );
}