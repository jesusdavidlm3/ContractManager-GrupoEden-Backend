CREATE DATABASE IF NOT EXISTS contractmanager_grupoeden;
USE contractmanager_grupoeden;

CREATE TABLE `agreements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;insert into `agreements` (`id`, `name`) values (1, 'Individual ACA');
insert into `agreements` (`id`, `name`) values (2, 'Metro');
insert into `agreements` (`id`, `name`) values (3, 'Suodeez');
insert into `agreements` (`id`, `name`) values (4, 'Prevision suodeez');
insert into `agreements` (`id`, `name`) values (5, 'Alcaldia de Paez');
insert into `agreements` (`id`, `name`) values (6, 'Individual MBO');
insert into `agreements` (`id`, `name`) values (7, 'Gobernacion');
insert into `agreements` (`id`, `name`) values (8, 'SAHUM');
insert into `agreements` (`id`, `name`) values (9, 'Intergremial Salud');
insert into `agreements` (`id`, `name`) values (10, 'CorpoZulia');
insert into `agreements` (`id`, `name`) values (11, 'MPPE');
insert into `agreements` (`id`, `name`) values (12, 'La corteza');
insert into `agreements` (`id`, `name`) values (13, 'Unipersonal');
insert into `agreements` (`id`, `name`) values (14, 'JEL');
insert into `agreements` (`id`, `name`) values (15, 'SAGAS');
insert into `agreements` (`id`, `name`) values (16, 'Poli cabimas');
insert into `agreements` (`id`, `name`) values (17, 'CLEZ');
insert into `agreements` (`id`, `name`) values (18, 'IMAU');
insert into `agreements` (`id`, `name`) values (19, 'Prevision CPBEZ');
insert into `agreements` (`id`, `name`) values (20, 'Prevision cemento');
insert into `agreements` (`id`, `name`) values (21, 'Corpoelec');
insert into `agreements` (`id`, `name`) values (22, 'PNB');
insert into `agreements` (`id`, `name`) values (23, 'SANIPEZ');


CREATE TABLE `agencies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;insert into `agencies` (`id`, `name`) values (1, 'Maracaibo');
insert into `agencies` (`id`, `name`) values (2, 'San Francisco');
insert into `agencies` (`id`, `name`) values (3, 'Acarigua');


CREATE TABLE `banks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;insert into `banks` (`id`, `name`) values (1, 'Oficina');
insert into `banks` (`id`, `name`) values (2, 'Banco de Venezuela');
insert into `banks` (`id`, `name`) values (3, 'Banco Nacional de credito');
insert into `banks` (`id`, `name`) values (4, 'Banco Provincial');
insert into `banks` (`id`, `name`) values (5, 'Banco Bicentenario ');
insert into `banks` (`id`, `name`) values (6, 'Banesco');
insert into `banks` (`id`, `name`) values (7, 'Banco Del Tesoro');


CREATE TABLE `clients` (
  `id` varchar(15) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `birthDate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;insert into `locations` (`id`, `name`) values (1, 'Acarigua');
insert into `locations` (`id`, `name`) values (2, 'Paez');
insert into `locations` (`id`, `name`) values (3, 'Maracaibo');
insert into `locations` (`id`, `name`) values (4, 'Araure');
insert into `locations` (`id`, `name`) values (5, 'San Francisco');
insert into `locations` (`id`, `name`) values (6, 'Jesus Enrique Losada');
insert into `locations` (`id`, `name`) values (7, 'La Concepcion');
insert into `locations` (`id`, `name`) values (8, 'La Concepcion');
insert into `locations` (`id`, `name`) values (9, 'Machiques de Perija');
insert into `locations` (`id`, `name`) values (10, 'La Cañada');
insert into `locations` (`id`, `name`) values (11, 'Miranda');
insert into `locations` (`id`, `name`) values (12, 'Santa Barbara');
insert into `locations` (`id`, `name`) values (13, 'Barquisimeto');
insert into `locations` (`id`, `name`) values (14, 'Portuguesa');
insert into `locations` (`id`, `name`) values (15, 'Mara');
insert into `locations` (`id`, `name`) values (16, 'Caja Seca');
insert into `locations` (`id`, `name`) values (17, 'Goajira');
insert into `locations` (`id`, `name`) values (18, 'Carrasquero');


CREATE TABLE `paymentFrecuencies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;insert into `paymentFrecuencies` (`id`, `name`) values (1, 'Mensual');
insert into `paymentFrecuencies` (`id`, `name`) values (2, 'Anual');
insert into `paymentFrecuencies` (`id`, `name`) values (3, 'Quincenal');


CREATE TABLE `plans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;insert into `plans` (`id`, `name`) values (1, 'Clasico');
insert into `plans` (`id`, `name`) values (2, 'Clasico Plus Regional');
insert into `plans` (`id`, `name`) values (3, 'Premium');
insert into `plans` (`id`, `name`) values (4, 'Ecologico');
insert into `plans` (`id`, `name`) values (5, 'Clasico Plus');
insert into `plans` (`id`, `name`) values (6, 'Clasico Regional');
insert into `plans` (`id`, `name`) values (7, 'Clasico Plus Nacional ');


CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `password` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


CREATE TABLE `contracs` (
  `id` varchar(64) NOT NULL,
  `contractNumber` varchar(15) NOT NULL DEFAULT current_timestamp(),
  `clientId` varchar(15) NOT NULL,
  `adviserId` varchar(64) NOT NULL,
  `supervisorId` varchar(64) NOT NULL,
  `agencyId` int(11) NOT NULL,
  `agreementId` int(11) NOT NULL,
  `inscription` date NOT NULL,
  `emision` date NOT NULL,
  `expiracion` date NOT NULL,
  `bankId` int(11) NOT NULL,
  `accountNumber` varchar(20) NOT NULL,
  `location` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `paymentFrecuency` int(11) NOT NULL,
  `withdrawalDate` date NOT NULL,
  `cancelationDate` date NOT NULL,
  `plan` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `contractClient` (`clientId`),
  KEY `contractAdviser` (`adviserId`),
  KEY `contractSupervisor` (`supervisorId`),
  KEY `agencyContract` (`agencyId`),
  KEY `agreementContract` (`agreementId`),
  KEY `contractBank` (`bankId`),
  KEY `contractLocation` (`location`),
  KEY `contractPymentFrecuency` (`paymentFrecuency`),
  KEY `contractPlan` (`plan`),
  CONSTRAINT `agencyContract` FOREIGN KEY (`agencyId`) REFERENCES `agencies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `agreementContract` FOREIGN KEY (`agreementId`) REFERENCES `agreements` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `contractAdviser` FOREIGN KEY (`adviserId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `contractBank` FOREIGN KEY (`bankId`) REFERENCES `banks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `contractClient` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `contractLocation` FOREIGN KEY (`location`) REFERENCES `locations` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `contractPlan` FOREIGN KEY (`plan`) REFERENCES `plans` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `contractPymentFrecuency` FOREIGN KEY (`paymentFrecuency`) REFERENCES `paymentFrecuencies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `contractSupervisor` FOREIGN KEY (`supervisorId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;