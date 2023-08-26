import './App.css'
import React from "react"
import {useState,useEffect} from "react"
export default function App() {
  const [ham,setHam] = useState(false)
  return (
    <div className="outer">
      <div className="navbar">
        <img style={{ height: "44px" }} src="/images/dollar.png" width="30"></img>
        <div>
          <ul className="nav-items">
            <li>SIGN IN</li>
            <li>LEGAL</li>
            <li>LICENSES</li>
            <li>SECURITY</li>
            <li>CAREERS</li>
            <li>PRESS</li>
            <li>SUPPORT</li>
            <li>STATUS</li>
            <li>CODEBLOG</li>
          </ul>
        </div>
        <button className='hamburger' onClick={() => setHam(!ham)}><img src="/images/hamburger.png" width="40" className="hide mr-3" alt="" /></button>
        <img className="eye" style={{ height: "36px" }} src="/images/eye.png" width="64"></img>
      </div>
       {ham?<div className="show">
          <ul className="items">
            <li className="list">SIGN IN</li>
            <li className="list">LEGAL</li>
            <li className="list">LICENSES</li>
            <li className="list">SECURITY</li>
            <li className="list">CAREERS</li>
            <li className="list">PRESS</li>
            <li className="list">SUPPORT</li>
            <li className="list">STATUS</li>
            <li className="list">CODEBLOG</li>
          </ul>
        </div>:""}
      <div className="text">
        <span style={{ zIndex: "0" }} className="para1">CASH</span>
        <span style={{ marginTop: "-7vh", zIndex: "20" }} className="para2">APP</span>
        <img className="phoneimage" src="/images/phone.png" width="370"></img>
      </div>
      <div className="box">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.167 4.24004C13.998 3.25378 14.4149 2.18824 14.4149 1.04702V1.04701C14.4149 0.895646 14.4079 0.743074 14.391 0.590515C13.8121 0.620545 13.1965 0.795936 12.5458 1.11308C11.8936 1.43504 11.3559 1.83862 10.933 2.32401C10.0861 3.28266 9.60918 4.45511 9.60918 5.55067C9.60918 5.7021 9.6189 5.84619 9.63566 5.9831C10.951 6.09001 12.1641 5.4125 13.167 4.24004ZM17.5912 20.5792C18.0644 19.9045 18.4729 19.1707 18.818 18.3734C18.9603 18.0354 19.0942 17.6833 19.2208 17.3156C18.6364 17.0705 18.1109 16.7255 17.6405 16.279C16.6024 15.3169 16.0742 14.1053 16.0588 12.6493C16.0419 10.78 16.8911 9.32287 18.6081 8.28253C17.6489 6.91907 16.2066 6.16227 14.2867 6.00733C13.5782 5.94718 12.7134 6.09986 11.6887 6.46862C10.6051 6.86625 9.96595 7.0657 9.77735 7.0657C9.52509 7.0657 8.9497 6.89512 8.05359 6.55876C7.15494 6.22354 6.4318 6.05297 5.88036 6.05297C4.87255 6.06973 3.93672 6.33172 3.07061 6.84583C2.2045 7.35995 1.51249 8.06026 0.992309 8.94806C0.330442 10.0533 0 11.3723 0 12.9016C0 14.2366 0.245085 15.6155 0.733989 17.0396C1.1905 18.358 1.77321 19.5144 2.48198 20.5116C3.14259 21.4455 3.69403 22.1047 4.1349 22.4892C4.82565 23.1315 5.51766 23.4371 6.21193 23.4076C6.66844 23.3921 7.26551 23.2357 8.00669 22.9357C8.74673 22.6371 9.4386 22.4892 10.0837 22.4892C10.6988 22.4892 11.3715 22.6371 12.1035 22.9357C12.8331 23.2357 13.4599 23.3836 13.9797 23.3836C14.7037 23.3667 15.3798 23.0695 16.0108 22.4892C16.4179 22.1356 16.9461 21.499 17.5912 20.5792Z" fill="#00D54B" />
        </svg>
        <p className="btn">APP STORE</p>
         </div>
        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.504946 21.3146L9.8176 12.0284L13.1002 15.3012L2.0295 21.4392C1.60857 21.6727 1.09301 21.6692 0.674726 21.4295L0.504946 21.3146ZM8.87849 11.0919L0 19.9448V2.23913L8.87849 11.0919ZM14.4267 7.43357L18.7642 9.83801C19.1904 10.075 19.4548 10.5189 19.4548 11C19.4548 11.481 19.1904 11.9249 18.7642 12.1619L14.3082 14.6318L10.7576 11.0919L14.4267 7.43357ZM0.406786 0.771175C0.486376 0.694239 0.575686 0.627032 0.674726 0.570436C1.09301 0.330788 1.60857 0.32725 2.0295 0.560709L13.2187 6.76415L9.8176 10.1554L0.406786 0.771175Z" fill="#00D54B" />
        </svg>
          <p className="btn">GOOGLE PLAY</p>
        </div>
      </div>
      <img className='image1' src="/images/mercor4.png"></img>
      <img className='image2' src="/images/mercor1.png"></img>
      <img className='image3' src="/images/mercor2.png"></img>
      <img className='image4' src="/images/mercor3.png"></img>
      <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="18" height="30" viewBox="0 0 18 30" fill="none">
  <path d="M9.69361 29.6495L17.7513 20.4362C18.121 20.0137 18.0726 19.3748 17.6455 19.0109C17.2178 18.6456 16.5717 18.6921 16.202 19.1147L10.0265 26.1768V1.01089C10.0265 0.452881 9.56877 0 9.00321 0C8.43765 0 7.97988 0.452881 7.97988 1.01089V26.4308L4.34299 22.4055L1.82561 19.2609C1.47495 18.8235 0.831623 18.7487 0.388182 19.0951C0.133032 19.2946 0 19.5905 0 19.889C0 20.1087 0.0716343 20.3298 0.221039 20.5158L2.77798 23.7055L8.15658 29.6617C8.35237 29.8787 8.63345 30.002 8.92817 30C9.2222 29.9973 9.50123 29.8706 9.69361 29.6495Z" fill="#00D54B"/>
</svg>
      <p className='textnew'>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
        <div className="bottomshow">
          <h1 className="showpara">CASH APP</h1>
          <p className='textnew1'>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
          <div className="box1">
        <div className="flex1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.167 4.24004C13.998 3.25378 14.4149 2.18824 14.4149 1.04702V1.04701C14.4149 0.895646 14.4079 0.743074 14.391 0.590515C13.8121 0.620545 13.1965 0.795936 12.5458 1.11308C11.8936 1.43504 11.3559 1.83862 10.933 2.32401C10.0861 3.28266 9.60918 4.45511 9.60918 5.55067C9.60918 5.7021 9.6189 5.84619 9.63566 5.9831C10.951 6.09001 12.1641 5.4125 13.167 4.24004ZM17.5912 20.5792C18.0644 19.9045 18.4729 19.1707 18.818 18.3734C18.9603 18.0354 19.0942 17.6833 19.2208 17.3156C18.6364 17.0705 18.1109 16.7255 17.6405 16.279C16.6024 15.3169 16.0742 14.1053 16.0588 12.6493C16.0419 10.78 16.8911 9.32287 18.6081 8.28253C17.6489 6.91907 16.2066 6.16227 14.2867 6.00733C13.5782 5.94718 12.7134 6.09986 11.6887 6.46862C10.6051 6.86625 9.96595 7.0657 9.77735 7.0657C9.52509 7.0657 8.9497 6.89512 8.05359 6.55876C7.15494 6.22354 6.4318 6.05297 5.88036 6.05297C4.87255 6.06973 3.93672 6.33172 3.07061 6.84583C2.2045 7.35995 1.51249 8.06026 0.992309 8.94806C0.330442 10.0533 0 11.3723 0 12.9016C0 14.2366 0.245085 15.6155 0.733989 17.0396C1.1905 18.358 1.77321 19.5144 2.48198 20.5116C3.14259 21.4455 3.69403 22.1047 4.1349 22.4892C4.82565 23.1315 5.51766 23.4371 6.21193 23.4076C6.66844 23.3921 7.26551 23.2357 8.00669 22.9357C8.74673 22.6371 9.4386 22.4892 10.0837 22.4892C10.6988 22.4892 11.3715 22.6371 12.1035 22.9357C12.8331 23.2357 13.4599 23.3836 13.9797 23.3836C14.7037 23.3667 15.3798 23.0695 16.0108 22.4892C16.4179 22.1356 16.9461 21.499 17.5912 20.5792Z" fill="#00D54B" />
        </svg>
        <p className="btn1">APP STORE</p>
         </div>
        <div className='flex1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.504946 21.3146L9.8176 12.0284L13.1002 15.3012L2.0295 21.4392C1.60857 21.6727 1.09301 21.6692 0.674726 21.4295L0.504946 21.3146ZM8.87849 11.0919L0 19.9448V2.23913L8.87849 11.0919ZM14.4267 7.43357L18.7642 9.83801C19.1904 10.075 19.4548 10.5189 19.4548 11C19.4548 11.481 19.1904 11.9249 18.7642 12.1619L14.3082 14.6318L10.7576 11.0919L14.4267 7.43357ZM0.406786 0.771175C0.486376 0.694239 0.575686 0.627032 0.674726 0.570436C1.09301 0.330788 1.60857 0.32725 2.0295 0.560709L13.2187 6.76415L9.8176 10.1554L0.406786 0.771175Z" fill="#00D54B" />
        </svg>
          <p className="btn1">GOOGLE PLAY</p>
        </div>
      </div>
        </div>
    </div>
  )
}
