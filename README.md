# Serwis memów "Memownia"
Projekt powstał jako praca zaliczeniowa z przedmiotu "Programowanie w React" na studiach podyplomowych Frontend Development z React - edycja 7

## Użyte technologie
Projekt został zbudowany w oparciu o [Create React App](https://github.com/facebook/create-react-app). W projekcie użyte zostały:
* Material UI
* Tailwind CSS
* Fontawsome
* Google Fonts

## Dostępne skrypty

Aby uruchomić aplikację z poziomu projektu należy uruchomić:

### `npm run start:app`

Polecenie uruchamia aplikację pod adresem [http://localhost:8080](http://localhost:8080). Adres należy otworzyć w przeglądarce.

### `npm run start:db`

Polecenie uruchamia bazę danych memów. Baza danych oparta jest na serwerze json-server i po uruchomieniu dostępna pod adresem [http://localhost:3000/mems](http://localhost:3000/mems)

### `npm run start:upload`

Polecenie uruchamia serwer odpowiedzialny za upload plików na lokalny dysk aplikacji. Serwer po uruchomieniu dostępny jest pod adresem [http://localhost:3001/upload](http://localhost:3001/upload)

## Instalacja
Po pobraniu projektu z repozytorium należy zainstalować wymagane pakiety. Dla aplikacji głównej z poziomu folderu projektu należy wykonać polecenie

### `npm install`

Analogiczne polecenie należy wykonać w folderze servera służącego do upload plików znajdującego się w katalogu

### `/src/upload-server`