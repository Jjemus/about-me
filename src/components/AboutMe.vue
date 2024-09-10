<template>
  <div class="about-me-container">
    <div class="profile-section">
      <nav class="nav">
        <button @click="switchToEnglish">EN</button>
        <button @click="switchToGerman">DE</button>
        <button @click="switchToItalian">IT</button>
      </nav>

      <div class="bio-polaroid">
        <PolaroidPhoto image-src="/img/me.jpg" caption="me" style="transform: rotate(3deg); z-index: 2"/>
      </div>

      <h1>{{$t("hi")}}</h1>
      <p class="bio-text">
        {{$t("greeting")}}
      </p>

      <p class="bio-text">
        {{$t("tech")}}
      </p>

      <p class="bio-text">
        {{$t("projects")}}

      </p>

      <p class="bio-text">
        {{$t("hobbies")}}
      </p>

      <div class="bio-polaroid">
        <PolaroidPhoto image-src="/img/island1.jpg" caption="Icelandic planes" style="transform: rotate(10deg)"/>
        <PolaroidPhoto image-src="/img/island2.jpg" caption="Glacier Lake" style="transform: rotate(-5deg)"/>
      </div>

      <p class="bio-text">
        {{$t("dog")}}
      </p>
      <a class="github-link" :href="githubUrl" target="_blank">
        {{$t("github")}}
      </a>
      <br/>
      <br/>
      <a class="cv-link" :href="cvPdf" download>
        {{$t("cv")}}
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
  methods: {
    switchToItalian() {
      this.$i18n.locale = 'it';
    },
    switchToEnglish() {
      this.$i18n.locale = 'en';
    },
    switchToGerman() {
      this.$i18n.locale = 'de';
    },
  },
};
</script>

<style scoped>
.about-me-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;

  @media (max-width: 580px) {
    padding: 5px;
  }
}

.profile-section {
  background-color: #f9f9f9;
  padding: 5px 40px 40px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 580px) {
    padding: 5px 20px 20px 20px;
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
