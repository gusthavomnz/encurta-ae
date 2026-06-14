import imgCalendar from '../assets/editCalendar.png'
import imgViewsLink from '../assets/visualizacoesLink.png'
import imgLixeira from '../assets/iconDelete.png'

interface CardListaLinksProps {
    id: string
    shortCode: string
    redirectUrl: string
    clickCount: number
    expiresAt: string
}


function CardListaLinks( { id, shortCode, redirectUrl, clickCount, expiresAt }: CardListaLinksProps ){
const urlDoFront = window.location.origin;
const linkEncurtadoCompleto = `${urlDoFront}/${shortCode}`;
const previewRedirectUrl = redirectUrl.substring(8,30)
const dataDiaMesAno = expiresAt.substring(0,10)
const HoraMinuto = expiresAt.substring(12,19)

const dataFormatada = new Date(expiresAt).toLocaleDateString('pt-BR');

    return (
        <div className="bg-black  w-full h-20 p-0.5 flex flex-col md:flex-row justify-between ">


            <div className='bg-white h-1/2 flex flex-row'>

               <div className='flex w-4/5 justify-start '> 
                    <p className='px-2 text-xl'>{linkEncurtadoCompleto} </p>
                </div>

                <div className='flex w-1/5 justify-end bg-amber-200 text-2xl px-2 flex-row justify items-center'>
                    <img src={imgViewsLink} className='p-2 h-full'   />
                    {clickCount}
                </div>

            </div>



            <div className='bg-gray-500 h-1/2 w-full flex flex-row justify-center'>

               <div className='bg-white min-w-3/5 '>
                <p className='px-2 text-xl text-gray-600'>{previewRedirectUrl}{'...'} </p>
               </div>


               <div className='flex flex-col h-full w-full py-0 m-0 p-0 leading-none text-[12px] justify-center'>
                <p>Exp: {dataDiaMesAno} </p>
                <p>ás: {HoraMinuto}</p>
               </div>
            

            <div className='w-2/3 h-full flex flex-row justify-end'>

             <div className='bg-white h-full flex'>
                    <img src={imgCalendar} className='p-2'/>
             </div>


             <div className='h-full flex bg-pink-300'> 
                <img src={imgLixeira} className=' p-2'/>
             </div>

               
                
                

             <div/>
            </div>

          
            
        </div>

        </div>
    )

}


export default CardListaLinks;