# nginx-webapp-demo
## Set up nginx
```bash
sudo apt-get update
sudo apt install nginx
```

## Nginx starts automatically after installation no need to start in manually, you can check if it is running by:
```bash
sudo systemctl status nginx
```
If it is not started start it by:
``` bash
sudo systemctl start nginx
```

## Nginx comes preconfigured, by default it shows a demo web page on Localhost:80, you can check it by
```bash
curl localhost:80
```
or by going to http://localhost:80 on your linux machine web browser

## Now Install node js and mysql
``` bash
sudo apt update
sudo apt install nodejs npm
sudo apt install mysql-server
```
## Configure mysql:
```bash
sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password’;
flush privileges;
exit
```

## Clone the demo repository:
```bash
cd /
sudo git clone https://github.com/shreverr/nginx-webapp-demo.git
```
## Start the server
```bash
cd nginx-webapp-demo
sudo npm i
sudo npm start
```
Press ctrl + c to exit

## Configure Nginx:
```bash
sudo nano /etc/nginx/sites-available/mynodeapp
```
Paste the following:
```bash
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
press ctrl + s and ctrl + x to save and exit nano.

## Enable the site and restart nginx:
```bash
sudo ln -s /etc/nginx/sites-available/mynodeapp /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

## Now check if nginx is working to going to:
http://localhost:80 on your linux machine web 
or
```bash
curl localhost:80
```
