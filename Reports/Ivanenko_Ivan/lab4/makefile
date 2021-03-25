up:
	docker build -t lab4:v1 .
	docker run -d --name lab4-po4-Ivanenko -p 80:80 lab4:v1
down:
	docker stop lab4-po4-Ivanenko
	docker rm lab4-po4-Ivanenko
restart:
	docker stop lab4-po4-Ivanenko
	docker rm lab4-po4-Ivanenko
	docker build -t lab4:v1 .
	docker run -d --name lab4-po4-Ivanenko -p 80:80 lab4:v1
