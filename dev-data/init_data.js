const {
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
} = require('../models/schema')
const sequelize = require('../server')

sequelize.sync()

