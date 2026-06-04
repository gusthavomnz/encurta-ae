function ConfirmButton({ textoBotao }: { textoBotao: string }) {
    return (
        <button className="w-100 h-10 bg-gray-700 font-bold text-1.5xl text-white rounded-2xl hover:bg-black transition-colors duration-300">
            {textoBotao}
        </button>
    )
}


export default ConfirmButton