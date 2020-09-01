import React from "react";
import Select from "react-select";

const SelectInput = (props) => {
  return (
    <Select
      className="react-select primary"
      classNamePrefix="react-select"
      placeholder={props.placeholder}
      value={
        props.value !== undefined && props.value !== null
          ? props.value.length === 0
            ? null
            : { value: props.value, label: props.value }
          : null
      }
      onChange={(value) =>
        props.onChange(
          value !== null && value !== undefined
            ? value.length !== 0
              ? value.label
              : null
            : null,
          props.name ? props.name : null
        )
      }
      name={props.name}
      options={
        props.options === null
          ? []
          : [...props.options.map((el) => ({ value: el, label: el }))]
      }
    />
  );
};

export default SelectInput;
