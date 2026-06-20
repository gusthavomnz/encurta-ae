import { useCreateQrCode } from "../hooks/useCreateQrCode";

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export function QrCodeModal({ isOpen, onClose, url }: QrCodeModalProps) {
  const { data: qrCodeUrl } = useCreateQrCode(url);

  if (!isOpen) return null;

  return (
    <div className="h-full w-full flex justify-center items-center z-10 fixed inset-0 bg-black/50 backdrop-blur-md">
      <div className="bg-gray-100 w-96 h-96 rounded-2xl relative flex flex-col justify-center items-center overflow-hidden p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl">
          ✕
        </button>
        
        {qrCodeUrl && (
          <img src={qrCodeUrl} alt="QR Code" className="w-64 h-64 object-contain" />
        )}
      </div>
    </div>
  );
}