import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../../FirebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import NavbarResponsive from "../Navbar/Navbar";
import Row from 'react-bootstrap/Row';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    console.log('categoryId', categoryId)
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const queryRef = !categoryId ?
            collection(db, "items") :
            query(collection(db, "items"), where("categoria", "==", categoryId));
        getDocs(queryRef).then(response => {
            const resultados = response.docs.map(doc => {
                const newItem = {
                    id: doc.id,
                    ...doc.data(),
                }
                return newItem
            });
            console.log(resultados)
            setProductos(resultados);
        })
    }, [categoryId]);

    return (
        <>
            <NavbarResponsive />
            <Row xs={1} md={2} lg={3} className="g-4">
                <ItemList items={productos} />
            </Row>
        </>
    )
};

export default ItemListContainer;