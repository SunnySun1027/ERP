use master
go
alter database ERP_Northwind_v1 set single_user with rollback immediate 
--将数据库回滚到原始配置状态
  
go
drop database ERP_Northwind_v1--删除数据库
go 