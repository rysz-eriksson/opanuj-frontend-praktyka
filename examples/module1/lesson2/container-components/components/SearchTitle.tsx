import { FC } from "react";

const SearchTitle: FC<{titleText: string}> = ({titleText}) => {
  return <h1 className="text-2xl">{titleText}</h1>;
}

export default SearchTitle;
