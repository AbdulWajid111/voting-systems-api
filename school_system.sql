-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 17, 2022 at 09:59 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `classId` int(11) NOT NULL,
  `className` varchar(30) NOT NULL,
  `created_At` timestamp NOT NULL DEFAULT curdate() ON UPDATE current_timestamp(),
  `updated_At` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`classId`, `className`, `created_At`, `updated_At`) VALUES
(2, 'string', '2021-12-18 03:18:22', '2021-12-18 03:18:22');

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `parentId` int(6) NOT NULL,
  `parentFullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(300) NOT NULL,
  `phoneNo` varchar(12) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`parentId`, `parentFullName`, `email`, `password`, `phoneNo`, `createdAt`, `updatedAt`) VALUES
(4, 'string', 'string', '$2b$10$t26ueqLBVK7ILp70.TYxpOFbPqR6GCGA0FbV7c8gNNzQCOPAur3uS', 'string', '2021-12-11 03:32:42', '2021-12-11 03:32:42'),
(5, 'new', 'new', '$2b$10$HcGWKBATrvTQreidH2HZd.yNO9Eo8MvsAj6XabPqsxdA7e/.BBWXS', 'string', '2021-12-14 05:06:55', '2021-12-14 05:06:55');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `studentId` int(11) NOT NULL,
  `studentFullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `parentId` int(11) DEFAULT NULL,
  `phoneNo` varchar(30) NOT NULL,
  `created_At` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_At` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`studentId`, `studentFullName`, `email`, `parentId`, `phoneNo`, `created_At`, `updated_At`) VALUES
(2, 'string', 'string', 4, 'string', '2021-12-14 05:02:07', '2021-12-14 05:02:07'),
(3, 'string', 'string', 5, 'string', '2021-12-14 05:07:28', '2021-12-14 05:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teahcherId` int(10) NOT NULL,
  `teacherFullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(300) NOT NULL,
  `phoneNo` varchar(30) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teahcherId`, `teacherFullName`, `email`, `password`, `phoneNo`, `createdAt`, `updatedAt`) VALUES
(2, 'name', 'name', '96127c9e1336a7ad5109267f75baaac4ca4c654826d075a24fefc52ab759c6d7750045df87be5252d6422fc782244b22b437ad422051def479c0d0991603a7a01a54cdb5b8b813c967173c7329fffc60c7325ea8ccbbf0d7b115515cb655206133b2cd76', '123', '2021-12-08 05:05:00', '2021-12-08 05:05:00'),
(3, 'string', 'string', '6bbc459a121b5dca1607fba2882afba42d2efbe5656d051584f7107fbf8b0649286493b1331ed0cd983d6ae1f2e129867fcfeed285f3dc157a2afcdc3842ef34d35f9da6eeb3b30ed1963095aa475ed5235e89beb545ec143c2a9c27640b0f1d8d113c60c9e4', '0', '2021-12-08 05:28:49', '2021-12-08 05:28:49'),
(4, 'new', 'new', '$2b$10$sxVRdeH1HWoRyhMd2WDL4./c/vPwUr0ieC4n.qN5g4DpbH8jyGdT2', 'new', '2021-12-11 02:57:28', '2021-12-11 02:57:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `phoneNo` varchar(32) NOT NULL,
  `cratedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`classId`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`parentId`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`studentId`),
  ADD KEY `parentId` (`parentId`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teahcherId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `classId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `parent`
--
ALTER TABLE `parent`
  MODIFY `parentId` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `studentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `teahcherId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `parent` (`parentId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
