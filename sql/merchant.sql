/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : dazhong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-30 10:54:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `merchant`
-- ----------------------------
DROP TABLE IF EXISTS `merchant`;
CREATE TABLE `merchant` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `shopingId` int(11) DEFAULT NULL COMMENT '商家ID',
  `name` varchar(255) DEFAULT NULL COMMENT '商家名称',
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '商品描述',
  `start` float DEFAULT NULL,
  `price` float DEFAULT NULL COMMENT '价格',
  `del` float DEFAULT NULL COMMENT '原价',
  `src` varchar(255) DEFAULT NULL COMMENT '商品图片',
  `buyCount` varchar(255) DEFAULT NULL COMMENT '销售数量',
  `message` varchar(255) DEFAULT NULL COMMENT '商家描述',
  `groups` varchar(255) DEFAULT NULL COMMENT '判断是主页数据还是商品列表页数据',
  `team` varchar(255) DEFAULT NULL COMMENT '团购',
  PRIMARY KEY (`indexid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of merchant
-- ----------------------------
INSERT INTO `merchant` VALUES ('1', '1', '悦榕庄', '[3店通用] 8人超值套餐,提供免费WiFi', '4', '448', '613', './img/1.jpg', '300', '广州食蛇圣地', 'false', null);
INSERT INTO `merchant` VALUES ('2', '2', '广州塔璇玑地中海自助旋转餐厅', '仅售298元！价值446.2元的吉尼斯记录旋转餐厅单人平日自助午餐（含150元登塔观光门票）。', '4.5', '298', '446', './img/2.jpg', '321', '烛光约会餐厅', 'false', null);
INSERT INTO `merchant` VALUES ('3', '3', '空中一号', '[珠江新城] 8人龙虾海鲜餐，提供免费WiFi', '4', '888', '1721', './img/3.jpg', '321', '革命家邓小平题的字', 'false', null);
INSERT INTO `merchant` VALUES ('4', '4', '广州W酒店-稻菊日本餐厅', '[珠江新城] 套餐2选1', '4.5', '198', '437', './img/4.jpg', '321', '广州年度十大奢华餐厅', 'false', null);
INSERT INTO `merchant` VALUES ('5', '5', '弓夫射箭馆', '[2店通用] 工作日双人射箭“弓囍”套餐（共四组箭 适合双人使用 反曲弓）', '5', '65', null, './img/5.jpg', '321', null, 'false', null);
INSERT INTO `merchant` VALUES ('6', '6', '探鱼', '[来又来/大润发] 凌波/海鲈鱼套餐，建议1-2人使用', '4', '178', '204', './img/6.jpg', '321', null, 'false', null);
INSERT INTO `merchant` VALUES ('7', '7', '慧心慈素', '[东风东/杨箕] 单人素食自助', '4.5', '31.8', '33', './img/7.jpg', '321', null, 'false', null);
INSERT INTO `merchant` VALUES ('8', '8', '517跳跳蛙·盛强汕头黄牛肉', '[江南大道] 四人招牌跳跳蛙锅（2斤）1份', '4', '1', '96', './img/8.jpg', '321', null, 'false', null);
INSERT INTO `merchant` VALUES ('9', '9', 'Mr.Fish鱼鲜生海鲜放题', '[珠江新城] 单人自助午餐', '4.5', '330', '390', './img/9.jpg', '321', null, 'false', null);
INSERT INTO `merchant` VALUES ('10', '10', '嬉游纪酸菜鱼', '[2店通用] 唐僧版酸菜鲈鱼1份', '4.5', '49', '96', './img/10.jpg', '321', null, 'false', null);
INSERT INTO `merchant` VALUES ('11', '11', '小龙坎老火锅(珠江新城店)', '珠江新城', '4.5', '128', null, './img/11.jpg', '321', '四川火锅', 'true', '9.9元 小鲜肉');
INSERT INTO `merchant` VALUES ('12', '12', '牛痴(环市东店)', '环市东', '4.5', '81', null, './img/12.jpg', '321', '火锅', 'true', '50元 外带牛肉丸（1斤装）1斤');
INSERT INTO `merchant` VALUES ('13', '13', '點都德(名都楼)', '滨江路', '4.5', '58', null, './img/13.jpg', '321', '粤菜', 'true', '90代100元');
INSERT INTO `merchant` VALUES ('14', '14', '洛奇先生餐吧(时代广场店)', '天河北', '5', '146', null, './img/14.jpg', '321', '西餐', 'true', '2017广州必吃榜上榜餐厅');
INSERT INTO `merchant` VALUES ('15', '15', '上辣重庆老火锅', '工业大道', '4.5', '89', null, './img/15.jpg', '321', '四川火锅', 'true', '9.9元 上辣羊肉/牛肉卷1份');
INSERT INTO `merchant` VALUES ('16', '16', '桃姐农庄(总店)', '温泉镇', '4.5', '49', null, './img/16.jpg', '321', '粤菜馆', 'true', '15.88元 松糕1份');
INSERT INTO `merchant` VALUES ('17', '17', '有间虾铺', '珠江新城', '4.5', '115', null, './img/17.jpg', '321', '小龙虾', 'true', '88元 午市双人优惠套餐');
INSERT INTO `merchant` VALUES ('18', '18', '耍牛满·爽腩鲜牛肉火锅(太古仓店)', '工业大道', '4', '85', null, './img/18.jpg', '321', '火锅', 'true', '99元 午市宵夜双人套餐');
INSERT INTO `merchant` VALUES ('19', '19', '點都德(聚福楼)', '北京路', '4.5', '69', null, './img/19.jpg', '321', '粤菜馆', 'true', '90代100元');
INSERT INTO `merchant` VALUES ('20', '20', '滋粥楼(南村店)', '南村', '4.5', '128', null, './img/20.jpg', '321', '粤菜馆', 'true', '303元 粥水火锅套餐');
