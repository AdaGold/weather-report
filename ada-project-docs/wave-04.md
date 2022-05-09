## Wave 4: Calling APIs

For this wave, we will add a feature that gets the weather of the currently displayed city name. In order to get the weather of the city, first we will need to get the latitude and longitude of the city using the [`LocationIQ`](https://locationiq.com/docs) API. We can then use the latitude and longitude with the [`OpenWeather`](https://openweathermap.org/api/one-call-api) API to get current weather data.

First, we will need to create accounts and log into `LocationIQ` and `OpenWeather`. Next, we will navigate the sites to find our API keys and read the docs to learn how to make the correct `GET` requests and parse the responses.

### Proxy Servers

When we are building client side web applications, we don't want to include our API keys in our code as they will be available for anyone to see. To manage our API keys we will use a proxy server.

"A proxy server is a server (or computer system or an application) that acts as an intermediary for requests from clients seeking resources from other servers" [resource](https://medium.com/system-design-blog/what-is-proxy-server-a05b99bf686a#:~:text=A%20proxy%20server%20is%20a,seeking%20resources%20from%20other%20servers). 

### Weather Report Proxy Server

For Weather Report, we provide a [weather report proxy server](https://github.com/adaGold/weather-report-proxy-server) built with Flask. As such, the *Weather Report web app* we are building should make `axios` calls to our *Weather Report proxy server*, which manages our API keys and forwards our requests along to the appropriate 3rd party API. 

For details on how to run the Weather Report proxy server, see the [Weather Report Proxy Server README](https://github.com/adaGold/weather-report-proxy-server). No changes need to be made to the source code of the proxy server. The only work that needs to be done is adding a `.env` file with your API keys.
