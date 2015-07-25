-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 25-07-2015 a las 01:13:47
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `test`
--

create database IF NOT EXISTS test;
use test;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `uid` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `nif` varchar(255) NOT NULL DEFAULT '',
  `nia` varchar(255) NOT NULL DEFAULT '',
  `tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`nif`,`nia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`uid`, `password`, `nombre`, `apellidos`, `nif`, `nia`, `tipo`, `createdAt`, `updatedAt`) VALUES
('estu1', '{SSHA}MERhrBgTnZAQeb8i9n3kTgDbn60xOMO5c1KByHxlzwzGAIFl849XECjeMbJA/feT2zUuog==', 'estu1', 'estu1 estu1', '', '1111111', 'alumno', '2015-07-05 00:00:00', '2015-07-07 00:00:00'),
('estu2', '{SSHA}lxkpTpGTfJO7ZV/2LQLlOiQkwK9OVnWhwxj8o61jaLI8Cl9JUrmCFrrv1qzRiXO4UWlsgQ==', 'estu2', 'estu2 estu2', '', '222222', 'alumno', '2015-07-13 00:00:00', '2015-07-14 00:00:00'),
('profe1', '{SSHA}S+RKwhMQrf/8sPKn/9grMjYUjFr++rT1CeVdTjMT4rMoOvN/+1N7GNLq/Bss2WUKHbzB8A==', 'profe1', 'profe1 profe1', '111111111b', '', 'profesor', '2015-07-20 00:00:00', '2015-07-20 00:00:00'),
('admin', '{SSHA}ARLooQIdvh9AA/34JgjFh87SckRLCBcOu1NXvxTNvUw0z6+cAKJg9i58AfpDpfyuUt4lOA==', 'admin', 'admin admin', '123456789a', '', 'admin', '2015-07-23 00:00:00', '2015-07-24 15:54:35'),
('profe2', '{SSHA}r5y/ZvFf3O7lWd00HE4k72U2pCWbWSDkLeY6n9XwtPpMwIcGBx0vVzRqLkSLs2D43GBpSQ==', 'profe2', 'profe2 profe2', '222222222b', '', 'profesor', '2015-07-23 00:00:00', '2015-07-24 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
