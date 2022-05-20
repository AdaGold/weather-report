## Wave 4: Calling APIs

For this wave, we will add a feature that gets the weather of the currently displayed city name. In order to get the weather of the city, first we will need to get the latitude and longitude of the city using the [`LocationIQ`](https://locationiq.com/docs) API. We can then use the latitude and longitude with the [`OpenWeather`](https://openweathermap.org/api/one-call-api) API to get current weather data.

First, we will need to create accounts and log into `LocationIQ` and `OpenWeather`. Next, we will navigate the sites to find our API keys and read the docs to learn how to make the correct `GET` requests and parse the responses.

### Proxy Servers

When we are building client side web applications, we don't want to include our API keys in our code as they will be available for anyone to see. To manage our API keys we will use a proxy server.

"A proxy server is a server (or computer system or an application) that acts as an intermediary for requests from clients seeking resources from other servers" [resource](https://medium.com/system-design-blog/what-is-proxy-server-a05b99bf686a#:~:text=A%20proxy%20server%20is%20a,seeking%20resources%20from%20other%20servers). 

### Weather Report Proxy Server

For Weather Report, we provide a [weather report proxy server](https://github.com/adaGold/weather-report-proxy-server) built with Flask. As such, the *Weather Report web app* we are building should make `axios` calls to our *Weather Report proxy server*, which manages our API keys and forwards our requests along to the appropriate 3rd party API. 

For details on how to run the Weather Report proxy server, see the [Weather Report Proxy Server README](https://github.com/adaGold/weather-report-proxy-server). No changes need to be made to the source code of the proxy server. The only work that needs to be done is adding a `.env` file with your API keys.

### Cross-Origin Resource Sharing (CORS)

The Weather Report Proxy server uses the package [`flask-cors`](https://flask-cors.readthedocs.io/en/latest/) to handle Cross Origin Resource Sharing.

<details>
    <summary>Expand to see the `__init__.py` file for the proxy server</summary>

```python
from flask import Flask
from flask_cors import CORS


def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'

    from .routes import proxy_bp
    app.register_blueprint(proxy_bp)

    return 
```

</details>

CORS will continue to come up as we move into learning Full Stack development. To learn more about CORS, a great place to start is the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Follow your curiosity!
