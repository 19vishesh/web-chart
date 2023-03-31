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
        <Tooltip text={"Chicago"} number={"76,541,16"} left={25} top={20} fill={"#66c8ff"} iconName={`RiDeleteBinLine className='icons'`} />
        <Tooltip text={"Berline"} number={"76,541,16"} left={45} top={17} fill={"#7bdda2"} iconName={"MdOutlineMapsHomeWork"}/>
        <Tooltip text={"Manaus"} number={"76,541,16"} left={30} top={50} fill={"#f8a243"} iconName={"RiBuilding2Line"}/>
        <Tooltip text={"Giza"} number={"76,541,16"} left={48} top={36} fill={"#ff7e7e"} iconName={"HiOutlineBuildingOffice2"}/>
        <Tooltip text={"Shanghai"} number={"76,541,16"} left={65} top={27} fill={"#e8a5ff"} iconName={"TbBuildingPavilion"}/>
        <Tooltip text={"Queensland"} number={"76,541,16"} left={72} top={65} fill={"#669aff"} iconName={"BsReverseLayoutTextWindowReverse"}/>
      </div>

      <div className="overView__right-modal">
        {/* <ModalComponent/> */}
      </div>
    </div>
  )
}

export default OverviewRight;


