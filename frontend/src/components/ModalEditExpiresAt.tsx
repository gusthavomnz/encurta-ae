interface ModalEditExpiresAtProps {
  isOpen: boolean;
  onClose: () => void;
  idLink: string
}


function ModalEditExpiresAt({ isOpen, onClose, idLink }: ModalEditExpiresAtProps) {
    if (!isOpen) return null;


    return (
        <div className="bg-white h-1/2 w-1/2 flex justify-center items-center"> 
        modal de calendarioAqui.
        </div>

    )

    

}

export default ModalEditExpiresAt;