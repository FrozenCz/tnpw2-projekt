# Recepty

Projekt je postaven na  [Angular CLI](https://github.com/angular/angular-cli) verze 9.1.0 a [NestJS](https://nestjs.com/)

## Jak jej spustit
####doinstalace node_modules
prvně je třeba doinstalovat node_modules jak pro Angular, tak pro Nest:

Spustíme v <b>kořenové</b> složce: `npm install`
<br>A pak ve složce <b>rest-api</b>: `npm install`

####spuštění Angular
z <b>kořenové</b> složky příkazem `npm run start`
<br>, pozor ne přes ng serve, spouští se i nastavení proxy.
<br>samotná aplikace se nachází na adrese: `http://localhost:4200/`

####spušení NestJs
ze složky <b>rest-api</b> příkazem `npm run server`
<br>samotný backend beží na adrese: `http://localhost:3000/`
