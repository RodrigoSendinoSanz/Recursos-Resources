-- Ir a https://mystery.knightlab.com/

select
*
from
crime_scene_report
where
 date=20180115
and
type="murder";


-- Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".           



select
*
from
person
where
 address_street_name
like
"Franklin ave%";

-- 16371	Annabel Miller	490173	103	Franklin Ave	318771143

select
*
from
person
where
 address_street_name
like
"northwest%"
order by
address_number desc;
              
-- 14887	Morty Schapiro	118009	4919	Northwestern Dr	111564949



select
*
from
interview
where
 person_id=16371;

-- 16371	I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.


select
*
from
interview
where
 person_id=14887;

-- 14887	I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".



select
*
from
 get_fit_now_check_in
join
 get_fit_now_member
on
 get_fit_now_check_in.membership_id =get_fit_now_member.id
where
 membership_id
like
 "48Z%"
and
 check_in_date=20180109;
              
-- 48Z7A	20180109	1600	1730	48Z7A	28819	Joe Germuska	20160305	gold
-- 48Z55	20180109	1530	1700	48Z55	67318	Jeremy Bowers	20160101	gold



              
    