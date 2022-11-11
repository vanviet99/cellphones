import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './GetAllProduct.css'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import HomeContentSlider__1 from '../components/ProductDetail/HomeContentSlider__1'


function GetAllProduct() {
  let token = window.localStorage.getItem('token')
  const [dataProduct, setDataProduct] = useState([])
  useEffect(() => {
    axios.get('https://shope-b3.thaihm.site/api/product/get-all-products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(value => {
      setDataProduct(value.data.products)
    })
      .catch(value => {
        console.log(value);
      })
  }, [])
  let brand = []
  brand = dataProduct.map(value => {
    return value.brand
  })
  brand = brand.filter((value, index) => brand.indexOf(value) == index)
  console.log(brand);
  return (
    <div className='GetAllProduct'>

      <Header></Header>
      <div className="GetAllProduct__content__img">
          <img src="https://cellphones.com.vn/media/wysiwyg/slide/khai-tr_ng.jpg" alt="" />
        </div>
      <div className='GetAllProduct__content'>
        
        <div className="GetAllProduct__content__slider">
          <HomeContentSlider__1></HomeContentSlider__1>
        </div>
        <div className="GetAllProduct__content__slider__option1">
          <h2>Chọn theo loại</h2>
          {brand.map(value => {
            return (
              <button key={value}><i class="fa-solid fa-flask-vial"></i><p>{value}</p></button>
            )
          })}



        </div>
        <div className="GetAllProduct__content__slider__option">
          <h2>Sắp xếp theo</h2>
          <button><i class="fa-solid fa-arrow-down-wide-short"></i><p>Giá cao - thấp</p></button>
          <button> <i class="fa-solid fa-arrow-down-short-wide"></i><p>Giá thấp - cao</p></button>
          <button className='active__option'> <i class="fa-solid fa-eye"></i><p>Xem nhiều</p></button>

        </div>
        <div className="home__content__list2__cart">
          {dataProduct.map(value => {
            let img = `https://shope-b3.thaihm.site/${value.thumbnail}`
            return (
              <Link to={`/ProductDetail/${value.productName}`}>
                <div key={value._id} className="home__content__list__cart">
                  <div className="home__content__list__cart__img"><img src={img} alt="" /></div>
                  <h3>{value.productName}</h3>
                  <p className='home__content__list__cart__price'>{(value.price * 1).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                  <div className="home__content__list__cart__sale">
                    Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và
                  </div>
                  <div className='home__content__list__cart__star'> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                  <div className='home__content__list__cart__Fav'><p>Yêu thích </p><i className="fa-regular fa-heart"></i></div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default GetAllProduct