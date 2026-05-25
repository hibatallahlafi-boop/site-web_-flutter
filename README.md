# 📄 Rapport sur le projet "Plateforme Apprentissage Interactive"

## Présentation générale du site

Ce site est une **plateforme éducative interactive** conçue pour apprendre les bases du développement web (HTML, CSS, JavaScript) de manière ludique et visuelle.

---

## 🎯 Rôle principal du site

Permettre à l'utilisateur d'apprendre en **survolant** les éléments avec la souris pour voir des explications, et de **tester ses connaissances** via un quiz avec suivi de progression.

---

## 📁 Rôle de chaque fichier

| **Fichier** | **Rôle** |
|-------------|----------|
| `index.html` | Contient la structure de la page (textes, images, vidéo, quiz) |
| `<style>` (dans HTML) | Gère l'apparence visuelle : couleurs, bordures, animations, mise en page |
| `<script>` (dans HTML) | Gère l'interactivité : quiz, graphique, explications au survol, sauvegarde |

---

## 🔧 Rôle de chaque partie du code

### 1. Structure HTML (le squelette)

| **Balise / Élément** | **Rôle** |
|---------------------|----------|
| `<!DOCTYPE html>` | Indique au navigateur que c'est une page HTML5 |
| `<html>` | Racine du document |
| `<head>` | Contient les métadonnées (titre, styles) |
| `<body>` | Contient tout le contenu visible |
| `<div class="container">` | Conteneur principal qui regroupe tout |
| `<div class="navbar">` | Barre de navigation pour se déplacer dans le site |
| `<div class="card">` | Carte contenant une leçon (HTML, CSS, JS) |
| `<div class="code-block">` | Bloc contenant des extraits de code |
| `<span class="hover-explain">` | Texte qui affiche une explication au survol |
| `<div class="demo-box">` | Zone d'exemple interactif |
| `<canvas>` | Zone pour dessiner le graphique de progression |
| `<iframe>` | Intègre la vidéo YouTube |

---

### 2. Styles CSS (l'apparence)

| **Classe / Sélecteur** | **Rôle** |
|------------------------|----------|
| `*` | Supprime les marges par défaut |
| `body` | Définit la police et le dégradé d'arrière-plan |
| `.card` | Carte avec fond flou, bordures arrondies |
| `.card:hover` | Effet de survol : la carte s'élève |
| `.hover-explain` | Effet au survol : fond jaune, ombre |
| `.hover-explain:hover` | Agrandit et illumine le texte |
| `.explanation-area` | Zone fixe en bas qui affiche les explications |
| `.quiz-btn` | Boutons du quiz avec dégradé et animation |
| `.correct-feedback` | Fond vert pour une réponse correcte |
| `.wrong-feedback` | Fond rouge pour une réponse incorrecte |
| `.progress-bar-custom` | Barre de progression personnalisée |
| `@media` | Adapte le site aux écrans de téléphone |

---

### 3. JavaScript (l'interactivité)

| **Fonction / Variable** | **Rôle** |
|-------------------------|----------|
| `showExplanation(text)` | Affiche une explication dans la zone du bas |
| `scrollToCard(id)` | Fait défiler la page vers la carte choisie |
| `questions` | Tableau contenant les 5 questions du quiz |
| `checkAnswer()` | Vérifie si la réponse est correcte, ajoute un point |
| `loadQuestion()` | Charge la question suivante |
| `restartQuiz()` | Réinitialise le quiz |
| `updateProgressDisplay()` | Met à jour la barre et le niveau |
| `updateChart(percent)` | Dessine le camembert de progression |
| `saveScore()` | Sauvegarde le score dans le navigateur |
| `loadScore()` | Récupère le score sauvegardé |
| `localStorage` | Stocke le score même après fermeture |

---

## 🧠 Rôle des fonctionnalités spéciales

| **Fonctionnalité** | **Rôle** |
|--------------------|----------|
| **Survol explicatif** | Affiche une définition quand on passe la souris sur un mot technique |
| **Quiz interactif** | Teste les connaissances avec correction immédiate |
| **Camembert dynamique** | Montre visuellement le niveau de progression |
| **Barre de niveau** | Affiche un titre (Débutant → Expert) |
| **Sauvegarde locale** | Garde le score même après fermeture du navigateur |
| **Vidéo intégrée** | Tutoriel YouTube accessible sans quitter le site |
| **Logo ISIM G** | Image locale intégrée |
| **Navigation fluide** | Défilement automatique vers les sections |

---

## 📊 Schéma simplifié du fonctionnement

```
Utilisateur arrive sur le site
         ↓
Parcourt les cartes (HTML, CSS, JS)
         ↓
Passe la souris sur les mots bleus/jaunes
         ↓
Zone d'explication affiche la définition
         ↓
Accède au Quiz
         ↓
Répond aux 5 questions
         ↓
Score sauvegardé → Graphique se met à jour
         ↓
Niveau affiché (Débutant → Expert)
         ↓
Peut recommencer le quiz
```

---

## 🛠️ Technologies utilisées

| **Technologie** | **Rôle** |
|-----------------|----------|
| **HTML5** | Structure du contenu |
| **CSS3** | Mise en forme, animations, arrière-plans flous (backdrop-filter) |
| **JavaScript** | Logique du quiz, graphique, sauvegarde, interactions |
| **Canvas API** | Dessin du camembert |
| **LocalStorage** | Sauvegarde du score |
| **YouTube Iframe API** | Intégration vidéo |

---

## 🎓 Conclusion

Ce site remplit son rôle éducatif grâce à **3 piliers** :

1. **Visuel** → Survol + explications immédiates
2. **Pratique** → Quiz + graphique de progression
3. **Autonome** → Sauvegarde locale, aucun serveur nécessaire

Il permet à un débutant d'apprendre HTML, CSS et JavaScript **par l'expérience directe** et **l'interaction**.

---

💡 *"Ce que j'entends, je l'oublie. Ce que je vois, je m'en souviens. Ce que je fais, je le comprends."*

— **Confucius** (adapté à l'apprentissage du code)

---

