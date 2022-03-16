import React from 'react'
import { LineWave } from "react-loader-spinner";

const CustomLoader = ({
  color,
  type,
}) => {
  return (
    <div className="row m-0 d-flex justify-content-center">
      <div className="col-12 align-items-center text-center ">
        <LineWave
          color="blue"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
          firstLineColor="blue"
          middleLineColor="green"
          lastLineColor="grey"
        />
      </div>
    </div>
  )

}

export default CustomLoader 