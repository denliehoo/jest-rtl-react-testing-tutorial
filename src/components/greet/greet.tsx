import { FC } from "react";

interface IGreetProps {
  name?: string;
}

const Greet: FC<IGreetProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default Greet;
