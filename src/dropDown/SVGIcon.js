import React from 'react';
  
  const getPath = (name, props) => {
    switch (name) {
      case "single_arrow_down":
        return (
          <path
            {...props}
            d="M 6 6.5 C 5.872 6.5 5.744 6.451 5.646 6.354 L 0.146 0.854 C -0.049 0.658 -0.05 0.341 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 6 5.293 L 11.146 0.146 C 11.342 -0.049 11.659 -0.05 11.854 0.146 C 12.049 0.342 12.049 0.658 11.854 0.854 L 6.354 6.354 C 6.256 6.451 6.128 6.5 6 6.5"
          />
        );
      case "single_arrow_up":
        return (
          <path
            {...props}
            d="M 6 6.5 C 5.872 6.5 5.744 6.451 5.646 6.354 L 0.146 0.854 C -0.049 0.658 -0.05 0.341 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 6 5.293 L 11.146 0.146 C 11.342 -0.049 11.659 -0.05 11.854 0.146 C 12.049 0.342 12.049 0.658 11.854 0.854 L 6.354 6.354 C 6.256 6.451 6.128 6.5 6 6.5"
          />
        );
      default:
        return <path />;
    }
  };
  
  const SVGIcon = ({
    name = "",
    style = {},
    fill = "#000",
    viewBox = "",
    width = "100%",
    className = "",
    height = "100%"
  }) => (
    <svg
      width={width}
      style={style}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {getPath(name, { fill })}
    </svg>
  );
  
  export default SVGIcon;
