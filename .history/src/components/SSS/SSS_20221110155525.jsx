import React, { useState } from 'react'
import {
    MobileOutlined ,
    RightOutlined ,
    LaptopOutlined ,
    TabletOutlined ,
    SoundOutlined ,
    ClockCircleOutlined ,
    HomeOutlined 
  } from '@ant-design/icons';
 import './SSS.css'
 import { Col, Row } from 'antd';
function SSS() {
  const [isShowMegaMenu, setShowMegaMenu] = useState(false)
  function handleListSelect(data){
    setShowMegaMenu(true)
  }

  function blurSelect(){
    setShowMegaMenu(false)
  }

  const menuConfig = [{
    icon1: <MobileOutlined></MobileOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Dien thoai'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Lap top'
  }, {
    icon1: <TabletOutlined></TabletOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <SoundOutlined></SoundOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <ClockCircleOutlined></ClockCircleOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <HomeOutlined></HomeOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, 
  ]

  return (
        <React.Fragment>
            <div id="nav" onMouseLeave={blurSelect}>
                    <div className="nav-menu">
                        <Row>
                           <Col span={4} className="nav-menu__title parent">
                                  {menuConfig.map(item=>{
                                    return <div className="nav-menu-list" onMouseOver={handleListSelect} >
                                    <p><span className='nav-menu__title-icon menu'>{item.icon1}</span>{item.text}</p>
                                    <span className='nav-mennu__icon'>{item.icon2}</span>
                                    </div>
                                  })}
                                    
                                    
                           </Col>
                            {isShowMegaMenu ? <Col span={20} className='nav__menu child'>
                                <Row>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                             Ch???n Theo H??ng
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p><span>iphone</span> 
                                                       <span>Samsung</span> 
                                                       <span>Iphone</span> 
                                                       <span>Xiaomi</span>
                                                       <span>OPPO</span>
                                                       <span>Nokia</span>
                                                       <span>Asus</span>
                                                       <span>OnePlus</span>
                                                       <span>Nobuta</span>
                                                       <span>??i???n Tho???i Ph??? Th??ng</span>
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Lo???i ??i???n tho???i
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>Android</span> 
                                                    <span>Iphone</span> 
                                                    <span> ??i???n Tho???i Ph??? th??ng</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Ch???n theo nhu c???u
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                         <p>
                                                         <span> H??? tr??? 5G</span> 
                                                         <span> ??i???n Tho???i Gamming</span> 
                                                         <span> Pin tr??u</span> 
                                                        </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           ??i???n tho???i h??t
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>  Iphone 14</span> 
                                                    <span>  Galaxy Z Fold4</span> 
                                                    <span>  Ipone 13</span> 
                                                    <span>  vivo Y35</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                           </Col> : null}
                           {/* <Col span={20} className='nav__menu'>
                                <Row>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                             Ch???n Theo H??ng
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p><span>iphone</span> 
                                                       <span>Samsung</span> 
                                                       <span>Iphone</span> 
                                                       <span>Xiaomi</span>
                                                       <span>OPPO</span>
                                                       <span>Nokia</span>
                                                       <span>Asus</span>
                                                       <span>OnePlus</span>
                                                       <span>Nobuta</span>
                                                       <span>??i???n Tho???i Ph??? Th??ng</span>
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Lo???i ??i???n tho???i
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>Android</span> 
                                                    <span>Iphone</span> 
                                                    <span> ??i???n Tho???i Ph??? th??ng</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Ch???n theo nhu c???u
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                         <p>
                                                         <span> H??? tr??? 5G</span> 
                                                         <span> ??i???n Tho???i Gamming</span> 
                                                         <span> Pin tr??u</span> 
                                                        </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           ??i???n tho???i h??t
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>  Iphone 14</span> 
                                                    <span>  Galaxy Z Fold4</span> 
                                                    <span>  Ipone 13</span> 
                                                    <span>  vivo Y35</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                           </Col> */} 
  {/* <Col span={14} className='box-s'>
    <Carousel>
      <Carousel.Item interval={1000} >
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/xiaomi-12t-sliding.jpg"
          alt=""
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/xiaomi-12t-sliding.jpg"
          alt=""
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/690-300-gt3.png"
          alt=""
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/sliding-fold4-th11-v2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Col> */}
                        </Row>
                    </div>
            </div>
    
        </React.Fragment>
   
  )
}

export default SSS