
import React from 'react';




function SkillsComponent() {
  return (
    <section class="skills">
        <div class="skills-container">
            <ul >
                <li class="transition2">
                    <div class="icon-container one">
                        <img src="assets/icons/skills_cad.png" alt="cad_icon"/>
                    </div>
                    <p class="skill-title">CAD & Simulation</p>
                    <p class="featured-desc skill-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </li>
                <li class="transition2">
                    <div class="icon-container one">
                        <img src="assets/icons/skills_3dprinting.png" alt="3dprinting_icon"/>
                    </div>
                    <p class="skill-title">3D Printing</p>
                    <p class="featured-desc skill-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </li>
                <li class="transition2">
                    <div class="icon-container one">
                        <img src="assets/icons/skills_robotics.png" alt="robotics_icon"/>
                    </div>
                    <p class="skill-title">Robotics</p>
                    <p class="featured-desc skill-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </li>
            </ul>
            
        </div>
    </section>
  );
}

export default SkillsComponent;
