import './ItemPage.css';
import ItemHeader from "../components/ItemHeader";
import Item from "../components/Item";
import { useParams } from 'react-router-dom';

export default function ItemPage() {
    const pageID = useParams ()

    return (
        <div className="ItemPage">
            <div className="container3">
                <ItemHeader />
                <Item pageID={pageID} />
            </div> 
        </div>
    );
}
