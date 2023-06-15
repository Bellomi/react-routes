
import {Link} from 'react-router-dom';

export default function Erro() {
  return (
    <div>
      <h1>Page doesn´t exist</h1><br/>

      <span>You might be looking for:</span><br/>
      <Link to="/" >Home</Link> <br/>
      <Link to="/contato">Contatos</Link><br/>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
 }