use sakila;
select * from sakila.actor where first_name='DAN';

select * from sakila.inventory where film_id > 50;

select distinct amount from sakila.payment where amount < 3;

select * from sakila.city where city_id= 102;

SELECT * FROM sakila.customer where store_id = 1;

select * FROM  sakila.staff where staff_id <> 2;

select * FROM sakila.language where name <> 'German';

select description, release_year FROM sakila.film where title='IMPACT ALADDIN';

SELECT * FROM sakila.payment where amount > 0.99;

SELECT * FROM sakila.country WHERE country = 'Algeria' and country_id = 2;

SELECT * FROM sakila.country WHERE country = 'Algeria' or country_id = 12;

select * from sakila.language where language_id = 1 or name= 'German';

SELECT * FROM sakila.category WHERE not name='Action';

select distinct(rating) from sakila.film where NOT rating = 'PG';

select * from sakila.payment where customer_id =36 and amount > 0.99 and staff_id =1;

select * from sakila.rental where not staff_id=1 and customer_id > 250 and inventory_id < 100;

select *from sakila.customer where first_name IN('MARY','PATRICIA');

SELECT * FROM sakila.film where special_features in('Trallers','Trailers,Deleted Scenes') and rating in('G','NC-17') and length> 50;

select * from sakila.category where name not in('Action','Animation','Children');

select * from sakila.film_text where title in ('ZORRO ARK','VIRGIN DAISY','UNITED PILOT');

select * from sakila.city WHERE city in ('Chiayi','Dongying','Fukuyama','Kilis');

select * from sakila.rental where (customer_id between 300 and 350) and staff_id =1;

select * from sakila.payment  where amount not between 3 and 5;

select * from sakila. payment where (amount  between 2.99 and 4.99 ) and staff_id = 2 and customer_id in (1,2);

select * from sakila.address where city_id between 300 and 350;

select * from sakila.film where (rental_rate between 0.99 and 2.99) and (length <= 50 )and (replacement_cost < 20);

select * from sakila.actor where first_name LIKE "A%" and last_name like "B%";

select * from sakila.actor where first_name LIKE "%A" AND last_name LIKE "%N";

select * from sakila.actor where first_name LIKE "%NE%"AND last_name like "%RO%";

select * from sakila.actor where first_name LIKE "C%N" AND last_name LIKE "G%";

select * FROM sakila.film where release_year = 2006 and title LIKE "ALI%";

select f.title,f.description,f.release_year,f.language_id
from sakila.film f 
inner join sakila.language l on (f.language_id=l.language_id);

select *from sakila.address;
select * from sakila.city;

select a.address as Dirrecion,c.city as Ciudad  from sakila.address a
inner join sakila.city c on (a.city_id =c.city_id);

select c.customer_id, c.first_name,c.last_name,a.actor_id,a.first_name,a.last_name from sakila.customer c
right join sakila.actor a on (c.last_name = a.last_name);

select c.customer_id, c.first_name,c.last_name,a.actor_id,a.first_name,a.last_name from sakila.customer c
left join sakila.actor a on (c.last_name = a.last_name);

select 
a.address,
c.city,
co.country
from sakila.address a
inner join sakila.city c on (a.city_id =c.city_id)
inner join  sakila.country co on (c.country_id=co.country_id);

select 
c.first_name,
a.address,
s.store_id
from sakila.customer c
left join sakila.store s on (c.store_id=s.store_id)
left join sakila.address a on (c.address_id=a.address_id);

select 
r.rental_id,
s.first_name
from sakila.rental r
inner join sakila.staff s on (r.staff_id=s.staff_id);

select * from sakila.payment;
select sum(amount) from sakila.payment;

select * from sakila.inventory;

select inventory_id +film_id +store_id
from sakila.inventory;

select count(first_name) from sakila.actor;

select avg(amount) from sakila.payment;

select min(length) from sakila.film;

select count(rental_id) from sakila.rental;

select max(amount) from sakila.payment;

select last_name, count(*) from sakila.actor group by last_name;

select 
c.customer_id,
c.first_name,
c.last_name,
sum(p.amount)from sakila.payment p
inner join sakila.customer c on (c.customer_id=p.customer_id)
group by 1,2,3;

select customer_id,max(rental_date) from sakila.rental group by customer_id;

select last_name, count(*) from sakila.actor group by 1 having count(*)>3;

select c.customer_id,c.first_name,c.last_name,sum(amount) from sakila.payment p
inner join sakila.customer c on (p.customer_id = c.customer_id) group by 1,2,3 having sum(p.amount)<60 order by sum(p.amount)desc;

