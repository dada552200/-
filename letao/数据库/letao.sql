# Host: localhost  (Version: 5.5.53)
# Date: 2018-09-19 11:42:43
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "address"
#

DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `addressDetail` varchar(200) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  `recipients` varchar(100) DEFAULT NULL,
  `postCode` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "address"
#

INSERT INTO `address` VALUES (1,1,'山西省太原市小店区','解放东路传智播客科技集团14层1402室',1,'周双大','111112',NULL),(2,2,'山西省太原市万柏林区','啊我对啊还',0,'闵仕达','1235',NULL),(3,2,'北京市北京市密云县','122',1,'卡夫卡为','WAGVAZXD',NULL),(4,2,'山东省济南市历下区','WUHAN',1,'MINSHIDA','123',NULL),(5,2,'浙江省杭州市上城区','dazoa',1,'taozi','123',NULL);

#
# Structure for table "brand"
#

DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(50) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `brandLogo` varchar(200) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  `hot` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

#
# Data for table "brand"
#

INSERT INTO `brand` VALUES (1,'耐克',1,'/mobile/images/brand1.png',1,1),(2,'阿迪',1,'/mobile/images/brand2.png',1,1),(3,'新百伦',1,'/mobile/images/brand3.png',1,1),(4,'哥伦比亚',1,'/mobile/images/brand4.png',1,0),(5,'匡威',1,'/mobile/images/brand5.png',1,1),(6,'阿萨德1',2,'/mobile/images/brand5.png',1,1),(7,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(8,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(9,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(10,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(11,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(12,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(13,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(14,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(15,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(16,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(17,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(18,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(19,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(20,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(21,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(22,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(23,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(24,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(25,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(26,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(27,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(28,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(29,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(30,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(31,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(32,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(33,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(34,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(35,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(36,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(37,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(38,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(39,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(40,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(41,'阿萨德2',2,'/mobile/images/brand5.png',1,1),(42,'11111',18,'/upload/brand/585110e0-bb47-11e8-9d97-d5b93764b886.bmp',1,0);

#
# Structure for table "cart"
#

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `num` int(20) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "cart"
#

INSERT INTO `cart` VALUES (1,1,1,1,'50',1),(2,1,2,2,'45',1),(3,1,3,4,'40',1),(4,2,6,44,'40',1);

#
# Structure for table "category"
#

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(50) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

#
# Data for table "category"
#

INSERT INTO `category` VALUES (1,'运动馆',1),(2,'女士馆',1),(3,'男士馆',1),(4,'帆布馆',1),(5,'户外管',1),(6,'户外管',1),(7,'户外管',1),(8,'户外管',1),(9,'户外管',1),(10,'户外管',1),(11,'户外管',1),(12,'户外管',1),(13,'户外管',1),(14,'户外管',1),(15,'户外管',1),(16,'户外管',1),(17,'户外管',1),(18,'户外管',1),(19,'户外管',1),(20,'户外管',1),(21,'wodw',1);

#
# Structure for table "employee"
#

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `mobile` char(11) DEFAULT NULL,
  `authority` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "employee"
#

INSERT INTO `employee` VALUES (1,'root','4QrcOUm6Wau+VuBX8g+IPg==','13902060052',1),(2,'msd','4QrcOUm6Wau+VuBX8g+IPg==','16602709404',1);

#
# Structure for table "product"
#

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proName` varchar(200) DEFAULT NULL COMMENT '商品名称',
  `oldPrice` float DEFAULT NULL COMMENT '商品价格',
  `price` float DEFAULT NULL COMMENT '商品折扣价',
  `proDesc` varchar(500) DEFAULT NULL COMMENT '商品描述',
  `size` varchar(20) DEFAULT NULL COMMENT '商品尺寸',
  `statu` int(4) DEFAULT NULL COMMENT '是否下架',
  `updateTime` datetime DEFAULT NULL COMMENT '上下架时间',
  `num` int(20) DEFAULT NULL COMMENT '商品库存',
  `brandId` int(11) DEFAULT NULL COMMENT '归属品牌',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "product"
#

INSERT INTO `product` VALUES (1,'匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',888.1,499.1,'描述','40-50',1,'2017-01-05 00:28:29',20,1),(2,'李宁闪击篮球鞋驭帅10镭射队尚4男韦德之道空袭中高帮队尚3.5球鞋',888.1,499.1,'描述','35-45',1,'2017-01-05 00:28:29',20,1),(3,'Sport飓风 Nike Kwazi 休闲运动鞋男 844839-002-001-100-400',888.1,499.1,'描述','30-50',1,'2017-01-05 00:28:29',20,1),(4,'指南针运动 NIKE HYPERSHIFT篮球鞋 844392-010-607-164-017现货',888.1,499.1,'描述','40-55',1,'2017-01-05 00:28:29',20,1),(5,'【莹恋】MIZUNO美津浓V1GA159002乒乓球鞋男鞋女鞋室内综合训练鞋',8868.1,4969.1,'描述123123','40-50',1,'2017-01-05 00:48:05',22,2),(6,'【莹恋】MIZUNO美津浓V1GA159002乒乓球鞋男鞋女鞋室内综合训练鞋',342,112,'描述123123','35-56',1,'2017-01-05 00:48:05',44,2);

#
# Structure for table "product_picture"
#

DROP TABLE IF EXISTS `product_picture`;
CREATE TABLE `product_picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picName` varchar(40) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `picAddr` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "product_picture"
#

INSERT INTO `product_picture` VALUES (1,'product.jpg',1,'/mobile/images/product.jpg'),(2,'detail.jpg',2,'/mobile/images/detail.jpg'),(3,'detail.jpg',3,'/mobile/images/detail.jpg'),(4,'/mobile/images/detail.jpg',4,'/mobile/images/detail.jpg'),(5,'/mobile/images/detail.jpg',5,'/mobile/images/detail.jpg'),(6,'/mobile/images/detail.jpg',6,'/mobile/images/detail.jpg'),(7,'/mobile/images/detail.jpg',1,'/mobile/images/detail.jpg');

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL COMMENT '1',
  `password` varchar(100) DEFAULT NULL,
  `mobile` char(11) DEFAULT NULL,
  `isDelete` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES (1,'itcast','lueSGJZetyySpUndWjMBEg==','15102324243',1),(2,'1234','ICy5YqxZB1uWSwcVLSNLcA==','12345678911',1);
