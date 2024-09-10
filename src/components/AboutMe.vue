<template>
  <div class="about-me-container">
    <div class="profile-section">
      <div class="bio-polaroid">
        <PolaroidPhoto image-src="/img/me.jpg" caption="me" style="transform: rotate(3deg); z-index: 2"/>
      </div>

      <h1>Hi!</h1>
      <p class="bio-text">
        My name is Peter Unterthurner and I'm a passionate web developer specializing in Vue.js, Java Spring, Python,
        Typo3 (although i wish i wouldn't) and
        other modern web technologies.
      </p>

      <p class="bio-text">
        I enjoy solving complex problems and building elegant user experiences. During my professional life I've worked
        on a variety of projects.
        The bigger ones include: a web application for Insurance Providers, a WebApp Civil Protection Services, various
        WebApps for snowmaking systems, and a Webpresence for a local chain of banks.
      </p>

      <p class="bio-text">
        In my free time, I love cooking, hiking and travelling the nordic countries (Although i wish i could do that
        more often).
      </p>

      <div class="bio-polaroid">
        <PolaroidPhoto image-src="/img/island1.jpg" caption="Icelandic planes" style="transform: rotate(10deg)"/>
        <PolaroidPhoto image-src="/img/island2.jpg" caption="Glacier Lake" style="transform: rotate(-5deg)"/>
      </div>

      <p class="bio-text">
        I'm a big dog enthusiast and I have a lovely swiss mountain dog named Leif. He's my best friend and always keeps
        me company while I'm coding.
        Or more often he tries to distract me from coding so that I go on a walk with him.
      </p>
      <a class="github-link" :href="githubUrl" target="_blank">
        Check out my GitHub
      </a>
      <br/>
      <a class="cv-link" :href="cvPdf" download>
        Download My CV
      </a>
    </div>
  </div>
</template>

<script>
import PolaroidPhoto from "./PolaroidPhoto.vue";

export default {
  name: "AboutMe",
  components: {PolaroidPhoto},
  data() {
    return {
      githubUrl: "https://github.com/Jjemus",
      cvPdf: "/static/my-cv.pdf",
    };
  },
};
</script>

<style scoped>
.about-me-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  @media (max-width: 580px) {
    padding: 5px;
  }
}

.profile-section {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 580px) {
    padding: 20px;
  }
}

h1 {
  margin-bottom: 10px;
  font-size: 2.5rem;
  color: #333;
}

.bio-text {
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.github-link,
.cv-link {
  display: inline-block;
  margin-top: 10px;
  font-size: 1.1rem;
  color: #42b983;
  text-decoration: none;
}

.github-link:hover,
.cv-link:hover {
  text-decoration: underline;
}

.bio-polaroid {
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
}
</style>
