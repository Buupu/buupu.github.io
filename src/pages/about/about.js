import React from "react";
import FrameContainer from "../../components/frameContainer/frameContainer";
import MyImage from "../../assets/sammyfattah.JPG";
import "./about.css";
export default function About(props) {
  return (
    <div className="About">
      <div className="About__TextWrapper">
        <h1>About Me</h1>
        <p>
          Sit dolore dolor cillum laboris ad pariatur nostrud minim quis eu
          cillum ullamco. Amet consequat sint ad sint reprehenderit. Anim do
          adipisicing id fugiat mollit duis occaecat fugiat veniam aliqua
          aliquip sit velit anim. Nulla adipisicing sint cillum ipsum ad nostrud
          ipsum. Cupidatat dolor ut dolor labore cupidatat ipsum ullamco
          cupidatat pariatur deserunt enim consequat irure pariatur. Non
          incididunt Lorem mollit tempor voluptate qui est voluptate do
          consequat fugiat. Nostrud est ad do reprehenderit excepteur veniam
          incididunt.
        </p>
        <p>
          Sit dolore dolor cillum laboris ad pariatur nostrud minim quis eu
          cillum ullamco. Amet consequat sint ad sint reprehenderit. Anim do
          adipisicing id fugiat mollit duis occaecat fugiat veniam aliqua
          aliquip sit velit anim. Nulla adipisicing sint cillum ipsum ad nostrud
          ipsum. Cupidatat dolor ut dolor labore cupidatat ipsum ullamco
          cupidatat pariatur deserunt enim consequat irure pariatur. Non
          incididunt Lorem mollit tempor voluptate qui est voluptate do
          consequat fugiat. Nostrud est ad do reprehenderit excepteur veniam
          incididunt.
        </p>
        <p>
          Sit dolore dolor cillum laboris ad pariatur nostrud minim quis eu
          cillum ullamco. Amet consequat sint ad sint reprehenderit. Anim do
          adipisicing id fugiat mollit duis occaecat fugiat veniam aliqua
          aliquip sit velit anim. Nulla adipisicing sint cillum ipsum ad nostrud
          ipsum. Cupidatat dolor ut dolor labore cupidatat ipsum ullamco
          cupidatat pariatur deserunt enim consequat irure pariatur. Non
          incididunt Lorem mollit tempor voluptate qui est voluptate do
          consequat fugiat. Nostrud est ad do reprehenderit excepteur veniam
          incididunt.
        </p>
        <p>
          Sit dolore dolor cillum laboris ad pariatur nostrud minim quis eu
          cillum ullamco. Amet consequat sint ad sint reprehenderit. Anim do
          adipisicing id fugiat mollit duis occaecat fugiat veniam aliqua
          aliquip sit velit anim. Nulla adipisicing sint cillum ipsum ad nostrud
          ipsum. Cupidatat dolor ut dolor labore cupidatat ipsum ullamco
          cupidatat pariatur deserunt enim consequat irure pariatur. Non
          incididunt Lorem mollit tempor voluptate qui est voluptate do
          consequat fugiat. Nostrud est ad do reprehenderit excepteur veniam
          incididunt.
        </p>
      </div>
      <FrameContainer>
        <img src={MyImage} alt="Sammy" />
      </FrameContainer>
    </div>
  );
}
