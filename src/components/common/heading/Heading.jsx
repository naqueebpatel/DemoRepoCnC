import React from "react";

const Heading = ( { subtitle, title } ) =>
{
  return (
    <>
      <div id='heading'>
        <h3>{ subtitle } </h3>
        <h1 className="hover-underline-animation"><span style={ { color: "#C60C30" } }>{ title }</span> </h1>
      </div>
    </>
  );
};

export default Heading;
