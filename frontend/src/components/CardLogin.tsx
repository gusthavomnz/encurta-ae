import imagemLogin from '../assets/login-encurta-ae.svg'
import ConfirmButton from './ui/ConfirmBotton'
import InputField from './ui/InputField'  
import {Link} from 'react-router-dom'

function CardLogin() {
  return (
    <div className="max-w-3xl flex flex-col md:flex-row bg-white items-stretch sm:rounded-2xl sm:p-6">
      <img src={imagemLogin} alt="Imagem de login" className="md:w-1/2 w-full" />
      <div className="md:w-1/2 w-full h-full flex flex-col  bg-white md:items-center md:justify-start ">
        <p className="text-center md-text-left text-6xl font-bold text-gray-700 ">Encurta Aê</p>
        <p className="text-xl font-light text-gray-700 mt-4 md:text-sm px-1.5">Faça login para acessar seu encurtador de links favorito.</p>
        <form className="flex flex-col md:items-center gap-4 mt-6 md:w-full w-full px-2 pb-4">
          <InputField placeholder="Digite seu email" type="email" />
          <InputField placeholder="Digite sua senha" type="password" />
           <div className = "w-full h-10 justify-center items-center flex pt-4">
      <ConfirmButton textoBotao="Entrar" />
       </div>
        </form>
        <p className= "text-center md:text-left  font-light"> Ainda não fez o cadastro? {' '} 
            <Link to="/register" className="text-blue-600 cursor-pointer">Cadastre-se</Link>
        </p>
    </div>
    </div>
  )
}

export default CardLogin