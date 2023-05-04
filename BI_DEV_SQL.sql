-- berikut adalah syntax untuk menjawab soal https://www.testdome.com/questions/sql/workers/13562?visibility=1&skillId=17

-- penjelasan :
-- get data nama di tabel employees dimana nama tersebut bukan manager
SELECT name
FROM employees
WHERE id NOT IN (SELECT managerId FROM employees WHERE managerId IS NOT NULL);