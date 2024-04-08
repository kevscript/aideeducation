import { Tutorial } from "./types";

export const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Faire une demande d'aide pour un devoir.",
    steps: [
      {
        id: "1",
        title: "Se connecter au Discord de l'association.",
        description: `Dans un premier temps, il est nécessaire de se rendre sur notre serveur Discord. Pour cela, vous devez disposer d’un compte sur leur plateforme. Une fois votre compte crée, cliquez sur Rejoindre notre Discord et vous serez automatiquement redirigé sur une invitation vers notre serveur.`,
        imgUrl: "/tutorial_1.gif",
      },
      {
        id: "2",
        title: "Passer la vérification sur notre serveur.",
        description: `En vous connectant au serveur pour la première fois, vous devez avant tous vous familiariser avec les règles. Afin de confirmer que vous avez bien lu les règles, vous devez appuyer sur le petit bouton ✅ en bas du message qui s'affichera devant vous. Une fois cette vérification effectuée, vous aurez accès à tous les salons de discussion proposés par l'association. Pour y accéder sur mobile, swipez l'écran vers la droite pour afficher la liste des salons disponibles.`,
        imgUrl: "/tutorial_2.gif",
      },
      {
        id: "3",
        title: "Ouvrir une demande d'aide pour le devoir.",
        description: `Vous pouvez donc vous rendre dans le salon #📚obtenir-une-aide. Le salon se trouve plus bas dans le serveur, dans la catégorie "Enseignement". Une fois dans le salon, vous devez appuyer sur le petit bouton 🎟 en bas du message pour ouvrir un ticket d'aide. Cette manipulation crée un salon de chat privé qui vous est dédié. Pour y accéder, ouvrez la liste des salons, catégorie "Enseignement" et rejoignez le salon #ticket dans lequel vous êtes mentionné. Chaque ticket représente une demande d'aide. Vous pouvez en faire autant que nécessaire.`,
        imgUrl: "/tutorial_3.gif",
      },
      {
        id: "4",
        title: "Poser votre question à la communauté.",
        description: `Lorsque vous êtes sur le salon chat du ticket qui vous est dédié, vous n'avez plus qu'à formuler votre question. Aucune aide ne sera apportée pour les devoirs maisons. Mentionnez la matière (ex: @Mathématiques) Expliquez votre problème de manière précise. Notre aide dépendera de la clarté de votre message. Accompagnez votre message de toutes les images et éléments visuels de l'exercice. Par la suite, un conseiller éducatif viendra vous guider et répondre à vos questions.`,
        imgUrl: "/tutorial_4.gif",
      },
    ],
  },
];
