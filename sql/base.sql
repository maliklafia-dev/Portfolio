-- Création de la base de données portfolio
CREATE DATABASE IF NOT EXISTS portfolio;

-- Utilisation de la base de données portfolio
USE portfolio;

-- Création de la table users (notez le changement de nom de table)
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(100) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

-- Création de la table projects (notez le changement de nom de table)
CREATE TABLE IF NOT EXISTS projects (
    title VARCHAR(100) PRIMARY KEY,
    demo VARCHAR(255),
    description TEXT,
    github_link VARCHAR(255)
);
