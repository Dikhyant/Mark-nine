import Card from "./Card";
import DataForCards from "../Assets/DataForCards";
import "./PageContent.css"

const PageContent = (props) => {
    const Cards = props.data.map( (data)=>{
        return (
            <div key={data.id}><Card title={data.title} img={data.img} /></div>
        )
    } )
    return (
        <div className="page-content">
            {Cards}
        </div>
    )
}

export default PageContent;