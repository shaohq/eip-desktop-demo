FROM nginx:1.15.8
COPY dist /usr/share/nginx/html
COPY docker/nginx.80.conf /etc/nginx/conf.d/nginx.80.conf
RUN rm -f /etc/nginx/nginx.conf
COPY docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
