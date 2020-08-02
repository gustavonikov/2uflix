import { useState } from 'react';

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    function setValue(key, value) {
        setValues({ ...values,
            [key]: value,
        });
    }
    function clearForm() {
        setValues(initialValues);
    }
    function handleChanges(eventInfo) {
        setValue(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value,
        );
    }

    return {
        values,
        handleChanges,
        clearForm,
    };
}

export default useForm;
