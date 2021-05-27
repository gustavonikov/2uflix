import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repository/videos';
import categoriesRepository from '../../../repository/categories';
import Form from '../../../components/Form';
import GoToHome from '../../../components/GoToHome';

import './index.css';

function CadastroVideo() {
    // const history = useHistory();
    const [categories, setCategories] = useState([]);
    const categoryTitles = categories.map(({ titulo }) => titulo);
    const { handleChanges, values } = useForm({
        titulo: '',
        url: '',
        category: '',
    });

    function onSubmit(event) {
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
    }

    useEffect(() => {
        categoriesRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategories(categoriasFromServer);
            });
    }, []);

    return (
        <PageDefault page="video">
            <h1>Cadastro de Video</h1>

            <Form onSubmit={onSubmit}>
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

                <div className="button-wrapper">
                    <Button type="submit">
                        Cadastrar
                    </Button>
                </div>
            </Form>

            <br />
            <br />

            <GoToHome />
        </PageDefault>
    );
}

export default CadastroVideo;
