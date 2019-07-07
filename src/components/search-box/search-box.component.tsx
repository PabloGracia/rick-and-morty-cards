import React, { ChangeEvent } from "react";
import "./search-box.styles.css";

interface IProps {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBox: React.FunctionComponent<IProps> = props => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};
