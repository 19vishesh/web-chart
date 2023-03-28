import React from 'react'
import { RiseOutlined, CrownOutlined, BarChartOutlined } from '@ant-design/icons';
import { RingProgress } from '@ant-design/plots';

const Left = () => {
    
    const DemoRingProgress1 = () => {
        const config = {
            height: 100,
            width: 100,
            autoFit: false,
            percent: 0.27,
            color: ['#023AFF', '#E8EDF3'],
        };
        return <RingProgress {...config} />;
    };
    const DemoRingProgress2 = () => {
        const config = {
            height: 100,
            width: 100,
            autoFit: false,
            percent: 0.67,
            color: ['#00B929', '#E8EDF3'],
        };
        return <RingProgress {...config} />;
    };

    return (
        <div className='overView__left' style={{
            width: "218px", height: "270px", left: "60px", top: "406px",
            display:"flex", flexDirection:"column", justifyContent:"space-between"
        }}>

            <div className="overView__left-title" style={{ background: "#fEE1EA", }}>
                <p>WSTF FRONT-END HACKATHON</p>
            </div>

            <div className="overView__left-amount" style={{ background: "#EEF0FA", }}>
                <div className="overView__left-amount__box1">
                    <p className="users">
                        All User<span> DETAILS</span>
                    </p>
                </div>
                <div className="overView__left-amount__box2">
                    <p className="totalUser">2,431,340</p>
                </div>
            </div>

            <div className="overView__left-side__indicators" style={{ background: "#fEE1EA", }}>
                <div className="overView__left-side__indicators-box1" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems:"center"
                }}>
                    <div className='overView__left' style={{
                        background: "#8676FF", width: "70px",
                        height: "70px", borderRadius: "20px"
                    }}>
                        <RiseOutlined style={{color:"white", fontSize:"1.3rem"}}/>
                    </div>
                    
                    <div>
                        <p>Total earning</p>
                        <p>540,549</p>
                    </div>
                </div>

                <div className="overView__left-side__indicators-box1" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div className='overView__left' style={{
                        background: "#8676FF", width: "70px",
                        height: "70px", borderRadius: "20px"
                    }}>
                        <CrownOutlined style={{ color: "white", fontSize: "1.3rem" }} />
                    </div>

                    <div>
                        <p>Total earning</p>
                        <p>540,549</p>
                    </div>
                </div>

                <div className="overView__left-side__indicators-box1" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div className='overView__left' style={{
                        background: "#8676FF", width: "70px",
                        height: "70px", borderRadius: "20px"
                    }}>
                        <BarChartOutlined style={{ color: "white", fontSize: "1.3rem" }} />
                    </div>

                    <div>
                        <p>Total earning</p>
                        <p>540,549</p>
                    </div>
                </div>
                
            </div>

            <div className="overView__left-dough" style={{ background:"#EEF0FA",display:"flex", justifyContent:"space-between", justifyContent:"center"}}>
                <div className='overView__left-dough__bax1' style={{ display:"flex" }}>
                    <div>{DemoRingProgress1()}</div>
                    <div>
                        <p>92,980</p>
                        <p>Active users</p>
                    </div>
                </div>
                <div className='overView__left-dough__bax2' style={{ display: "flex" }}>
                    <div>{DemoRingProgress2()}</div>
                    <div>
                        <p>92,980</p>
                        <p>New users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Left;