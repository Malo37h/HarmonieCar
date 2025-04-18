Etant membre de l'harmonie 2èm cycle de Carquefou en tant que joueur saxophoniste, je me suis rendu compte que leur site n'était pas très jolie et tournant sur Free.
http://harmonie.carquefou.free.fr/histoire.php
Ce projet a pour but d'évaluer notre niveau pour une formation Concepteur Developpeur d'Application (CDA) en alterance.
Si la formation est menée à bien, on obtient un titre professionnel RNCP de Niveau 7 (équivalent BAC+3).

Il y a tout de même un cahier des charges à respecter pour ce premier niveau comme:
• Une connexion sécurisée à un espace d'administration 
• Une base de données 
• Une modélisation de votre base de données devra être créée 
• Au moins 3 pages

Il n'y a que le premier point qui n'a pas été réspecté.
Nous disposions de plus de 4 après-midi (et soirées dans mon cas) pour constituer ce projet, incluant la conception de celle-ci.

Le projet que je présente est donc construit de cette manière:

{
  • Front / client : React 18 avec HTML5 & CSS3
  • Back / server : .Net Core 8, Entity Framework (EF)
}
Le tout généré par un Template Visual Studio 2022 et la génération d'un Certificat de sécurité (HTTPS).
Cette génération sécurisée permet d'initialiser la communication API RESTFULL entre les deux composants.
J'ai cependant dû rajouter des autorisations CORS par la suite pour l'utilisation de mes propres composants (et non celui par défaut).
J'ai aussi généré les requêtes du CRUD via EF manipuler les données d'une table SQL.
+ l'EDK qui ouvre SwaggerUI à chaque lancement de l'application et tester les requêtes.
{
  • Base donnée : SQLserver (MSMMS), Entity Framework
}
Une seule table & contrôleurs pour la fonctionnalité "Blog" dans la base. Génération BDD First avec Entity.
Seuls les requêtes GET et POST ont été implémentés.
Les autres nécessitent d'implémenter des rôles de modération et d'utilisateurs.
Pour ces dernièrs être capble de suivre qui a été écrit et permettre la modifications pendant les 5 premières minutes.

Autre fonctionnalité à ajouter, la possibilité de mettre des commentaires à chaque post du blog, dans l'ordre d'apparition.
