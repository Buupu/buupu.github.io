import React from "react";
import FrameContainer from "../../../../components/frameContainer/frameContainer";
import VS from "../../../../assets/vs.JPG";
export default function Buu(props) {
  return (
    <FrameContainer>
      <div className="Projects__DetailedViewContainer">
        <div className="Projects__DetailedViewImageContainer">
          <img src={VS} alt="VW Code" />
        </div>
        <div>
          <h2>Buu</h2>
          <h3>A dark mode theme for Visual Studio Code</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, augue nec volutpat molestie, ex nisl ornare massa, at
            vehicula dolor nulla eget metus. Ut quis nisl ante. Pellentesque vel
            commodo diam, vel gravida mauris. Vivamus in dui a magna vestibulum
            dictum. Sed id purus gravida, gravida massa ut, mollis dui. Donec
            dictum turpis vitae dictum egestas. Curabitur at sapien posuere,
            porttitor velit a, congue sapien. Quisque feugiat dolor et turpis
            placerat aliquet. Phasellus quis nisi enim. Donec placerat sodales
            velit, sit amet posuere libero malesuada ut. Etiam aliquam fringilla
            scelerisque.
          </p>
          <p>
            Nam quis erat eget orci tempus mattis at at turpis. Fusce consequat,
            lacus eu lobortis commodo, orci turpis mollis eros, id vestibulum
            odio mi a velit. Praesent quis enim vitae urna blandit cursus. Cras
            turpis ante, tincidunt quis placerat convallis, imperdiet ut arcu.
            Donec congue enim molestie ipsum gravida, ac tincidunt massa
            sollicitudin. Ut quis justo consequat, lobortis elit et, cursus
            arcu. Suspendisse ac mi ut est facilisis finibus. Quisque maximus
            justo lacus, sed iaculis purus mollis at. Vivamus facilisis eros
            est, ultrices malesuada turpis tincidunt eget. Suspendisse vel
            pharetra lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis sit amet lorem scelerisque, ornare nibh eu, eleifend
            elit. Nulla libero libero, tincidunt sit amet metus nec, lacinia
            auctor magna. Donec id commodo turpis, ut fringilla quam.
          </p>
        </div>
      </div>
    </FrameContainer>
  );
}
