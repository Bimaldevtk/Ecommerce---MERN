import React from 'react';
import Input from './Input'; // Ensure this is the correct path to your Input component
// import Select from './Select'; // Ensure this is the correct path to your Select component
// import Textarea from './Textarea'; // Ensure this is the correct path to your Textarea component
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select'

function CommonForm({ formControls }) {
    function renderInputByComponentType(getControlItem) {
        let element = null;
        switch (getControlItem.componentType) {
            case 'input':
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                    />
                );
                break;
            case 'select':
                element = (
                    <Select
                        name={getControlItem.name}
                        id={getControlItem.name}
                        options={getControlItem.options} // Assuming options is an array of options
                    />
                );
                break;
            case 'textarea':
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                    />
                );
                break;
            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                    />
                );
                break;
        }

        return element;
    }

    return (
        <form>
            {formControls.map(control => renderInputByComponentType(control))}
        </form>
    );
}

export default CommonForm;
