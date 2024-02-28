BEGIN;

-- 创建学生表：包括学号，姓名，年龄，性别，院系
CREATE TABLE s
(
s_no VARCHAR(7) PRIMARY KEY,
s_name VARCHAR(10) NOT NULL,
s_age INT,
s_sex VARCHAR(2),
s_dept VARCHAR(20) DEFAULT '计算机系'
);

-- 创建课程表：包括课程号，课程名，选修课课程号，学分
CREATE TABLE c
(
c_no VARCHAR(10) PRIMARY KEY,
c_name VARCHAR (20) NOT NULL,
c_pno VARCHAR(10),
c_credit INT
);

-- 创建选课表
CREATE TABLE sc
(
s_no VARCHAR(7),
c_no VARCHAR(10),
grade INT,
FOREIGN KEY (s_no) REFERENCES s(s_no),
FOREIGN KEY (c_no) REFERENCES c(c_no)
);

-- 向学生表S中插入数据
INSERT INTO s
   (s_no,s_name,s_age,s_sex,s_dept)
VALUES
   ('10001','张三',20,'男','计算机'),
   ('10002','李梅',19,'女','计算机'),
   ('10003','王五',18,'男','CS'),
   ('10004','小明',21,'男','计算机'),
   ('10006','黎明',18,'男','艺术表演'),
   ('10008','杰克',21,'男','计算机'),
   ('10005','小红',22,'女','CS');

-- 向课程表C中插入数据   
INSERT INTO c
   (c_no,c_name,c_pno,c_credit)
VALUES
   ('1','离散数学',NULL,5),
   ('2','线性代数','3',6),
   ('3','高等数学',NULL,4),
   ('4','数据结构','3',6),
   ('5','操作系统','1',4),
   ('6','数据库','4',5);

-- 向选课表SC中插入数据  
INSERT INTO sc
  (s_no,c_no,grade)
VALUES
  ('10001','1',70),
  ('10001','6',56),
  ('10003','4',90),
  ('10003','5',83),
  ('10004','1',75),
  ('10004','3',90),
  ('10008','1',70),
  ('10008','5',70),
  ('10008','6',88),
  ('10002','1',85),
  ('10002','6',89);

COMMIT;