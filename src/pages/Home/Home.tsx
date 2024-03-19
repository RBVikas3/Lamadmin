import { BarChartBox } from "../../components/BarChartBox/BarChartBox"
import ChartBox from "../../components/chartBox/ChartBox"
import TopBox from "../../components/topBox/TopBox"
import PicChartBox from "../../components/picChartBox/picChartBox"
import { chartBoxUser } from "../../data"
import { chartBoxProduct } from "../../data"
import { chartBoxRevenue } from "../../data"
import { chartBoxConversion } from "../../data"
import { barChartBoxRevenue } from "../../data"
import { barChartBoxVisit } from "../../data"
// import { }
import "./Home.scss"
const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box4">
                <PicChartBox />

            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} />

            </div>
            <div className="box box7">
                <ChartBox {...chartBoxRevenue} />

            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxVisit} />

            </div>
        </div>
    )
}

export default Home