const Selection = require('./selectionModel')
const Categorie = require('./categorieModel')
const Article = require('./articleModel')
const Utilisateur = require('./utilisateurModel')
const Role = require('./roleModel')
const Facture = require('./factureModel')

// article - categorie
Article.belongsTo(Categorie, { foreignKey: 'categorieId' }); // Article appartient à une seule Categorie
Categorie.hasMany(Article, { foreignKey: 'categorieId' }); // Une Categorie peut avoir plusieurs Articles

// selection - categorie
Selection.belongsToMany(Categorie, { through: 'SelectionCategorie', as: 'Categories', foreignKey: 'SelectionId' }); // Selection a * categories
Categorie.belongsToMany(Selection, { through: 'SelectionCategorie', as: 'Selections', foreignKey: 'CategorieId' }); // Categorie a * selection

//utilisateur - role
Utilisateur.belongsTo(Role, { foreignKey: 'roleId' }); // Un Utilisateur appartient à un seul Role
Role.hasMany(Utilisateur, { foreignKey: 'roleId' }); // Un Role peut avoir plusieurs Utilisateurs

//utilisateur - facture
Utilisateur.hasMany(Facture, { foreignKey: 'utilisateurId' }); // Un Utilisateur peut avoir plusieurs Factures
Facture.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' }); // Une Facture appartient à un seul Utilisateur


module.exports = {Selection, Categorie, Article, Utilisateur, Role, Facture}