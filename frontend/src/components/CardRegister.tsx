import imagemRegister from  '../assets/login-encurta-ae.png'
import InputField from './ui/InputField'
import ConfirmButton from './ui/ConfirmBotton'
import {Link} from 'react-router-dom'



function CardRegister () {
  return (
    <div className="max-w-3xl flex flex-col md:flex-row bg-white items-stretch sm:rounded-2xl sm:p-6">
      <img src={imagemRegister} alt="Imagem de Registro" className="md:w-1/2 w-full" />
      <div className="md:w-1/2 w-full h-full flex flex-col  bg-white md:items-center md:justify-start ">
        <p className="text-center md-text-left text-6xl font-bold text-gray-700 ">Encurta Aê</p>
        <p className="text-xl font-light text-gray-700 mt-4 md:text-sm px-1.5">Crie sua conta para acessar o seu novo encurtador de links favorito. </p>
        <form className="flex flex-col md:items-center gap-4 mt-6 md:w-full w-full px-2 pb-4">
          <InputField placeholder="Nome Completo" type="text" />
          <InputField placeholder="Digite seu email" type="email" />
          <InputField placeholder="Digite sua senha" type="password" />
          <InputField placeholder="Confirme sua senha" type="password" />
           <div className = "w-full h-10 justify-center items-center flex pt-4">
      <ConfirmButton textoBotao="Cadastrar" />
       </div>
        </form>
        <p className= "text-center md:text-left font-light"> Já tem uma conta? {' '} 
            <Link to="/login" className="text-blue-600 cursor-pointer" >Faça Login </Link>
        </p>
    </div>
    </div>
  )
}

export default CardRegister