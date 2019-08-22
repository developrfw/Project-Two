USE i1m1v7alns6rfh9d;

CREATE TABLE `users` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `username` VARCHAR( 255) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  'credits' VARCHAR( 255) NOT NULL,

  PRIMARY KEY ( `id` ) 
);