const Selection = require('./selectionModel')
const Categorie = require('./categorieModel')
const Article = require('./articleModel')
const Utilisateur = require('./utilisateurModel')
const Role = require('./roleModel')
const Facture = require('./factureModel')
const Commande = require('./commandeModel')
const LigneDeCommande = require('./ligneDeCommadeModel')
const Gravure = require('./gravureModel')
const Taille = require('./tailleModel')
const CollierChaineBracelet = require('./collierChaineBraceletModel')
const Bague = require('./bagueModel')
const BouclesDoreilles = require('./bouclesDoreillesModel')
const ArticleTaille = require('./articleTailleModel')
const Couleur = require('./couleurModel')
const NbCarats = require('./nbCaratsModel')
const TypeDePierre = require('./typeDePierreModel')
const ArticleAvecPierre = require('./articleAvecPierreModel')
const TypeDeMatiere = require('./typeDeMatiereModel')
const TypeDePerle = require('./typeDePerleModel')
const Mesure = require('./mesureModel')
const GuideDeTailleArticle = require('./guideDeTailleArticleModel')
const BouclesDoreillesAvecPerle = require('./bouclesDoreillesAvecPerleModel')
const CollierChaineBraceletAvecPerle = require('./collierChaineBraceletAvecPerleModel')

// selection - categorie
Selection.belongsToMany(Categorie, { through: 'selectionCategorie' ,timestamps: false }) 
Categorie.belongsToMany(Selection, { through: 'selectionCategorie' ,timestamps: false })

// article - categorie
Categorie.hasMany(Article) 
Article.belongsTo(Categorie) 

//utilisateur - role
Role.hasMany(Utilisateur) 
Utilisateur.belongsTo(Role)

//utilisateur - facture
Utilisateur.hasMany(Facture) 
Facture.belongsTo(Utilisateur) 

//utilisateur - commande
Utilisateur.hasMany(Commande)
Commande.belongsTo(Utilisateur)

//commande - facture
Commande.hasOne(Facture);
Facture.belongsTo(Commande);

//commande - ligne de commande
Commande.hasMany(LigneDeCommande)
LigneDeCommande.belongsTo(Commande)

//ligne de commande - gravure
Gravure.hasMany(LigneDeCommande)
LigneDeCommande.belongsTo(Gravure)

//gravure - utilisateur
Utilisateur.hasMany(Gravure)
Gravure.belongsTo(Utilisateur)

//ligne de commande - selection
Selection.hasMany(LigneDeCommande)
LigneDeCommande.belongsTo(Selection)

//ligne de commande - article
Article.hasMany(LigneDeCommande)
LigneDeCommande.belongsTo(Article)

//ligne de commande - taille
Taille.hasMany(LigneDeCommande)
LigneDeCommande.belongsTo(Taille)

// HERITAGE ARTICLE
CollierChaineBracelet.hasOne(Article, { foreignKey: 'id', sourceKey: 'id' })
Bague.hasOne(Article, { foreignKey: 'id', sourceKey: 'id' });
BouclesDoreilles.hasOne(Article, { foreignKey: 'id', sourceKey: 'id' })

// article - taille (model: articleTaille comprend le stock)
Article.belongsToMany(Taille, { through: 'articleTaille' ,timestamps: false })
Taille.belongsToMany(Article, { through: 'articleTaille' ,timestamps: false })

//type de matiere - article 
TypeDeMatiere.hasMany(Article)
Article.belongsTo(TypeDeMatiere)

//type de matiere - nombre de carats
TypeDeMatiere.belongsToMany(NbCarats, { through: 'typeDeMatiereNbCarats', timestamps: false })
NbCarats.belongsToMany(TypeDeMatiere, { through: 'typeDeMatiereNbCarats', timestamps: false })

//type de matiere - couleur
TypeDeMatiere.belongsToMany(Couleur, { through: 'typeDeMatiereCouleur' ,timestamps: false })
Couleur.belongsToMany(TypeDeMatiere, { through: 'typeDeMatiereCouleur' ,timestamps: false })

//Nombre de carats - Article
NbCarats.hasMany(Article)
Article.belongsTo(NbCarats)

//Nombre de carats - Type de pierre 
TypeDePierre.belongsToMany(NbCarats, { through: 'typeDePierre_NbCarats' ,timestamps: false })
NbCarats.belongsToMany(TypeDePierre, { through: 'typeDePierre_NbCarats' ,timestamps: false })

//Type de pierre - Couleur
TypeDePierre.belongsToMany(Couleur, { through: 'typeDePierre_Couleur' ,timestamps: false })
Couleur.belongsToMany(TypeDePierre, { through: 'typeDePierre_Couleur' ,timestamps: false })

//Couleur - Article
Article.belongsToMany(Couleur, { through: 'articleCouleur' ,timestamps: false })
Couleur.belongsToMany(Article, { through: 'articleCouleur' ,timestamps: false })

//Type de perle - Couleur
TypeDePerle.belongsToMany(Couleur, { through: 'type_de_perle_Couleur' ,timestamps: false })
Couleur.belongsToMany(Article, { through: 'type_de_perle_Couleur' ,timestamps: false })

//N-AIR ArticleAvecPierre: article - nbCt - nbPierres - typeDePierre - couleur 
Article.hasMany(ArticleAvecPierre);
TypeDePierre.hasMany(ArticleAvecPierre);
Couleur.hasMany(ArticleAvecPierre);
NbCarats.hasMany(ArticleAvecPierre);

//N-AIR: GuideDeTailleArticle: article - taille - mesure  
Article.hasMany(GuideDeTailleArticle);
Mesure.hasMany(GuideDeTailleArticle);
Taille.hasMany(GuideDeTailleArticle);

//N-AIR: BouclesDoreillesAvecPerle: boucles d'oreilles - type de perle - couleur - nb perles  
BouclesDoreilles.hasMany(BouclesDoreillesAvecPerle);
TypeDePerle.hasMany(BouclesDoreillesAvecPerle);
Couleur.hasMany(BouclesDoreillesAvecPerle);

//N-AIR: CollierChaineBraceletAvecPerle: collier_chaine_bracelet - type de perle - couleur - nb perles  
CollierChaineBracelet.hasMany(CollierChaineBraceletAvecPerle);
TypeDePerle.hasMany(CollierChaineBraceletAvecPerle);
Couleur.hasMany(CollierChaineBraceletAvecPerle);

module.exports = {
    Selection, 
    Categorie, 
    Article, 
    Utilisateur, 
    Role, 
    Facture, 
    Commande, 
    LigneDeCommande, 
    Taille,
    CollierChaineBracelet,
    Bague,
    BouclesDoreilles,
    ArticleTaille,
    Couleur,
    TypeDePierre,
    NbCarats,
    ArticleAvecPierre,
    TypeDeMatiere,
    TypeDePerle,
    Mesure,
    GuideDeTailleArticle,
    BouclesDoreillesAvecPerle,
    CollierChaineBraceletAvecPerle
}