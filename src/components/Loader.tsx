import { CSSProperties } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type Props = {
  color?: string;
  size?: number;
};

const Loader = ({ color = "#f9ab00", size = 60 }: Props) => {
  return (
    <MoonLoader
      color={color}
      loading={true}
      cssOverride={override}
      size={size}
      aria-label="Loading"
      data-testid="loader"
      speedMultiplier={0.5}
    />
  );
};

export default Loader;
