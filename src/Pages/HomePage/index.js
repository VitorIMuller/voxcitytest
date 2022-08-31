import { useState } from "react"
import { cpfMask } from "../../Assets/mask";
import { cpf } from "cpf-cnpj-validator";
import { randomStr } from "../../Assets/randomString";

export default function HomePage() {
    const [name, setName] = useState('');
    const [cpfNumber, setCpfNumber] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(e) {
        e.preventDefault();
        if (cpf.isValid(cpfNumber)) {
            const str = randomStr("123456789abcdefghijklmnopqrstuvwxyz");
            const data = { name: name, cpf: cpfNumber, password: password, randomString: str }
            alert("Dados Enviados: \n " + "\n Nome: \n" + data.name + '\n Cpf: \n' + data.cpf + "\n password: \n" + data.password + "\n Random String: \n" + data.randomString)
            window.location.reload();
        } else {
            alert("Cpf Inválido")
        }
    }
    return (
        <div className="Container">
            <form onSubmit={handleSignUp}>
                <div className="AlignForm">
                    <input
                        type='text'
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required />
                    <input
                        type='password'
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                    <input
                        type='text'
                        placeholder="Cpf"
                        onChange={(e) => setCpfNumber(e.target.value)}
                        value={cpfMask(cpfNumber)} />
                    <button className="btn" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}