#
# Build stage
#
FROM maven:3.6.3-openjdk-17-slim AS build
COPY src Backend/src
COPY pom.xml /Backend
RUN mvn -f /Backend/pom.xml clean package -P prod


#
# Package stage
#
FROM openjdk:17
MAINTAINER Brian
COPY --from=build /Backend/target/gocar-0.0.1-SNAPSHOT.jar  /usr/local/lib/gocar-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/usr/local/lib/gocar-app.jar"]