select last_name,count(*) from sakila.actor group by last_name having count(*)>3;

select name,char_length(name) from sakila.category;

select city,char_length(city) from sakila.city;

select *, concat(first_name," ",last_name) as "Nombre Completo" from sakila.customer;

select concat_ws("-",title,description,release_year) as "Infromacion" FROM sakila.film;

select *, round(amount,0) from sakila.payment;

select *,lcase(concat(first_name," ",last_name))as "Nombre Completo" from sakila.actor;

select email,char_length(email) from sakila.customer;

select first_name,last_name,email,concat_ws("/",first_name,last_name,email) as "Todo junto" from sakila.customer;

select concat_ws("-",title,description,release_year) from sakila.film;

select round(avg(amount)) from sakila.payment group by customer_id;

select *,ucase(city) from sakila.city;

select * from sakila.address;

select address,address2, case when address2 is null then "Sin direccion 2" else "Con direccion" END AS Comentario from sakila.address;

select payment_id,amount, case when amount<1 then "Precio Minimo"when amount between 1 and 3 then "Precio Intermedio" else "Precio Maximo" END AS Comentario from sakila.payment;

select rental_rate, case when rental_rate < 1 then "Pelicula Mala" when rental_rate between 1 and 3 then "Pelicula Buena" else "Pelicula Excelente" END AS Comentario from sakila.film;

select title from sakila.film where title like 'K%'OR title LIKE 'Q%'
AND title IN (select title from sakila.film where language_id IN 
(select language_id from sakila.language where name ="English"));

use sakila;

select 
first_name,
last_name
from sakila.actor
where actor_id in ( select actor_id from film_actor where film_id in(
select film_id from film where title = 'Alone Trip'
));

select title from sakila.film
where film_id in ( select film_id from film_category where category_id in(
select category_id FROM sakila.category where name = "Family"
));

use sakila;
select customer_id,concat_ws(" ",first_name,last_name) Cliente,email from sakila.customer where customer_id in(
	select customer_id from sakila.rental where inventory_id in(
		select inventory_id from inventory where film_id in(
			select film_id from sakila.film_category where category_id =1
		)
	)
);

CREATE VIEW ingresos_por_genero as
select name, SUM(amount)
from sakila.category
inner join film_category
on category.category_id = film_category.category_id
inner join inventory
on film_category.film_id = inventory.film_id
inner join sakila.rental
on inventory.inventory_id =rental.inventory_id
inner join payment
on rental.rental_id = payment.rental_id
group by name
order by sum(amount) desc limit 5;

select * from ingresos_por_genero;

drop view ingresos_por_genero;

drop view lista_de_clientes;

CREATE VIEW lista_de_clientes as
select concat(first_name," ",last_name) as Nombre from customer
inner join address
on customer.address_id = address.address_id
inner join city
on address.city_id = city.city_id
inner join sakila.country
on city.country_id = country.country_id
group by first_name;

select * from lista_de_clientes;

select a.first_name,a.last_name,sum(b.amount)as "Total amount"
from staff a
inner join payment b on a.staff_id =b.staff_id and b.payment_date like '2005-08%'
group by a.first_name,a.last_name;

select b.title,count(actor_id) as 'Contador de Actores' from film_actor a
inner join film b on a.film_id = b.film_id
group by b.title;

select title,count(title)as'Copias disponibles' from film
inner join inventory on film.film_id = inventory.film_id
where title='Hunchback Impossible';

select first_name,last_name,sum(amount)as'Total pagado por cliente' from payment
inner join customer on payment.customer_id = customer.customer_id
group by first_name,last_name
order by first_name;

select * from city;

insert into city (city,country_id)
values ('Prueba','100');

SELECT * FROM actor;

insert into actor(first_name,last_name)
values ('Carlos','Gomez');

select * from category;

insert into category(name)
VALUES ('Romantic');

select * from city where country_id =87;

update city
set city= 'NEW YORK'
WHERE country_id =87;

select * from actor where last_name ='GUINESS';

update actor 
set first_name = 'Raul' where last_name ='GUINESS';

select * FROM staff;

update staff
set first_name ='Pablo' 
where staff_id =2;

select * from actor;

alter table actor
add column genero_actor char(1);

alter table actor
drop column genero_actor;

update actor
set genero_actor ='M'
where actor_id =1;

update actor
set genero_actor ='F'
where actor_id =3;

select * from actor
where first_name = 'Scarlett';

select * from actor
where last_name = 'Johansson';

select count(distinct last_name) from actor;

