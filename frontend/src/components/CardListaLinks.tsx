import imgCalendar from '../assets/editCalendar.png'

interface CardListaLinksProps {
    shortCode: string
    redirectUrl: string
    expiresAt: Date
}


function CardListaLinks( listaLinksData: CardListaLinksProps ){
    
    
    // const dados = await fetchAllLinksUser(listaLinksData.userId);


    return (
        <div className="bg-black  w-full h-10 p-0.5 flex flex-row justify-between ">
            <div className="bg-white  w-10/24 h-full p-0.5 flex items-center  ">
                <p className='font-normal text-[18px]'> link encurtado aqui </p>
            </div>

            <div className="bg-white w-10/24 h-full  flex items-center">
                <p className='font-normal text-[18px]'> link original.. </p>
            </div>

            <div className="bg-white h-full flex  flex items-center">
                <p className='font-normal text-[10px]'> Expira em: 7d</p>
                <img src={imgCalendar} className="h-full"></img>
            </div>
            
        </div>
    )

}


export default CardListaLinks;