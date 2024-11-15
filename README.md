<div align="center">
  <a href="https://github.com/radzek15/parafia"></a>
  <h1 align="center">Parafia</h1>
  <p align="justify">Aplikacja parafii w Przybynowie połączona z Firebase, strona jest responsywna, dostosowując się do różnych urządzeń.</p></div>
  <p align="justify">Adres URL: https://www.przybynowparafia.pl</p>

## Features

| Feature                | Description                                                                                                                                                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| React Web App          | <p align="justify">Strona parafii została wykonana przy użyciu biblioteki React, co pozwala na tworzenie dynamicznych i interaktywnych interfejsów użytkownika. </p>                                                               |
| Firebase               | <p align="justify">Firebase jest wykorzystywany jako platforma backendowa, umożliwiająca przechowywanie danych, uwierzytelnianie użytkowników za pomocą Firebase Authentication oraz przechowywanie plików w Firebase Storage.</p> |
| Data Visualisation     | <p align="justify">Aplikacja parafii może zawierać funkcję konwertowania danych do postaci newsów. Dzięki temu administrator może łatwo tworzyć aktualności na podstawie tych danych i publikować je na stronie parafii. </p>      |
| Dockerized Deployment  | <p align="justify">Aplikacja parafii skonteneryzowana przy użyciu Dockera, co umożliwia łatwe przenoszenie i uruchamianie na różnych środowiskach oraz pozwala uniknąć konfliktów zależności.</p>                                  |
| Testing and Validation | <p align="justify">Testy zostaną dodane</p>                                                                                                                                                                                        |

## Usage:

<div align="justify">

#### Nie polecam klonowania aplikacji, gdyż nie ma w niej nic nadzwyczajnego. Na wszelki wypadek dodaje jak to zrobić
#### Strona stworzona w celach nauki oraz doskonalenia użytych technologii
 * Sklonuj repo:
   *  `git clone https://github.com/radzek15/parafia`
 * Stwórz projekt w Firebase
 * Stwórz plik .env w głównym folderze i wklej do niego dane z firebase. Nazwy zmiennych w pliku firebase.js
 * Uruchom aplikacje:
   * `docker-compose up --build`
   
## Recent changes:

 * 09-11-2024 - Update - Posts can have multiple images attached to them

## Demo Presentation
  
  ![demo-parafia](https://github.com/radzek15/parafia/assets/79796741/aee24336-f852-43a7-975e-ff9d886f3291)

## Tech Stack
   * JavaScript
   * React.js
   * HTML
   * CSS
   * react-tsparticles
   * Firebase
   * Bootstrap

## License
Parafia is licensed under the [MIT](https://github.com/radzek15/parafia/blob/master/LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

</div>
