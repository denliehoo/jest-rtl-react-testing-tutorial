import { FC } from "react";
import { IGreetProps } from "../greet.types";

const Greet: FC<IGreetProps> = ({ name }) => {
  return <div>Hello {name ? name : "Guest"} </div>;
};

export default Greet;
