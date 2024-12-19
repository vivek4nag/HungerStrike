
// eslint-disable-next-line react/prop-types
const BottomCard = ({text, name, role}) => {
  return (
    <div className="bg-slate-300 shadow-lg p-4 w-60 md:w-96 rounded-2xl hover:bg-slate-400 transition-all duration-300 cursor-pointer hover:animate-pulse">
        <div>
            <p className="text-lg text-gray-800">{text}</p>
        </div>
        <div className="flex gap-2 items-center py-4">
            <div className="">
                <img className="rounded-full w-8 h-8 overflow-hidden " src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="halwa" />
            </div>
            <div className="flex flex-col justify-start">
                <div className="text-sm font-bold">{name}</div>
                <div className="text-xs text-gray-700">{role}</div>
            </div>
        </div>
    </div>
  )
}

export default BottomCard