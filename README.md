# CrawlerWeb

Creazione del file `.nvmrc` e scelta della versione del nodo da utilizzare.

Lanciamo `npm init` per creare il file `package.json`:
```
 npm init
```

Installare il framework [`jest`](https://jestjs.io/docs/getting-started) con `npm`:

```
 npm install --save-dev jest
```

Installare [`jsdom`](https://github.com/jsdom/jsdom):

```
 npm install jsdom
```

Utilizzo `jsdom` per construire il DOM tramite un input HTML ed estrarre i links presente nel codice tramite la funzione `getURLfromHTML`.