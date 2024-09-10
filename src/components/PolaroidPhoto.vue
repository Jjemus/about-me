<template>
  <div class="polaroid">
    <img
        class="polaroid-img"
        :src="imageSrc"
        alt="Polaroid Picture"
    />
    <div class="polaroid-caption rock-salt-regular">
      {{ caption }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PolaroidPhoto",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "Polaroid Caption",
    },
  },
};
</script>

<style scoped>
.polaroid {
  width: 300px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: "Arial", sans-serif;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin: 20px auto;
  transition: all 0.3s ease-in-out;
}

.polaroid-img {
  width: 100%;
  height: auto;
  display: block;
}

.polaroid-caption {
  margin-top: 10px;
  font-size: 24px;
  color: #333;
  padding: 5px;
  font-weight: bold;
}

.rock-salt-regular {
  font-family: "Rock Salt", cursive;
  font-weight: 400;
  font-style: normal;
}

/* Responsive styling for smaller screens */
@media (max-width: 768px) {
  .polaroid {
    width: 80%; /* Shrink the width to 80% of the screen */
  }

  .polaroid-caption {
    font-size: 16px;
  }
}
</style>
