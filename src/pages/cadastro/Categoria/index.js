import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: '',
    };
    const [Categories, setCategories] = useState([]);
    const [Values, setValues] = useState(initialValues);

    function setValue(key, value) {
        setValues({ ...Values,
            [key]: value,
        });
    }

    function handleChanges(eventInfo) {
        setValue(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value,
        );
    }

    useEffect(() => {
        if (window.location.href.includes('localhost')) {
            const URL = 'http://localhost:8080/categorias';
            fetch(URL)
                .then(async (serverResponse) => {
                    if (serverResponse.ok) {
                        const response = await serverResponse.json();
                        setCategories(response);
                        return;
                    }
                    throw new Error('Não foi possível obter os dados');
                });
        }
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {Values.name} </h1>

            <form onSubmit={function handleSubmit(eventInfo) {
                eventInfo.preventDefault();
                setCategories([
                    ...Categories,
                    Values,
                ]);
                setValue({ initialValues });
            }}
            >

                <FormField
                    label="Nome da Categoria"
                    name="name"
                    type="text"
                    value={Values.name}
                    onChange={handleChanges}
                />

                <FormField
                    label="Descrição"
                    name="description"
                    type="textarea"
                    Value={Values.description}
                    onChange={handleChanges}
                />

                <FormField
                    label="Cor:"
                    name="color"
                    type="color"
                    Value={Values.color}
                    onChange={handleChanges}
                />

                <Button>
                    Cadastrar
                </Button>

            </form>

            <ul>
                {Categories.map((category, indice) => (
                    <li key={`${category}${indice}`}>
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
