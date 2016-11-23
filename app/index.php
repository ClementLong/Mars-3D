<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="../dist/main.css">
    <script defer src="../dist/main.js"></script>
    <title>Project Mars</title>
  </head>
  <body>
    <section class="intro">
      <header class="header">
        <h1 class="header__title">Mars One</h1>
        <h2 class="header__subtitle">Partez à la découverte de Mars</h2>
      </header>
      <div class="intro__infos">
        <div class="intro__description">
          <h3 class="intro__descriptionTitle">Une expérience unique</h3>
          <p class="intro__descriptionText">Mars, plus qu’une conquête spatiale, il s’agit de la future maison de l’humanité. Laissez-vous surprendre par le projet Space X sous un angle différent, celui de la colonisation progressive. Vivez chaque étape grâce à une interface immersive, découvrez les différentes faces de Mars à travers le temps. Mesurez-vous à vos amis pour savoir lequel d’entre vous touchera en premier le sol de la planète rouge.</p>
        </div>
        <div class="intro__btn"><a class="intro__action">Découvrir</a></div>
      </div>
      <div class="intro__mars"></div>
    </section>
    <section class="exp">
      <div class="exp__intro">
        <header class="header">
          <h1 class="header__title">Mars One</h1>
          <h2 class="header__subtitle">Partez à la découverte de Mars</h2>
        </header>
        <div class="exp__introContainer">
          <h3 class="exp__introTitle">Immersion</h3>
          <p class="exp__introText">Toucher le sol de Mars est un rêve pour l’Homme.
          Un rêve si fort qu’il pourrait bien se concrétiser à court terme.
          D’ici 2030, plusieurs hommes auront déjà touché la planète rouge.
          Imaginez maintenant que vous pourrez participer à la colonisation de Mars. Une expérience inédite.</br>
          Préparez vous ! Nous vous invitons pour un voyage vers le futur.</p>
        </div>
        <div class="exp__btn"><a class="exp__action">Commencer l'expérience</a></div>
      </div>
      <div class="exp__quizz">
        <header class="header">
          <h1 class="header__title">Mars One</h1>
          <h2 class="header__subtitle">Partez à la découverte de Mars</h2>
        </header>
        <div class="exp__quizzContainer">
          <div class="exp__planet">
            <div class="planet__three1"></div>
            <div class="planet__three2"></div>
            <div class="planet__three3"></div>
            <div class="planet__three4"></div>
          </div>
          <div class="exp__questions">
            <h3 class="exp__questionsTitle">Mars en 2050</h3>
            <div class="exp__questionsText">
              <p class="exp__context">Envoyé par la Nasa sur Mars, le robot Curiosity a posté un selfie en direct sous -133° en plein hiver, une première. La suite logique pour l’homme serait de pouvoir le faire lui-même. Un fait réalisable d’ici peu car les 24 premiers humains poserons le pied sur la planète rouge dans moins de 10 ans. Une expérience supervisée par la NASA et réalisable grâce aux nombreux chercheurs qui y sont rattachés. Ces explorateurs vivrons dans une seule et même station spatiale et devront apprendre à cohabiter. </br> Ils voyageront 7 mois pour arriver à destination et n’auront aucun moyen de faire le voyage en sens inverse pour retourner sur Terre.</p>
              <p class="exp__question">Seriez-vous prêt pour un voyage sans retour ?</p>
            </div>
            <div class="exp__answer">
              <div class="yes"><a>Oui</a></div>
              <div class="no"><a>Non</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="result">
      <header class="header">
        <h1 class="header__title">Mars One</h1>
        <h2 class="header__subtitle">Partez à la découverte de Mars</h2>
      </header>
      <div class="exp__result">
        <h3 class="exp__resultTitle">Vous partirez sur Mars en 3000</h3>

        <p class="exp__resultText">Visiter Mars ? Pourquoi pas. Vous êtes curieux et découvrir les paysages de la planète qui jadis était rouge vous enthousiasme. Dans l’immédiat vous avez d’autres voyages de prévus mais vous irez sur Mars c’est une certitude. D’ailleurs vous avez déjà pris votre billet, mais l’attente est un peu longue. Soyez patient, ça vaut le coup !</p>
        <div class="exp__infos">
          <p data-pop="100 000 habs." class="exp__infosPopulation">Mars comptera 100 000 habs</p>
          <p class="exp__infosStatut statut-icon icon-martien">Vous êtes un aventurier</p>
          <p data-journey="1 mois" class="exp__infosJourney">Votre voyage durera 1 mois</p>
        </div>
      </div>
      <div class="result__graph">
        <h4 class="result__graphTitle">Répartition des résultats</h4>
        <h5 class="result__graphSubtitle">Découvrez les résultats des autres explorateurs</h5>
        <div class="result__graphZone">
          <div id="martien" class="category">
            <div data-value="12%" style="height: calc(12 * 10px);" class="category__value"></div>
            <div class="category__name">Martien</div>
          </div>
          <div id="pionner" class="category">
            <div data-value="20%" style="height: calc(20 * 10px);" class="category__value"></div>
            <div class="category__name">Pionnier</div>
          </div>
          <div id="aventurier" class="category">
            <div data-value="25%" style="height: calc(25 * 10px);" class="category__value"></div>
            <div class="category__name">Aventurier</div>
          </div>
          <div id="touriste" class="category">
            <div data-value="30%" style="height: calc(30 * 10px);" class="category__value"></div>
            <div class="category__name">Touriste</div>
          </div>
          <div id="terrien" class="category">
            <div data-value="8%" style="height: calc(8 * 10px);" class="category__value"></div>
            <div class="category__name">Terrien</div>
          </div>
        </div>
      </div>
      <div class="exp__project">
        <div class="exp__projectAuthors">
          <h5 class="exp__authorsTitle">Auteurs</h5>
          <div class="exp__author juliette">
            <div class="author__img"></div>
            <div class="author__id">
              <h6 class="author__name">Juliette Grégoris</h6>
              <p class="author__job">Chef de projet</p>
            </div>
          </div>
          <div class="exp__author clement">
            <div class="author__img"></div>
            <div class="author__id">
              <h6 class="author__name">Clément Long</h6>
              <p class="author__job">Lead Developer</p>
            </div>
          </div>
          <div class="exp__author yann">
            <div class="author__img"></div>
            <div class="author__id">
              <h6 class="author__name">Yann-Edern Gillet</h6>
              <p class="author__job">UX Designer</p>
            </div>
          </div>
          <div class="exp__author aurelien">
            <div class="author__img"></div>
            <div class="author__id">
              <h6 class="author__name">Aurélien Marast</h6>
              <p class="author__job">UI Designer</p>
            </div>
          </div>
          <div class="exp__author lv">
            <div class="author__img"></div>
            <div class="author__id">
              <h6 class="author__name">Louis-Victor Morgaut</h6>
              <p class="author__job">UI Designer</p>
            </div>
          </div>
        </div>
        <div class="exp__projectContext">
          <div class="exp__concept">
            <h5 class="exp__conceptTitle">Concept</h5>
            <p class="exp__conceptText">Nous sommes quatre Héticiens désireux de partager notre passion pour les nouvelles technologies et l’avenir de notre planète. Dans ce sens, nous avons conçu une expérience immersive et éducative autour de la planète rouge. Une expérience inédite qui permet de découvrir la terraformation de Mars étape par étape sous un angle novateur. Nous nous sommes inspirés du travail d’Elon Musk avec Space X pour représenter la colonisation de Mars.</p>
          </div>
          <div class="exp__mission">
            <h5 class="exp__missionTitle">Mars One : la mission</h5>
            <p class="exp__missionText">Space X conçoit, fabrique et envoie des fusées et des vaisseaux spatiaux sur Mars. L’entreprise a été fondée en 2002 avec pour objectif de révolutionner la technologie spatiale. Son but ultime est de donner la possibilité à l’Homme de vivre sur d’autres planètes que la Terre.</p>
          </div>
        </div>
      </div>
      <div class="exp__more">
        <h5 class="exp__moreTitle">Pour aller plus loin...</h5>
        <p class="exp__moreText">Cela vous a intéréssé ? Nous vous avons donc préparé une séléction d'article afin de prolonger un peu l'experience...</p>
        <div class="articles__container">
          <a href="https://www.nasa.gov/mission_pages/mars/main/index.html">
            <article class="moreArticle">
              <div class="moreArticle__img nasa"></div>
              <h5 class="moreArticle__Title">NASA</h5>
              <p class="moreArticle__Text">Mars est à porté de main. Lisez les dernières actualités de la NASA à propos de Mars !</p>
            </article></a>
          <a href="http://www.mars-one.fr/elon-musk-conference-coloniser/">
            <article class="moreArticle">
              <div class="moreArticle__img spacex"></div>
              <h5 class="moreArticle__Title">SPACE X</h5>
              <p class="moreArticle__Text">Le détail du projet d'Elon Musk et de Space X pour aller sur Mars !</p>
            </article></a>
          <a href="http://mars.nasa.gov/mars2020/">
            <article class="moreArticle">
              <div class="moreArticle__img national"></div>
              <h5 class="moreArticle__Title">Rover 2020</h5>
              <p class="moreArticle__Text">Découvrez un apercu de la mission du Rover qui ira sur Mars en 2020</p>
            </article></a>
        </div>
      </div>
      <footer class="footer">
        <ul>
          <li class="twitter"><a class="icon twitter"></a></li>
          <li class="youtube"><a class="icon youtube"></a></li>
          <li class="instagram"><a class="icon instagram"></a></li>
          <li class="github"><a class="icon github"></a></li>
        </ul>
      </footer>
    </section>
  </body>
</html>
