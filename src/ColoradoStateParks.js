import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerdePark from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerdePark />
    </div>
  );
}