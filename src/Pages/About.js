import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import '../Styles/About.css'
export default function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <img src="profile-pic.jpg" alt="Chris standing smiling at the camera" width='500' height='500'/> 
          </Col>
          <Col className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            volutpat diam ut venenatis tellus in. Luctus accumsan tortor posuere
            ac ut consequat. Sit amet nisl suscipit adipiscing bibendum est
            ultricies integer quis. Et ultrices neque ornare aenean euismod. Et
            tortor at risus viverra adipiscing. Neque convallis a cras semper
            auctor neque vitae tempus. Aliquam ut porttitor leo a diam
            sollicitudin tempor. Risus viverra adipiscing at in tellus integer
            feugiat scelerisque. Purus viverra accumsan in nisl nisi
            scelerisque. Pellentesque dignissim enim sit amet. Amet tellus cras
            adipiscing enim eu turpis egestas pretium aenean. Amet risus nullam
            eget felis eget nunc lobortis. Risus nullam eget felis eget nunc
            lobortis mattis. Velit sed ullamcorper morbi tincidunt ornare massa
            eget egestas. Cras fermentum odio eu feugiat pretium nibh ipsum.
            Integer enim neque volutpat ac tincidunt vitae semper. Sed
            ullamcorper morbi tincidunt ornare massa. Natoque penatibus et
            magnis dis parturient montes nascetur ridiculus mus. Diam in arcu
            cursus euismod quis. Vitae tempus quam pellentesque nec nam aliquam.
            Adipiscing tristique risus nec feugiat in fermentum posuere. Etiam
            sit amet nisl purus. Cum sociis natoque penatibus et.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
