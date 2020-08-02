import React, { useEffect, useState } from 'react';
import { Link /* , useHistory */ } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repository/videos';
import categoriesRepository from '../../../repository/categories';

function CadastroVideo() {
    // const history = useHistory();
    const [categories, setCategories] = useState([]);
    const categoryTitles = categories.map(({ titulo }) => titulo);
    const { handleChanges, values } = useForm({
        titulo: '',
        url: '',
        category: '',
    });

    useEffect(() => {
        categoriesRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategories(categoriasFromServer);
            });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                // eslint-disable-next-line max-len
                const categoriaEscolhida = categories.find((category) => category.titulo === values.category);

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Cadastrou com sucesso!');
                        alert('Seu video foi cadastrado com sucesso!');
                        // history.push('/');
                    });
            }}
            >
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChanges}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChanges}
                />

                <FormField
                    label="Categoria"
                    name="category"
                    value={values.category}
                    onChange={handleChanges}
                    suggestions={categoryTitles}
                />

                <Button type="submit">
          Cadastrar
                </Button>
            </form>

            <br />
            <br />

            <Link to="/cadastro/categoria">
        Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;
