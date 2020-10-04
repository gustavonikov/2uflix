import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repository/categories';
import PageDefault from '../../components/PageDefault';
import PageDefault from ''
function Home() {
    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        categoriesRepository.getAllWithVideos()
            .then((categoriasComVideos) => {
                console.log(categoriasComVideos[0].videos[0]);
                setInitialData(categoriasComVideos);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    // http://localhost:8080/categorias?_embed=videos

    return (

        <PageDefault paddingAll={0}>

            {initialData.length === 0 && (<div>Loading...</div>)}

            {initialData.map((categoria, indice) => {
                if (indice === 0) {
                    return (
                        <div key={categoria.id}>
                            <BannerMain
                                videoTitle={initialData[0].videos[0].titulo}
                                url={initialData[0].videos[0].url}
                                videoDescription={initialData[0].videos[0].description}
                            />
                            <Carousel
                                ignoreFirstVideo
                                category={initialData[0]}
                            />
                        </div>
                    );
                }

                return (
                    <Carousel
                        key={categoria.id}
                        category={categoria}
                    />
                );
            })}

        </PageDefault>
    );
}

export default Home;
