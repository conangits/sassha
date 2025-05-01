<script setup>

import sasha10 from './assets/sasha10.jpg'
import sasha11 from './assets/sasha11.jpg'
import sasha12 from './assets/sasha12.jpg'

import sasha15 from './assets/sasha15.jpg'
import sasha16 from './assets/sasha16.jpg'
import sasha17 from './assets/sasha17.jpg'
import sasha18 from './assets/sasha18.jpg'
import sasha19 from './assets/sasha19.jpg'
import sasha20 from './assets/sasha20.jpg'
import sasha21 from './assets/sasha21.jpg'
import sasha25 from './assets/sasha25.jpg'

// Исправлен импорт музыкального файла ss
import knockinMusic from './assets/ss.mp3';

const birthdayMessage = `Сашка, поздравляем тебя с 21-летием!
21 — это тот возраст, когда спина начинает чуть-чуть побаливать, а погода влияет на колени 😄
Но всё это приходит с опытом и взрослением.
Мы все очень сильно тебя любим и от души поздравляем с Днём Рождения! 💖`;
</script>

<template>
  <div class="container">
    <!-- Музыкальный плеер -->
    <audio autoplay loop>
      <source :src="knockinMusic" type="audio/mp3" />
      Ваш браузер не поддерживает элемент аудио.
    </audio>

    <header>
      <img src="https://em-content.zobj.net/thumbs/120/apple/354/party-popper_1f389.png" alt="Праздник" class="logo" />
      <h1 class="animated-title">С Днём Рождения, Сашка!</h1>
    </header>

    <main>
      <p class="message" v-scroll-reveal>{{ birthdayMessage }}</p>

      <div class="confetti">🎂 🎁 🍾 ✨ 🎈</div>

      <div class="photo-gallery">
        <img v-scroll-reveal :src="sasha10" alt="Sasha 10" class="photo" />
        <img v-scroll-reveal :src="sasha11" alt="Sasha 11" class="photo" />
        <img v-scroll-reveal :src="sasha12" alt="Sasha 12" class="photo" />
        <img v-scroll-reveal :src="sasha19" alt="Sasha 19" class="photo" />
        <img v-scroll-reveal :src="sasha15" alt="Sasha 15" class="photo" />
        <img v-scroll-reveal :src="sasha16" alt="Sasha 16" class="photo" />
        <img v-scroll-reveal :src="sasha18" alt="Sasha 18" class="photo" />
        <img v-scroll-reveal :src="sasha20" alt="Sasha 20" class="photo" />
      </div>

      <div class="wishes" v-scroll-reveal>
        <p>Пусть каждый день приносит радость и новые возможности!</p>
        <div class="wish-cards">
          <div class="wish-card">
            <img :src="sasha25" alt="Sasha 25" />
            <p>Дорогая, Сашенька!
              Наше знакомство было самым неожиданным и запоминающимся моментом наверное на всю мою жизнь.
              Я неимоверно рада что мы с тобой сблизились и стали для друг друга очень важными людьми,
              я могу с уверенностью сказать что люблю тебя и доверяю тебе все.
              Знаешь как у меня проявляется моя любовь? Я начинаю писать песни.
              Писать о тех, кого я люблю, и когда я думаю о тебе у меня сразу всплывает мелодия радости и нежности,
              как ты сама:)
              Я желаю тебе оставаться такой же классной и яркой девчонкой о жизни которой можно писать
              легенды)
              Спасибо тебе что ты у меня есть, и будь счастлива, для меня это самое главное!
              Люблю тебя, Саш❤️ </p>
            <p>Твоя общительная девочка хехе</p>
          </div>
          <div class="wish-card">
            <img :src="sasha17" alt="Sasha 17" />
            <p>Хей хей, слышишь этот странный хруст? Я тоже.
              Как думаешь, что это? Аааааа, это Саше 21 год исполнился, ну посмотрите, кто этот песочек будет убирать,
              ая яй.
              Ну если серьезно, желаю тебе оставаться такой же Баллерино Капучино, испаньело зачето и само собой
              здоровья(21 годик это не шутка) и побольше приятной душноты от дорогих тебе людей! 🎉🥳🎊</p>
          </div>

          <div class="wish-card">
            <img :src="sasha21" alt="Sasha 21" />
            <p>Сашка, с днём рождения!
              Я хочу, чтобы ты всегда оставалась такой, какая ты есть — настоящей, доброй, светлой.
              Я люблю тебя именно за это.
              С самого первого дня ты просто заинтересовала меня, но потом... появилось нечто большее. Чувства, которые
              не передать простыми словами.
              С тобой хочется быть рядом, делить моменты — как тогда, когда мы гуляли в парке или поднимались на Зобор.
              Помнишь, как боялись в лесу медведя или кабана? А мне было не страшно — потому что ты рядом.
              Эти воспоминания — тёплые, живые. И я верю, что впереди у нас будет ещё больше таких моментов. Больше
              смеха, разговоров, совместных глупостей и настоящей близости.
              Спасибо, что ты есть.</p>
          </div>
        </div>
        <p class="kitchen-alert">Сашка, зайди на кухню СЕЙЧАС!!!</p> <!-- Noticeable and expressive alert -->
      </div>
    </main>

    <footer>
      <p>С любовью от всех нас ❤️</p>
    </footer>
  </div>
</template>

<style scoped>
:global(html, body) {
  margin: 0 !important;
  padding: 0 !important;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: #000;
}

.container {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  overflow-x: hidden;
}

header {
  margin-bottom: 2rem;
}

.logo {
  width: 80px;
  margin-top: 1rem;
  animation: fadeIn 1s ease forwards;
}

.animated-title {
  font-size: 2.5rem;
  color: #ff4081;
  text-shadow: 0 0 10px #ff4081, 0 0 20px #ff4081;
  animation: pulse 2s infinite;
}

.message {
  font-size: 1.2rem;
  white-space: pre-line;
  line-height: 1.6;
  max-width: 80vw;
  margin: 2rem auto;
  padding: 0 1rem;
}

.confetti {
  font-size: 2.5rem;
  margin: 1rem 0 2rem;
}

.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.photo:hover {
  transform: scale(1.08);
}

.wishes {
  margin-top: 2.5rem;
  font-size: 1.3rem;
  color: #ffcc00;
  text-shadow: 0 0 5px #ffcc00;
  animation: fadeInUp 2s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.wish-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem auto;
}

.wish-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1.5s ease forwards;
}

.wish-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

footer {
  margin-top: auto;
  font-size: 0.9rem;
  opacity: 0.7;
  padding: 2rem 1rem;
}

.kitchen-alert {
  font-size: 1.6rem;
  color: #ff0000;
  font-weight: bold;
  animation: shake 0.5s infinite;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .logo {
    width: 100px;
  }

  .animated-title {
    font-size: 3rem;
  }

  .message {
    font-size: 1.4rem;
    max-width: 70vw;
  }

  .photo {
    width: 150px;
    height: 150px;
  }

  .wishes {
    font-size: 1.4rem;
  }

  .confetti {
    font-size: 3rem;
  }

  .wish-cards {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
  }

  75% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