select first_name,last_name,count(last_name) as "Repetidos" from actor group by first_name,last_name
having Count(*) = 1;

select actor.actor_id, actor.first_name, actor.last_name, count(actor_id) as film_count
from actor inner join film_actor using (actor_id)
group by actor_id
order by film_count desc;


select film.film_id, film.title, store.store_id, inventory.inventory_id
from inventory inner join store using (store_id) join film using (film_id)
where film.title = 'Academy Dinosaur' and store.store_id = 1;


/* Codigo creado por:
8 888888888o.      ,o888888o.     8 888888888o.      8 888888888o.    8 8888     ,o888888o.        ,o888888o.     
8 8888    `88.  . 8888     `88.   8 8888    `^888.   8 8888    `88.   8 8888    8888     `88.   . 8888     `88.   
8 8888     `88 ,8 8888       `8b  8 8888        `88. 8 8888     `88   8 8888 ,8 8888       `8. ,8 8888       `8b  
8 8888     ,88 88 8888        `8b 8 8888         `88 8 8888     ,88   8 8888 88 8888           88 8888        `8b 
8 8888.   ,88' 88 8888         88 8 8888          88 8 8888.   ,88'   8 8888 88 8888           88 8888         88 
8 888888888P'  88 8888         88 8 8888          88 8 888888888P'    8 8888 88 8888           88 8888         88 
8 8888`8b      88 8888        ,8P 8 8888         ,88 8 8888`8b        8 8888 88 8888   8888888 88 8888        ,8P 
8 8888 `8b.    `8 8888       ,8P  8 8888        ,88' 8 8888 `8b.      8 8888 `8 8888       .8' `8 8888       ,8P  
8 8888   `8b.   ` 8888     ,88'   8 8888    ,o88P'   8 8888   `8b.    8 8888    8888     ,88'   ` 8888     ,88'   
8 8888     `88.    `8888888P'     8 888888888P'      8 8888     `88.  8 8888     `8888888P'        `8888888P'     
                                                                                                                  
   d888888o.   8 8888888888   b.             8 8 888888888o.       8 8888 b.             8     ,o888888o.         
 .`8888:' `88. 8 8888         888o.          8 8 8888    `^888.    8 8888 888o.          8  . 8888     `88.       
 8.`8888.   Y8 8 8888         Y88888o.       8 8 8888        `88.  8 8888 Y88888o.       8 ,8 8888       `8b      
 `8.`8888.     8 8888         .`Y888888o.    8 8 8888         `88  8 8888 .`Y888888o.    8 88 8888        `8b     
  `8.`8888.    8 888888888888 8o. `Y888888o. 8 8 8888          88  8 8888 8o. `Y888888o. 8 88 8888         88     
   `8.`8888.   8 8888         8`Y8o. `Y88888o8 8 8888          88  8 8888 8`Y8o. `Y88888o8 88 8888         88     
    `8.`8888.  8 8888         8   `Y8o. `Y8888 8 8888         ,88  8 8888 8   `Y8o. `Y8888 88 8888        ,8P     
8b   `8.`8888. 8 8888         8      `Y8o. `Y8 8 8888        ,88'  8 8888 8      `Y8o. `Y8 `8 8888       ,8P      
`8b.  ;8.`8888 8 8888         8         `Y8o.` 8 8888    ,o88P'    8 8888 8         `Y8o.`  ` 8888     ,88'       
 `Y8888P ,88P' 8 888888888888 8            `Yo 8 888888888P'       8 8888 8            `Yo     `8888888P'         
                                                                                                                  
                       d888888o.           .8.          b.             8  8888888888',8888'                       
                     .`8888:' `88.        .888.         888o.          8         ,8',8888'                        
                     8.`8888.   Y8       :88888.        Y88888o.       8        ,8',8888'                         
                     `8.`8888.          . `88888.       .`Y888888o.    8       ,8',8888'                          
                      `8.`8888.        .8. `88888.      8o. `Y888888o. 8      ,8',8888'                           
                       `8.`8888.      .8`8. `88888.     8`Y8o. `Y88888o8     ,8',8888'                            
                        `8.`8888.    .8' `8. `88888.    8   `Y8o. `Y8888    ,8',8888'                             
                    8b   `8.`8888.  .8'   `8. `88888.   8      `Y8o. `Y8   ,8',8888'                              
                    `8b.  ;8.`8888 .888888888. `88888.  8         `Y8o.`  ,8',8888'                               
                     `Y8888P ,88P'.8'       `8. `88888. 8            `Yo ,8',8888888888888        
*/
