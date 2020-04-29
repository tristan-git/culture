import { useFormikWizard } from "formik-wizard";
import React from "react";

function Final() {
  const { values } = useFormikWizard();

  return (
    <div>
      <div>
        <h1>Merci d'avoir participer les loosers !</h1>

        <p>vos reponse</p>
        <p>1: {values.step1.reponse1ValueInput}</p>
        <p>2 : {values.step2.reponse2ValueInput}</p>
      </div>
    </div>
  );
}

export default Final;
