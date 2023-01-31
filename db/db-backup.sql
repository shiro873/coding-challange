-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: EXAMPLE-DB
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sectorSubTypes`
--

DROP TABLE IF EXISTS `sectorSubTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sectorSubTypes` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sectorSubTypeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `sectorTypeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sectorSubTypeId` (`sectorSubTypeId`),
  KEY `sectorTypeId` (`sectorTypeId`),
  CONSTRAINT `sectorSubTypes_ibfk_1` FOREIGN KEY (`sectorSubTypeId`) REFERENCES `sectorSubTypes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `sectorSubTypes_ibfk_2` FOREIGN KEY (`sectorTypeId`) REFERENCES `sectorTypes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sectorSubTypes`
--

LOCK TABLES `sectorSubTypes` WRITE;
/*!40000 ALTER TABLE `sectorSubTypes` DISABLE KEYS */;
INSERT INTO `sectorSubTypes` VALUES ('014013bc-3d76-4d41-8d54-0986f594075f','Wood','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('0437afee-8b60-42ee-ac10-b380272afeb7','Food and Beverage','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('07470fcb-8316-4c58-83f3-a0fcbe4d93c9','Translation services','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'64cfc2f0-d739-4859-a7d3-d2baadb90109'),('0f8e28aa-8f92-4693-9e05-0099a00f6391','Metalworking','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('30fdc62f-7176-4a3c-9e2b-e93eaaa08cfa','Printing','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('37073a5a-a817-4b49-b160-91327d53bc99','Creative industries','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'d5f7ef2f-6058-4e6b-a705-077315717201'),('41f6e639-e9dd-4657-b872-0f416a702cab','Engineering','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'64cfc2f0-d739-4859-a7d3-d2baadb90109'),('4d0bdcc5-8f58-4cad-bc76-375da39c1064','Construction materials','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('7cfed2b7-10ea-44af-ae9d-6d86e49815b7','Plastic and Rubber','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('94b43762-628f-477a-879b-4e0236e1273d','Textile and Clothing','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('95fe5068-538a-4f8b-8348-5ba5feea21a5','Energy technology','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'d5f7ef2f-6058-4e6b-a705-077315717201'),('97a2dc85-9881-4395-b9bd-cc5e7a70ed8b','Environment','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'d5f7ef2f-6058-4e6b-a705-077315717201'),('97b0d0ff-6699-46ea-9d52-c20af59f8ea1','Information Technology and Telecommunications','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'64cfc2f0-d739-4859-a7d3-d2baadb90109'),('a09f2bb8-1680-4a92-b5e2-393e5bfb5320','Machinery','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('c286693e-dfe5-4c9e-8f70-5cb05be0f4a8','Business services','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'64cfc2f0-d739-4859-a7d3-d2baadb90109'),('c7843d88-a876-4509-ba44-fe810642286b','Tourism','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'64cfc2f0-d739-4859-a7d3-d2baadb90109'),('e8c76c21-724e-4120-9757-db1ae22ede52','Furniture','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'ce258ade-bb0e-4314-be63-3de914cdc3a6'),('f2ba7bc0-d731-426c-8ee6-7a4e18271264','Transport and Logistics','2023-01-31 12:33:50','2023-01-31 12:33:50',NULL,'64cfc2f0-d739-4859-a7d3-d2baadb90109');
/*!40000 ALTER TABLE `sectorSubTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sectorTypes`
--

DROP TABLE IF EXISTS `sectorTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sectorTypes` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sectorTypes`
--

LOCK TABLES `sectorTypes` WRITE;
/*!40000 ALTER TABLE `sectorTypes` DISABLE KEYS */;
INSERT INTO `sectorTypes` VALUES ('64cfc2f0-d739-4859-a7d3-d2baadb90109','Service','2023-01-31 12:33:50','2023-01-31 12:33:50'),('ce258ade-bb0e-4314-be63-3de914cdc3a6','Manufacturing','2023-01-31 12:33:50','2023-01-31 12:33:50'),('d5f7ef2f-6058-4e6b-a705-077315717201','Other','2023-01-31 12:33:50','2023-01-31 12:33:50');
/*!40000 ALTER TABLE `sectorTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `categories` json DEFAULT NULL,
  `agreedToTerms` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0f6634d5-298c-44ef-bd52-2665ebdefced','asd','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:41:40','2023-01-31 18:41:40'),('257e0af7-ee7c-4e61-86c1-7dd2dc4b21d8','as','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:47:23','2023-01-31 18:47:23'),('29c3f238-d153-41c9-87c6-6affe4c34de5','asd','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:40:44','2023-01-31 18:40:44'),('32dc9829-11f1-4212-b7ef-6a236a4b9706','AS','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:45:40','2023-01-31 18:45:40'),('3c81a0bd-ef1b-4def-9b16-d42d54392104','AS','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:45:00','2023-01-31 18:45:00'),('9100fcae-f28b-475b-9686-3b66d5dddc36','asd','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:40:35','2023-01-31 18:40:35'),('a52dbb58-3f4e-4918-b835-44376918764a','asd','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:41:37','2023-01-31 18:41:37'),('a9d9598a-84f2-40fd-9e4e-691c684aafee','as','[[{\"sub\": \"Translation services\", \"group\": \"Service\"}]]',1,'2023-01-31 18:47:01','2023-01-31 18:47:01');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-01  1:13:12
