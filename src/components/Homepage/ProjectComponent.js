
import React from 'react';



function ProjectComponent() {
  return (
    <section class="featured">
        <div class="left">
            <div class="inner transition2" className="row">
              <div className='col-2'>
                <svg width="60" height="60" viewBox="0 0 93 93" fill="none" >
                  <g filter="url(#filter0_d)">
                  <rect x="46.4264" width="60" height="60" transform="rotate(45 46.4264 0)" fill="#90867F" fill-opacity="0.4"/>
                  </g>
                  <defs>
                  <filter id="filter0_d" x="0" y="0" width="92.8528" height="92.8528" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </div>
              <div className="col-10">
                  <p class="subtitle">Featured Project</p>
                  <a style={{textDecoration: 'none'}}href="#" class="featured-title">Carbon Nanotube Simulation</a>

                  <p class="featured-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
            </div>    
        </div>
        <a href="#"><img class="right transition2" src="assets/images/carbon_nanotube.png" alt="Featured Project"></img></a>
    </section>
  );
}

export default ProjectComponent;
