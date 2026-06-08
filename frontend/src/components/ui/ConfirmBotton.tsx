interface ConfirmButtonProps {
    textoBotao: string;
}

function ConfirmButton({ textoBotao }: ConfirmButtonProps) {
    return (
        <button type="submit" className="w-100 h-10 bg-gray-700 font-bold text-1.5xl text-white rounded-2xl hover:bg-black transition-colors duration-300">
            {textoBotao}
        </button>
    )
}


export default ConfirmButton