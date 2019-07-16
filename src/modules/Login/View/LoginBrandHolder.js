import React from "react";
import { Media } from "reactstrap";
// import Ilustration1 from "../../assets/img/Ilustration1.png";

function LoginBrandHolder() {
  return (
    <Media>
      <Media left>
        {/* <Media
          object
          src={Ilustration1}
          alt="Generic placeholder image"
          style={{ height: "250px" }}
        /> */}
      </Media>
      <Media body>
        <Media heading className="pt-5">
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
}

export default LoginBrandHolder;
