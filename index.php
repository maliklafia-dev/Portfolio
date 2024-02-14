<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: 127.0.0.1/portfolio');

// Connexion à la base de données
$servername = "127.0.0.1";
$username = "root";
$password = ""; 
$dbname = "portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Fonction pour récupérer tous les projets
function getAllProjects() {
    global $conn;
    $sql = "SELECT * FROM projects";
    $result = $conn->query($sql);
    
    // Vérifier si la requête a réussi
    if ($result) {
        $projects = $result->fetch_all(MYSQLI_ASSOC);
        //indiquer que l'entête est du json
        header('Content-Type: application/json');
        // Convertir les données en format JSON
        echo json_encode($projects);
    } else {
        header('Content-Type: application/json');
        // En cas d'erreur, renvoyer une réponse JSON vide
        echo json_encode([]);
    }
}

getAllProjects();

/*
// Fonction pour ajouter un projet
function addProject($title, $demo, $description, $github_link) {
    global $conn;
    $sql = "INSERT INTO projects (title, demo, description, github_link) VALUES ('$title', '$demo', '$description', '$github_link')";
    return $conn->query($sql);
}

// Fonction pour récupérer un projet par son titre
function getProjectByTitle($title) {
    global $conn;
    $sql = "SELECT * FROM projects WHERE title = '$title'";
    $result = $conn->query($sql);
    return $result->fetch_assoc();
}

// Fonction pour mettre à jour un projet
function updateProject($title, $demo, $description, $github_link) {
    global $conn;
    $sql = "UPDATE projects SET demo = '$demo', description = '$description', github_link = '$github_link' WHERE title = '$title'";
    return $conn->query($sql);
}

// Fonction pour supprimer un projet
function deleteProject($title) {
    global $conn;
    $sql = "DELETE FROM projects WHERE title = '$title'";
    return $conn->query($sql);
}

// Exemples d'utilisation des fonctions

// Ajouter un projet
addProject("Mon Projet", "http://demo.com", "Description du projet", "https://github.com/mon-projet");

// Récupérer tous les projets
$projects = getAllProjects();
print_r($projects);

// Récupérer un projet par son titre
$project = getProjectByTitle("Mon Projet");
print_r($project);

// Mettre à jour un projet
updateProject("Mon Projet", "http://nouvelle-demo.com", "Nouvelle description du projet", "https://github.com/mon-projet");

// Supprimer un projet
deleteProject("Mon Projet");

*/
// Fermer la connexion
$conn->close();
?>
