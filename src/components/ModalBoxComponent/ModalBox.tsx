type ModalBoxProps = {
    heading: string;
    description: string;
    onClose: (e : any) => void;
}

const ModalBox = ({heading, description, onClose} : ModalBoxProps) => {

  return (
    <div className='flex justify-center items-center w-full h-full absolute top-0 bg-gray-900 bg-opacity-75' onClick={onClose}>
        <div id='innerbox' className='z-50 border border-black w-1/3 h-72 flex flex-col gap-2 justify-center items-center bg-slate-200 rounded-xl'>
            <h1 className='text-2xl font-bold p-2 font-mono'>{heading}</h1>
            <p className='text-center p-2 text-xl max-w-lg font-mono'>
                {description}
            </p>
            <div className='mt-3 p-2 w-4/5 flex gap-2 justify-center items-center'>
                <button className='border border-black w-64 h-14 rounded-lg text-xl cursor-pointer hover:bg-slate-300 font-mono font-semibold'
                onClick={onClose}>Cancel</button>
                <button className='border-none w-64 h-14 rounded-lg font-mono font-semibold bg-purple-700 text-white text-xl cursor-pointer hover:bg-purple-900'>Open Email App</button>
            </div>
        </div>
    </div>
  )
}

export default ModalBox