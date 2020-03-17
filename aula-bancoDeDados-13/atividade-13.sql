create database aula_bd;
create table carros(
id int,
nome varchar(50),
cor varchar(50),
ano int, 
valor int
);
insert into carros(id,nome,cor,ano,valor)
values
(1,"uno","vermelho",1990,12000),
(2,"siena","verde",1992,10000),
(3,"sonic","amarelo",1992,12000),
(4,"siena","branco",1993,14000),
(5,"uno","vermelho",1995,13000),
(6,"corsa","prata",2000,11000),
(7,"celta","preto",2002,18000),
(8,"prisma","branco",2003,17000),
(9,"corsa","rosa",2002,20000),
(10,"ford","preto",2006,16000);

select * from carros
where ano > 2000;

select distinct cor from carros;

select count(ano)
from carros
where ano < 2000;

select avg(valor)
from carros
where ano > 2000;

select sum(valor)
from carros;

select nome
from carros
where nome like 'f%';

select cor
from carros
where nome like '%a';

select ano
from carros
where ano between 1990 and 1995;

select max(valor)
from carros;

select min(valor)
from carros;

select min(ano)
from carros;

select max(ano)
from carros;

select nome 
from carros
order by nome desc;