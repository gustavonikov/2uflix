import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const WrapperFormField = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%; /* valor pra deixar no meio depois é 50% */

    height: 57px;
    font-size: 18px;
    
    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;
    
    padding: 16px 16px;
    margin-bottom: 45px;
    
    resize: none;
    border-radius: 4px;
    transition: border-color .3s;
    
    &:focus {
        border-bottom-color: var(--primary);
    }
    
    &:focus:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
    }

    ${({ hasValue }) => hasValue && css`
        &:not([type="color"]) + span{
            transform: scale(.6) translateY(-10px);
        }
    `}
`;

function FormField({ label, name, type, value, onChange, suggestions }) {
    const idField = `id_${name}`;
    const tag = type === 'textarea' ? 'textarea' : 'input';

    const hasValue = Boolean(value.length);
    const hasSuggestions = Boolean(suggestions.length);

    return (
        <WrapperFormField>
            <Label htmlFor={name}>
                <Input
                    as={tag}
                    id={idField}
                    type={type}
                    value={value}
                    name={name}
                    hasValue={hasValue}
                    onChange={onChange}
                    autoComplete={hasSuggestions ? 'on' : 'off'}
                    list={hasSuggestions ? `suggestionFor_${idField}` : undefined}
                />
                <Label.Text>
                    {label}
                </Label.Text>
                {
                    hasSuggestions && (
                        <datalist id={`suggestionFor_${idField}`}>
                            {
                                suggestions.map((suggestion) => (
                                    <option value={suggestion} key={`suggestionFor_${idField}_option${suggestion}`}>
                                        {suggestion}
                                    </option>
                                ))
                            }
                        </datalist>
                    )
                }

            </Label>
        </WrapperFormField>
    );
}

FormField.defaultProps = {
    type: 'string',
    value: '',
    onChange: () => {},
    suggestions: [],
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
