import React from 'react';
import MyPoems from '../MyPoems';
import {styleSheet} from "../styles"
const divStyle= {
    background: styleSheet.background,
    // color:styleSheet.color,
    padding:styleSheet.padding,
    // fontSize:styleSheet.fontSize,
    fontFamily:styleSheet.fontFamily
}

export default function App() {
  return <div style={divStyle}>
      <h1 style={{color:styleSheet.color}}>Sayfama Hoş Geldiniz</h1>
      <MyPoems/>
    <footer style={{color:styleSheet.color, 
        fontSize:styleSheet.fontSize}}>Sayfamı Ziyaret Ettiğiniz İçin Teşekkür Ederiz!</footer>
  </div>;
}
