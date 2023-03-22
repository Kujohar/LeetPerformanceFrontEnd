import LatestAnswered from "./Componenets/LatestAnswered"
import PerformanceTrend from "./Componenets/PerformanceTrend"
import RevisitList from "./Componenets/RevisitList"

function Container() {

    return (
        <div className="flex flex-wrap grid grid-cols-1">
            <LatestAnswered />
            <RevisitList />
            <PerformanceTrend />
            <div className="border-4"> 4 </div>
            <div className="border-4"> 5 </div>
        </div>
    )
}

export default Container