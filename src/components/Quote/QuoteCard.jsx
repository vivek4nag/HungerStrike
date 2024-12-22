/* eslint-disable react/prop-types */


const QuoteCard = ({quote, author}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-4 w-[80%] bg-slate-100 cursor-pointer hover:scale-105 transition-all duration-300">
        <h2 className="text-xl font-bold">{quote}</h2>
        <p className="text-gray-500 mt-2">- {author}</p>
    </div>
  )
}

export default QuoteCard