FROM microsoft/aspnet:1.0.0-beta7-coreclr

COPY ./HelloWebApi/ /app/
WORKDIR /app
RUN dnu restore
EXPOSE 5000
ENTRYPOINT ["dnx", "kestrel"]