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
const CollierEtChaine = require('./collierEtChaineModel')
const Bague = require('./bagueModel')
const BouclesDoreilles = require('./bouclesDoreillesModel')
const ArticleTaille = require('./articleTailleModel')
const Couleur = require('./couleurModel')
const NbCarat = require('./nbCaratModel')
const TypeDePierre = require('./typeDePierreModel')
const ArticleAvecPierre = require('./articleAvecPierreModel')
const TypeDeMatiere = require('./typeDeMatiereModel')
const TypeDePerle = require('./typeDePerleModel')
const Mesure = require('./mesureModel')
const GuideDeTailleArticle = require('./guideDeTailleArticleModel')
const BouclesDoreillesAvecPerle = require('./bouclesDoreillesAvecPerleModel')
const CollierEtChaineAvecPerle = require('./collierEtChaineAvecPerleModel')

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
Article.hasOne(CollierEtChaine)
Bague.belongsTo(Article);
Article.hasOne(BouclesDoreilles)

// article - taille (model: articleTaille comprend le stock)
Article.belongsToMany(Taille, { through: 'articleTaille' ,timestamps: false })
Taille.belongsToMany(Article, { through: 'articleTaille' ,timestamps: false })

//type de matiere - article 
TypeDeMatiere.hasMany(Article)
Article.belongsTo(TypeDeMatiere)

//type de matiere - nombre de carats
TypeDeMatiere.belongsToMany(NbCarat, { through: 'typeDeMatiereNbCarat', timestamps: false })
NbCarat.belongsToMany(TypeDeMatiere, { through: 'typeDeMatiereNbCarat', timestamps: false })

//type de matiere - couleur
TypeDeMatiere.belongsToMany(Couleur, { through: 'typeDeMatiereCouleur' ,timestamps: false })
Couleur.belongsToMany(TypeDeMatiere, { through: 'typeDeMatiereCouleur' ,timestamps: false })

//Nombre de carats - Article
NbCarat.hasMany(Article)
Article.belongsTo(NbCarat)

//Nombre de carats - Type de pierre 
NbCarat.belongsToMany(TypeDePierre, { through: 'typeDePierreNbCarat' ,timestamps: false })
TypeDePierre.belongsToMany(NbCarat, { through: 'typeDePierreNbCarat' ,timestamps: false })

//Type de pierre - Couleur
TypeDePierre.belongsToMany(Couleur, { through: 'typeDePierreCouleur' ,timestamps: false })
Couleur.belongsToMany(TypeDePierre, { through: 'typeDePierreCouleur' ,timestamps: false })

//Couleur - Article
Article.belongsToMany(Couleur, { through: 'articleCouleur' ,timestamps: false })
Couleur.belongsToMany(Article, { through: 'articleCouleur' ,timestamps: false })

//Type de perle - Couleur
TypeDePerle.belongsToMany(Couleur, { through: 'typeDePerleCouleur' ,timestamps: false })
Couleur.belongsToMany(TypeDePerle, { through: 'typeDePerleCouleur' ,timestamps: false })

//N-AIR ArticleAvecPierre: article - nbCt - nbPierres - typeDePierre - couleur 
Article.hasMany(ArticleAvecPierre);
TypeDePierre.hasMany(ArticleAvecPierre);
Couleur.hasMany(ArticleAvecPierre);
NbCarat.hasMany(ArticleAvecPierre);

//N-AIR: GuideDeTailleArticle: article - taille - mesure  
Article.hasMany(GuideDeTailleArticle);
Mesure.hasMany(GuideDeTailleArticle);
Taille.hasMany(GuideDeTailleArticle);

//N-AIR: BouclesDoreillesAvecPerle: boucles d'oreilles - type de perle - couleur - nb perles  
BouclesDoreilles.hasMany(BouclesDoreillesAvecPerle);
TypeDePerle.hasMany(BouclesDoreillesAvecPerle);
Couleur.hasMany(BouclesDoreillesAvecPerle);

//N-AIR: CollierEtChaineAvecPerle: collier_chaine_bracelet - type de perle - couleur - nb perles  
CollierEtChaine.hasMany(CollierEtChaineAvecPerle);
TypeDePerle.hasMany(CollierEtChaineAvecPerle);
Couleur.hasMany(CollierEtChaineAvecPerle);

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
    CollierEtChaine,
    Bague,
    BouclesDoreilles,
    ArticleTaille,
    Couleur,
    TypeDePierre,
    NbCarat,
    ArticleAvecPierre,
    TypeDeMatiere,
    TypeDePerle,
    Mesure,
    GuideDeTailleArticle,
    BouclesDoreillesAvecPerle,
    CollierEtChaineAvecPerle
}