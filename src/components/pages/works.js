import React from 'react';

export default function works() {
  return (
    <section class="text-center" id="mywork">
      <h2>My Work</h2>
      <div class="container row">
        <div class="card mx-5" style="width: 18rem">
          <img
            class="card-img-top"
            src="./Assets/css/images/tech-blog-home.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Tech-Blog</h5>
            <p class="card-text">
              This is the link the tech blog I created where users can create
              accounts, posts, and leave comments
            </p>
            <a href="https://super-duper-tech-blog.herokuapp.com/" class="btn btn-primary">Deploy Application</a>
            <a href="https://github.com/ChrisCodes54/tech-blog" class="btn btn-primary">GitHub Repo</a>
          </div>
        </div>
        <div class="card mx-5" style="width: 18rem">
          <img
            class="card-img-top"
            src="./Assets/css/images/dayplanner.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Day Planner</h5>
            <p class="card-text">
              A Day planner where users can save and add notes
            </p>
            <a href="https://chriscodes54.github.io/Day-Planner/" class="btn btn-primary">Deploy Appplication</a>
            <a href="https://github.com/ChrisCodes54/Day-Planner" class="btn btn-primary">Github Repo</a>
          </div>
        </div>


        <div class="card mx-5" style="width: 18rem">
          <img
            class="card-img-top"
            src="./Assets/css/images/everyone critic.png"
            alt="Card image cap" />

          <div class="card-body">
            <h5 class="card-title">Movie Search DataBase</h5>
            <p class="card-text">
              A website created so anyone can search information about any movie they desire
            </p>
            <a href="https://natpitt2393.github.io/Everyone-s-A-Critic/" class="btn btn-primary">Deploy Appplication</a>
            <a href="https://github.com/natpitt2393/Everyone-s-A-Critic" class="btn btn-primary">Github Repo</a>
          </div>
        </div>
      </div>
    </section>
  );
}