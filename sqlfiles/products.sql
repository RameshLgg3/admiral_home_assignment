-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 29, 2022 at 03:10 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admiralindia`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `product_type_id` int(1) NOT NULL DEFAULT 1,
  `price` decimal(5,2) NOT NULL DEFAULT 0.00,
  `minimum_quantity` int(2) NOT NULL DEFAULT 0,
  `productTypeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `short_description`, `product_type_id`, `price`, `minimum_quantity`, `productTypeId`) VALUES
(1, 'Product 1 - Physical', 'short description of the product 1', 1, '5.00', 5, NULL),
(2, 'Product 2 - Physical', 'short description of the product 2', 1, '13.00', 10, NULL),
(3, 'Product 3 - Virtual', 'short description of the product 3', 2, '24.00', 0, NULL),
(4, 'Product 4 - Physical', 'short description of the product 4', 1, '13.00', 0, NULL),
(5, 'Product 5 - Virtual', 'short description of the product 5', 2, '15.00', 0, NULL),
(6, 'Product 6 - Physical', 'short description of the product 6', 1, '8.00', 5, NULL),
(7, 'Product 7 - Physical', 'short description of the product 7', 1, '8.00', 5, NULL),
(8, 'New product - Physical', 'short description of the product', 1, '8.00', 5, NULL),
(9, 'New product - Virtual', 'short description of the product', 2, '8.00', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_type_id` (`product_type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`product_type_id`) REFERENCES `product_types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
