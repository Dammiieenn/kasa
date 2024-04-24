import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UseUtilitaire from '../UseUtilitaire';
import Slider from '../components/Slider';


const Detail = () => {
    const { id }= useParams();
    const navigate = useNavigate();
    const { data, loading, error } = UseUtilitaire("/logements.json");
    const product = data?.find((element) => element.id===id);

    useEffect(() => {
        if (data && (error || !data.find ((element) => element.id === id))){
            navigate("/ereur");
        }
    },[data,error,id,navigate]);

    if (loading) return <div>loading...</div>
    if (error || !product) return null;
console.log(product.pictures)

    return (
        <div>
            <div className='product-container'>
            <Slider products={product.pictures} />
            </div>
        </div>
    );
};

export default Detail;