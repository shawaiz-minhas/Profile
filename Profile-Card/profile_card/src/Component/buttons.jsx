import React from "react";

function Buttons(){
    return(
        <div className="social">
            <a href="mailto: shawaizminhas456@gmail.com">
            <button className="btn">
              <i class="fa-solid fa-envelope fa"></i> <span>Email</span>
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/shawaiz-minhas-6a81a61aa/"
            target="_blank"
          >
            <button className="btn link">
              <i class="fa-brands fa-linkedin fa"></i> <span>Linkdein</span>
            </button>
          </a>
        </div>
    )
}
export default Buttons