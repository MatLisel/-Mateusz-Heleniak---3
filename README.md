# System monitorowania postępów w nauce

## Opis
Aplikacja do śledzenia nauki różnych przedmiotów. Pozwala dodawać przedmioty i oznaczać postępy (lekcje, etapy), a także edytować i usuwać dane.

## Funkcjonalności
- Dodawanie i usuwanie przedmiotów
- Zmiana nazwy przedmiotu
- Dodawanie i usuwanie lekcji
- Wyświetlanie liczby ukończonych lekcji

## Uruchomienie

Zainstaluj zależności:

```bash
npm install
```

Uruchom serwer:

```bash
node app.js
```

Aplikacja dostępna będzie na `http://localhost:3000`.

## Wymagania

- Node.js >= 14
- Zależności:
  - express
  - ejs
  - body-parser
  - method-override