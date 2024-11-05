import React from "react";
import Input from "./Input"; // Ensure this is the correct path to your Input component
// import Select from './Select'; // Ensure this is the correct path to your Select component
// import Textarea from './Textarea'; // Ensure this is the correct path to your Textarea component
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Label,
} from "@radix-ui/react-select";

const types = {
  INPUT: "input",
  SELECT: "select",
};

const value = formData[getControlItem.name] ||  ""

function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }) {
  function renderInputByComponentType(getControlItem) {
    let element = null;
    switch (getControlItem.componentType) {
      case types.INPUT:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value = {value}
          />
        );
        break;
      case "select":
        element = (
          <Select value={value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
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
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((contorlItem) => (
            <div className="grid w-full gap-1.5" key={contorlItem.name}>
                <Label className="mb-1" >{contorlItem.label}</Label>
                {renderInputByComponentType(contorlItem)}
            </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">{buttonText || 'Submit'}</Button>
    </form>
  );
}

export default CommonForm;
