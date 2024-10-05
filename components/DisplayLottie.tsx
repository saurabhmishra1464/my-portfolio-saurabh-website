import React from "react";
import Lottie from "react-lottie";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
          {/* @ts-expect-error The Lottie component may not have correct type definitions for the options prop. */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
