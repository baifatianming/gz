/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : management

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-04-10 18:48:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `supermanager`
-- ----------------------------
DROP TABLE IF EXISTS `supermanager`;
CREATE TABLE `supermanager` (
  `username` char(255) NOT NULL,
  `psw` char(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of supermanager
-- ----------------------------
INSERT INTO `supermanager` VALUES ('hallo', '123');
