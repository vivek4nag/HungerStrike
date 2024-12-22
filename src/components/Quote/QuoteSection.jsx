import QuoteCard from "./QuoteCard"
import Data from "./Data"

const QuoteSection = () => {
  // console.log(Data);
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center mt-16 pt-10 pb-4">
     {Data.map( (ele, idx)=> <QuoteCard key={idx} quote={ele.quote} author={ele.author} /> )}
    </div>
  )
}

export default QuoteSection