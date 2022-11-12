import './Header.css'
import { Button, Modal, Checkbox, Form, Input, message } from 'antd';
import { Link } from "react-router-dom";
import { PhoneOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
    let nav = useNavigate()
    const [user, setuser] = useState()
    useEffect(function () {
        if (window.localStorage.getItem('token')) {
            setuser(window.localStorage.getItem('username'))
        } else {
            setuser('Đăng Nhập')
        }

    }, [])

    const onFinish = (values) => {
        console.log(values);
        Axios.post('https://shope-b3.thaihm.site/api/auth/sign-in',
            {
                email: values.email,
                password: values.password,
            }
        ).then(function (value) {
            window.localStorage.setItem('token', value.data.token)
            window.localStorage.setItem('username', values.email)

            message.success('Đăng Nhập Thành Công')
            window.location.assign('/home')
            console.log(value);

        }).catch(function (value) {
            console.log(value);
            message.error('Đăng Nhập Thất Bại')

        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [dataSearch, setDataSearch] = useState([])


    const handleSearch = (e) => {
        setTimeout(() => {
           if(e.target.value !== '' && e.target.value.length >= 2){
            axios.get(`https://shope-b3.thaihm.site/api/product/find-products-by-name?productName=${e.target.value}`)
            .then(value => {
                console.log(value.data.products);
                setDataSearch(value.data.products)
            })
            .catch(value => {
                console.log(value);
            })
           }
        }, 500);
    }
    return (
        <div className='Header'>
            <div className="modal fade" id="exampleModal_1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <div className='abc'>
                                <i className="fa-solid fa-magnifying-glass name "></i>  <input type="text" placeholder='Nhập tên tỉnh thành' />
                            </div>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                        </div>
                        <div className="modal-body">
                            <div className='address'>
                                <ul >
                                    <li><p>Hà Nội</p></li>
                                    <li>Hồ Chí Minh</li>
                                    <li>Bắc Ninh</li>
                                    <li>Cao bằng</li>
                                    <li>Phú Thọ</li>
                                    <li>Nam Định</li>
                                    <li>Hà Nam</li>
                                </ul>
                                <ul>
                                    <li><p>Hà Nội</p></li>
                                    <li>Hồ Chí Minh</li>
                                    <li>Bắc Ninh</li>
                                    <li>Cao bằng</li>
                                    <li>Phú Thọ</li>
                                    <li>Nam Định</li>
                                    <li>Hà Nam</li>
                                </ul>
                                <ul >
                                    <li><p>Hà Nội</p></li>
                                    <li>Hồ Chí Minh</li>
                                    <li>Bắc Ninh</li>
                                    <li>Cao bằng</li>
                                    <li>Phú Thọ</li>
                                    <li>Nam Định</li>
                                    <li>Hà Nam</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal_2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='modal' title="ĐĂNG NHẬP TÀI KHOẢN SMEMBER" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

            </Modal>
            <div className='Header__nav'>
                <a href='/home' className='Header__logo'>
                    <img className='Header__img' src="https://brademar.com/wp-content/uploads/2022/10/CellphoneS-Logo-PNG-1.png" alt="" />
                </a>


                <button className='Header__address ' data-bs-toggle="modal" data-bs-target="#exampleModal_1">
                    <div className='phone__icon' >
                        <i className="fa-sharp fa-solid fa-location-dot"></i>                    </div>
                    <div className='phone__content' > Xem giá mua tại </div>
                </button>


                <a className='Header__search'>
                    <div className='search__input' >
                        <input className='input_1' type="text" onChange={handleSearch} placeholder='Bạn cần tìm ....' />
                        <div className="search__input__search">
                            {dataSearch.length > 0 ? dataSearch.map((value,index) => {
                                if( index < 5){
                                    return (
                                        <a href={`./productdetail/${value._id}`}>
                                            <div key={value._id} className="search__input__search__card">
                                            <div className="search__input__search__card__img">
                                                <img src={`https://shope-b3.thaihm.site/${value.thumbnail}`} alt="" />
                                            </div>
                                            <div className="search__input__search__card__info">
                                                <h3>{value.productName}</h3>
                                                <h4>{value.price}</h4>
                                            </div>
                                        </div>
                                        </a>
                                    )
                                }
                            }) : null}
                        </div>
                    </div>
                </a>


                <button className='Header__phone' data-bs-toggle="modal" data-bs-target="#exampleModal_2">
                    <div className='phone__icon' >
                        <PhoneOutlined />
                    </div>
                    <div className='phone__content' > Gọi để mua hàng ....</div>
                </button>

                <button className='Header__address_1' data-bs-toggle="modal" data-bs-target="#exampleModal_3">
                    <div className='address__icon' >
                        <i className="fa-sharp fa-solid fa-location-dot"></i>                    </div>
                    <div className='address__content' >  <a style={{ color: "aliceblue" }} href="https://cellphones.com.vn/dia-chi-cua-hang">Cửa hàng gần bạn nhất</a> </div>
                </button>


                <a className='Header__cart' onClick={function () {
                    nav('/card')
                }}>
                    <div className='cart__icon' ><ShoppingCartOutlined /></div>
                    <div className='cart__content' >Giỏ hàng</div>

                </a>

                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='Header__login' >
                    <div className='login__icon'><UserOutlined /></div>
                    <div className='login__content' >{user ? user : 'ĐĂNG NHẬP'}</div>
                </button>

            </div>

            <div style={{ width: "1000px" }} className='Header_1' ></div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">ĐĂNG NHẬP TÀI KHOẢN SMEMBER</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='Login__modal'>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item className='form__header'
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item className='form__header'
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <a href="">Quên Mật Khẩu ?</a>

                                    <div style={{ display: "flex", width: "200px" }}>

                                        <Button style={{ padding: "0 234px", width: "100%", color: "white", backgroundColor: '#d70018', border: "none" }} type="primary" htmlType="submit">
                                            <p className='dangnhap123'>Đăng Nhập</p>
                                        </Button>

                                    </div>

                                    <div className='Đangkyngay_2'>

                                        <p style={{ color: "black", padding: "20px", right: '10px' }} > Bạn chưa có tài khoản? <Link to={'/signup'} ><button className='DKN' data-bs-dismiss="modal">Đăng ký ngay ?</button></Link></p>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header