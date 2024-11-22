<script setup>

</script>

<template>
  <section id="about" class="section">
    <div class="about-container">
      <h2>About Me</h2>
      <p>I am currenlty finsihing my masters of applied data scince at CMU and am a research assistant in the
        <a href="https://dig.cmu.edu/">DIG Lab</a> in the <a href="https://hcii.cmu.edu/">Human-Computer Interaction Institute</a>.
        My current research focuses on applied machine learning for healthcare applications, where I explain, architect, and audit generative text-to-image diffusion models and their trustworthiness.
        Before joining CMU, I was a visiting researcher in Responsive Environments at the MIT Media Lab, led by Dr. Joe Paradiso, where I worked on model distillation for resource-constrained environments.
        I completed my undergraduate studies at San Diego State University under the supervision of Dr. Shangping Ren, where my research centered on developing a wearable biosensing framework to automate
        health and environmental data colelction for patients with Raynaud's syndrome. As well as 
        <br><br>
        My future research interests lie at the intersection of assistive machine learning for mental health characterization, specifically leveraging cognitive representation and health signals to understand, characterize, and aid in the diagnosis of disease.

      </p>
      <div class="education">
        <h3>Education</h3>
        <ul>
          <li><b>M.S. Applied Data Science</b> Carnegie Mellon Univeristy</li>
          <li><b>B.S. Computer Science, Minor; Applied Mathematics</b> San Diego State University</li>
        </ul>
      </div>
    </div>
    <div class="news-container">
      <h2>News</h2>
      <ul>
        <li>+ <b>[2024/10]</b> Attended UIST, Soft Wearables Workshop</li>
        <li>+ <b>[2024/08]</b> I started my masters at CMU and research in HCII</li>
        <li>+ <b>[2024/05]</b> Arrived in Cambridge, MA for a research appointement at MIT</li>
        <li>+ <b>[2024/05]</b> Completed my undergrad from San Diego State Univeristy</li>
        <li>+ <b>[2024/04]</b> First paper got accepted to CSCSU 2024</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  padding: 0rem 0;
  border-bottom: 1px solid #eee;
  gap: 3rem;
}

.about-container {
  flex: 3;
}

a {
  color: #247eab;
}

a:hover {
  color: #3dbcea;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

h3 {
  color: #34495e;
  margin: 1.5rem 0 1rem;
}

p {
  line-height: 1.6;
  color: #2c3e50;
  text-align: justify;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
  color: #2c3e50;
}

.news-container {
  flex: 3;
  width: 10rem;
  height: 10rem;
  /* background-color: #228b22; */
}

.news-container ul {
  font-family: comic sans ms;
  font-size: small
}
</style>