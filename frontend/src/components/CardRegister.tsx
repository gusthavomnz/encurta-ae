import imagemRegister from  '../assets/login-encurta-ae.png'
import InputField from './ui/InputField'
import ConfirmButton from './ui/ConfirmBotton'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useRegister } from '../hooks/useRegister'
import { useUser } from '../contexts/UserContext'



function CardRegister () {

  const [name, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const {
  mutate,
  isPending,
  isSuccess,
  isError,
  data
} = useRegister()

const navigate = useNavigate()
const { setUser } = useUser()

useEffect(() => {
  if (isSuccess && data) {
    localStorage.setItem('userId', data.userId)
    setUser({ userId: data.userId, name })
    navigate('/home')
  }
},[isSuccess, data, navigate, name, setUser])





const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if (!email || !password || !name || !confirmPassword) {
    alert('Por favor, preencha todos os campos.')
    return
  }

if (password !== confirmPassword) {
    alert('Senhas não coincidem.')
    return
  }

  mutate({
    name,
    email,
    password
  })
}
 
  return (
    <div className="max-w-3xl flex flex-col md:flex-row bg-white items-stretch sm:rounded-2xl sm:p-6">
      <img src={imagemRegister} alt="Imagem de Registro" className="md:w-1/2 w-full" />
      <div className="md:w-1/2 w-full h-full flex flex-col  bg-white md:items-center md:justify-start ">
        <p className="text-center md-text-left text-6xl font-bold text-gray-700 ">Encurta Aê</p>
        <p className="text-xl font-light text-gray-700 mt-4 md:text-sm px-1.5">Crie sua conta para acessar o seu novo encurtador de links favorito. </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:items-center gap-4 mt-6 md:w-full w-full px-2 pb-4">

          <InputField placeholder="Nome Completo" type="text"
          value={name} onChange ={(click)=> setNomeCompleto(click.target.value)} />

          <InputField placeholder="Digite seu email" type="email" 
          value={email} onChange={(click) => setEmail(click.target.value)}/>


          <InputField placeholder="Digite sua senha" type="text" 
          value={password} onChange={(click) => setPassword(click.target.value)}/>

          <InputField placeholder="Confirme sua senha" type="text" 
          value={confirmPassword} onChange={(click) => setConfirmPassword(click.target.value)}/>
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