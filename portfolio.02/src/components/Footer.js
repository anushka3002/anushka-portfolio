import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer headerTop p-3 flex justify-between bg-gray-800 items-center">
      <div className="container">
          <h3>Copyright © {year} Anushka Priya. All rights reserved</h3>
        </div>

        <div className="footer-body flex justify-between text-2xl">
          <a href="https://github.com/anushka3002" target="_blank" className="mx-2.5 "> <i class="fab fa-github"></i></a>

          <a href="https://twitter.com/anushkalyf" target="_blank" className="mx-2.5 text-2xl">
            <i class="fab fa-twitter-square"></i>
          </a>

          <a href="https://linkedin.com/in/anushka-priya-927697222" target="_blank" className="mx-2.5">
            <i class="fab fa-linkedin"></i>
          </a>

          <a href="https://medium.com/@anushkasakshi2003" target="_blank" className="mx-2.5">
              <i className="fab fa-medium"></i> 
            </a>
        </div>
      </div>

  );
};
export default Footer;
