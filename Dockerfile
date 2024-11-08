# Usando uma imagem base do Nginx
FROM nginx:alpine

# Copia o conteúdo do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80 para acessar a aplicação
EXPOSE 80
