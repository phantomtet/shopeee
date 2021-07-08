import './App.css';
import {Link, BrowserRouter} from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiFillCaretDown} from 'react-icons/ai'
import {GiSmartphone, GiLaptop, GiTablet, GiHeadphones, GiWatch} from 'react-icons/gi'
import {GrDesktop} from 'react-icons/gr'
import MainSlider from './components/mainSlider';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{backgroundColor: '#ffc600', display: 'flex'}}>
          <img src='https://cdn.tgdd.vn/2021/07/banner/1200-44-1200x44-1.png' style={{margin: 'auto', width: '100%', maxWidth: '1200px'}}/>
        </div>
        <div className='header'>
          {/* black div */}
          <div style={{backgroundColor: 'black', padding: '5px 0', height: '50px', color: 'white', fontSize: '12px', textAlign: 'center', display: 'flex', width: '100%', margin: 'auto'}}>
            <div style={{display: 'flex', margin: 'auto', width: '1200px', justifyContent: 'space-between'}}>
              {/* logo */}
              <Link to='/' style={{margin: 'auto 5px'}}>
                <i className='icon-logo' style={{width: '141px'}}/>
              </Link>
              {/* xem gia khuyen mai tai */}
              <div className='canclick3' style={{margin: 'auto 10px', minWidth: '127px'}}>
                Xem giá, khuyến mãi tại
                <p style={{color: '#fed101'}}>Hồ Chí Minh <AiFillCaretDown/></p>
              </div>
              {/* search input */}
              <input type='text' placeholder='Bạn tìm gì...' style={{padding: '8px 35px 8px 13px', margin: 'auto 5px'}}/>
              {/* gio hang */}
              <div className='flex canclick' style={{border: '1px solid gray', margin: 'auto 5px', padding: '5px', borderRadius: '4px'}}>
                <HiOutlineShoppingCart size='25' style={{margin: 'auto 5px auto 0'}}/>
                <p style={{margin: 'auto', minWidth: '50px'}}>Giỏ hàng</p>
              </div>
              {/* lich su don hang */}
              <div className='canclick2 flex' style={{minWidth: '65px',}}>
                <p style={{margin: 'auto 5px', minWidth: '60px'}}>Lịch sử đơn hàng</p>
              </div>
              {/* 24h cong nghe */}
              <div className='canclick2 flex'>
                <p style={{width: '59px', margin: 'auto 5px'}}>24h <br/>Công nghệ</p>
              </div>
              {/* hoi dap */}
              <div className='canclick2 ' style={{display: 'flex'}}>
                <p style={{minWidth: '59px', margin: 'auto 5px'}}>Hỏi đáp</p>
              </div>
              {/* game app */}
              <div className='canclick2 ' style={{display: 'flex'}}>
                <p style={{minWidth: '59px', margin: 'auto 5px'}}>Game App</p>
              </div>
              
            </div>
          </div>
          {/* yellow div */}
          <div style={{display: 'flex', backgroundColor: '#ffd100', padding: 'auto 0', minHeight: '43px', color: 'black', fontSize: '12px', textAlign: 'center', maxWidth: '100%', margin: 'auto'}}>
            <div style={{display: 'flex', margin: '0 auto', width: '1200px', justifyContent: 'space-between'}}>
              {/* dien thoai */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex',}}>
                  <GiSmartphone size='25' color='black' style={{margin: 'auto '}}/>
                  <p style={{margin: 'auto'}}>Điện thoại</p>
                </div>
              </Link>
              {/* Laptop */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex',}}>
                  <GiLaptop size='25' color='black' style={{margin: 'auto 5px'}}/>
                  <p style={{margin: 'auto'}}>Laptop</p>
                </div>
              </Link>
              {/* Tablet */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex',}}>
                  <GiTablet size='25' color='black' style={{margin: 'auto 5px'}}/>
                  <p style={{margin: 'auto'}}>Tablet</p>
                </div>
              </Link>
              {/* phu kien */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex',}}>
                  <GiHeadphones size='25' color='black' style={{margin: 'auto '}}/>
                  <p style={{margin: 'auto', minWidth: '60px'}}>Phụ kiện<br/><AiFillCaretDown/></p>
                </div>
              </Link>
              {/* dong ho thong minh */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex',}}>
                  <GiWatch size='25' color='black' style={{margin: 'auto '}}/>
                  <p style={{margin: 'auto 5px', minWidth: '70px', textAlign: 'start'}}>Đồng hồ thông minh</p>
                </div>
              </Link>
              {/* dong ho thoi trang */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex',}}>
                  <GiWatch size='25' color='black' style={{margin: 'auto '}}/>
                  <p style={{margin: 'auto 5px', minWidth: '70px', textAlign: 'start'}}>Đồng hồ thời trang</p>
                </div>
              </Link>
              {/* pc, may in */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex',}}>
                  <GrDesktop size='25' color='black' style={{margin: 'auto '}}/>
                  <p style={{margin: 'auto 5px', minWidth: '60px'}}>PC, Máy in<br/><AiFillCaretDown/></p>
                </div>
              </Link>
              {/* may cu gia re */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex', margin: 'auto'}}>
                  <p style={{margin: 'auto 5px', minWidth: '67px', textAlign: 'start'}}>Máy cũ giá rẻ</p>
                </div>
              </Link>
              {/* sim, the cao */}
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex', margin: 'auto'}}>
                  <p style={{margin: 'auto 5px', minWidth: '60px', textAlign: 'start'}}>Sim, Thẻ cào</p>
                </div>
              </Link>
              <Link className='canclick' to='/' style={{padding: '0 10px', display: 'flex'}}>
                <div style={{display: 'flex', margin: 'auto'}}>
                  <p style={{margin: 'auto 5px', minWidth: '50px', textAlign: 'start'}}>Trả góp điện nước</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
        <div>
          <MainSlider/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
