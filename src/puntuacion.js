export const getRecommendationMessage = (score) => {
    if (score >= 8) {
      return "¡Genial, este es uno de los mejores animes!";
    } else if (score >= 5) {
      return "Es posible que tengas diversión.";
    } else {
      return "No lo recomiendo.";
    }
  };