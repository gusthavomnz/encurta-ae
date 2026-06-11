import imgCalendar from '../assets/editCalendar.png'

interface CardListaLinksProps {
    id: string
    shortCode: string
    redirectUrl: string
    clickCount: number
    expiresAt: string
}


function CardListaLinks( { id, shortCode, redirectUrl, clickCount, expiresAt }: CardListaLinksProps ){
    
const dataFormatada = new Date(expiresAt).toLocaleDateString('pt-BR');

    return (
        <div className="bg-black  w-full h-10 p-0.5 flex flex-row justify-between ">
            <div className="bg-white  w-10/24 h-full p-0.5 flex items-center  ">
                <p className='font-normal text-[18px]'> {shortCode} </p>
            </div>

            <div className="bg-white w-10/24 h-full  flex items-center">
                <p className='font-normal text-[18px]'> {redirectUrl} {dataFormatada} </p>
            </div>

            <div className="bg-white h-full flex  flex items-center">
                <p className='font-normal text-[10px]'> {clickCount}</p>
                <img src={imgCalendar} className="h-full"></img>
            </div>
            
        </div>
    )

}


export default CardListaLinks;