import React from 'react'
// import ModalComponent from '../../../../component/modal/ModalComponent'
import WorldMap from '../graphs/Map';
import Tooltip from '../tooltip/Tooltip';
import './overviewRight.css'




const OverviewRight = () => {
  return (
    <div>
      <div className='overView__right-map'>
        <WorldMap />
      </div>

      <div className="overView__right-tooltip">
        <Tooltip text={"Chicago"} number={"76,541,16"} left={25} top={20} fill={"#66c8ff"}/>
        <Tooltip text={"Berline"} number={"76,541,16"} left={45} top={17} fill={"#7bdda2"} />
        <Tooltip text={"Manaus"} number={"76,541,16"} left={30} top={50} fill={"#f8a243"}/>
        <Tooltip text={"Giza"} number={"76,541,16"} left={48} top={36} fill={"#ff7e7e"}/>
        <Tooltip text={"Shanghai"} number={"76,541,16"} left={65} top={27} fill={"#e8a5ff"}/>
        <Tooltip text={"Queensland"} number={"76,541,16"} left={72} top={65} fill={"#669aff"}/>
      </div>

      <div className="overView__right-modal">
        {/* <ModalComponent/> */}
      </div>
    </div>
  )
}

export default OverviewRight;