import React from "react";
import Dayplanner from "../assets/dayplanner.png";
import Techbloghome from "../assets/tech-blog-home.png";
import Everyonesacritic from "../assets/everyonesacritic.png";
import "../Styles/Works.css";

export default function Works() {
  return (
    <div class="card-body">
      <div class="container">
        <div class="card-deck">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="img-box">
                  <img
                    className="card-img-top"
                    src={Dayplanner}
                    alt="Card image cap"
                  ></img>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Day Planner</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={Techbloghome}
                  alt="Card image cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Tech-Blog</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div className="img-box">
                  <img
                    class="card-img-top"
                    src={Everyonesacritic}
                    alt="Card image cap"
                  ></img>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Everyone's A Critic</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
