# Fullstack-kurssin-Backend

Avoimen yliopiston Fullstack Open kurssilla tehty backend Node express-teknologialla toteutettuna. Frontend on React + Vite. Tietokantana toimii MongoDB.

Julkaistu sovellus: https://express-wispy-wind-7618.fly.dev/

Requests:
GET https://express-wispy-wind-7618.fly.dev/api/persons
DELETE https://express-wispy-wind-7618.fly.dev/api/persons/:id
POST https://express-wispy-wind-7618.fly.dev/api/persons Content-Type: application/json

{
"name": "new name", "number": "040-1234556"
}

//EDIT 29.1.2025: Lisäsin frontendin tähän samaan repoon, ja tein niille yhteisen CI/CD pipelinen, joka:

1. Linttaa frontendin ja backendin koodin aina, kun pushataan koodia tai tehdään pull request main-branchiin
2. Tarkistaa commit viestin - jos siinä on #skip, se ei deployaa uutta koodia
3. Varmistaa, että koodi on oikeasti menossa mainiin ennen deployta, eikä kyse ole vain pull requestista
4. Buildaa frontendin ja redeployaa sekä frontendin että backendin
5. Luo version tagin onnistuneen deployn jälkeen
