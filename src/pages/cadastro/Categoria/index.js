import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Form from '../../../components/Form';

import './index.css';
import GoToHome from '../../../components/GoToHome';

function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: '',
    };

    const { handleChanges, values, clearForm } = useForm(initialValues);

    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://touflix.herokuapp.com/categorias';
        // Ele pega a url e entra com o backend data como parâmetro e armazena o .json na response
        fetch(URL_TOP)
            .then(async (serverResponse) => {
                const response = await serverResponse.json();
                setCategories([
                    ...response, // o ... é p pegar tudo que tem lá já e não jogar isso
                ]);
            });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        setCategories([
            ...Categories,
            values,
        ]);

        clearForm();
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name} </h1>

            <Form onSubmit={handleSubmit}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChanges}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="description"
                    value={values.description}
                    onChange={handleChanges}
                />

                <FormField
                    label="Cor:"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChanges}
                />

                <div className="button-wrapper">
                    <Button>
                        Cadastrar
                    </Button>
                </div>

            </Form>

            <ul className="categories-list">
                {Categories.map((category) => (
                    <li key={`${category.titulo}`}>
                        {category.titulo}
                    </li>
                ))}
            </ul>

            <GoToHome />
        </PageDefault>

    );
}

export default CadastroCategoria;
