import React from "react";

const sMediaImg = [
  "https://www.commune.ph/wp-content/uploads/2017/05/fb-white.png",
  "https://www.commune.ph/wp-content/uploads/2017/05/ig-white.png",
  "https://icon-library.com/images/twitter-icon-png-black/twitter-icon-png-black-22.jpg"
];
function footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <img className="socialMedia" src={sMediaImg[0]} alt="" />
      <img className="socialMedia" src={sMediaImg[1]} alt="" />
      <img className="socialMedia" src={sMediaImg[2]} alt="" />
      <br />
      <ul>
        <li>Info</li>
        <li>Support</li>
        <li>Marketing</li>
      </ul>
      <br />
      <ul>
        <li>Terms of Use </li>
        <li> Privacy Policy</li>
      </ul>
      <br />
      <p className="copyRight">Copyright ⓒ {year} GAMESPEDIA</p>
    </div>
  );
}
export default footer;
