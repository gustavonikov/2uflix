import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

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

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name} </h1>

            <form onSubmit={function handleSubmit(eventInfo) {
                eventInfo.preventDefault();
                setCategories([
                    ...Categories,
                    values,
                ]);

                clearForm();
            }}
            >

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

                <Button>
                    Cadastrar
                </Button>

            </form>

            <ul>
                {Categories.map((category) => (
                    <li key={`${category.titulo}`}>
                        {category.titulo}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para a página inicial
            </Link>

        </PageDefault>

    );
}

export default CadastroCategoria;
