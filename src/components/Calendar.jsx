import React from "react";

export function Calendar() {
    return (
        <main class="main">
            <h2>Kalendarz</h2>
            <div class="main__container calendar">
                <table class="calendar-table">
                    <caption class="calendar-table__caption">KALENDARZ</caption>
                    <tbody class="calendar-table__body">
                        <tr class="calendar-table__body--mounth"><th>Marzec 2020</th></tr>
                        <tr class="calendar-table__body--event odd"><td>6, godz. 19.00</td><td class="calendar-table__body--title">Footloose</td><td class="calendar-table__body--place"><a href="https://teatr-muzyczny.pl/" target="_blank">Teatr Muzyczny w Poznaniu</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>7, godz. 15.00</td><td class="calendar-table__body--title">Footloose</td><td class="calendar-table__body--place"><a href="https://teatr-muzyczny.pl/" target="_blank">Teatr Muzyczny w Poznaniu</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>7, godz. 19.00</td><td class="calendar-table__body--title">Footloose</td><td class="calendar-table__body--place"><a href="https://teatr-muzyczny.pl/" target="_blank">Teatr Muzyczny w Poznaniu</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>8, godz. 17.00</td><td class="calendar-table__body--title">Footloose</td><td class="calendar-table__body--place"><a href="https://teatr-muzyczny.pl/" target="_blank">Teatr Muzyczny w Poznaniu</a></td></tr>

                        <tr class="calendar-table__body--event odd"><td>13, godz. 19.00</td><td class="calendar-table__body--title">OPERA ZA TRZY GROSZE (jako Mackie Majcher)</td><td class="calendar-table__body--place"><a href="https://teatrvariete.pl/repertuar/" target="_blank">Teatr Variete w Krakowie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>14, godz. 18.00</td><td class="calendar-table__body--title">OPERA ZA TRZY GROSZE (jako Mackie Majcher)</td><td class="calendar-table__body--place"><a href="https://teatrvariete.pl/repertuar/" target="_blank">Teatr Variete w Krakowie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>15, godz. 17.30</td><td class="calendar-table__body--title">OPERA ZA TRZY GROSZE (jako Mackie Majcher)</td><td class="calendar-table__body--place"><a href="https://teatrvariete.pl/repertuar/" target="_blank">Teatr Variete w Krakowie</a></td></tr>

                        <tr class="calendar-table__body--event odd"><td>20, godz. 19.00</td><td class="calendar-table__body--title">ROCK OF AGES</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>21, godz. 15.00</td><td class="calendar-table__body--title">ROCK OF AGES</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>21, godz. 19.00</td><td class="calendar-table__body--title">ROCK OF AGES</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>22, godz. 15.00</td><td class="calendar-table__body--title">ROCK OF AGES</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>

                        <tr class="calendar-table__body--event odd"><td>26, godz. 19.00</td><td class="calendar-table__body--title">CZAROWNICE Z EASTWICK</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>27, godz. 19.00</td><td class="calendar-table__body--title">CZAROWNICE Z EASTWICK</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>28, godz. 15.00</td><td class="calendar-table__body--title">CZAROWNICE Z EASTWICK</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>28, godz. 19.00</td><td class="calendar-table__body--title">CZAROWNICE Z EASTWICK</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>29, godz. 15.00</td><td class="calendar-table__body--title">CZAROWNICE Z EASTWICK</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>29, godz. 19.00</td><td class="calendar-table__body--title">CZAROWNICE Z EASTWICK</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                    </tbody>
                </table>

                <figure class="calendar-figure">
                    <img class="calendar-figure--image"src="images/spektakle/rodzina/Karol_Drozd_Rodzina_Addamsow.jpg" alt="Rodzina ADDAMSÓW" />
                        <figcaption class="calendar-figure--caption">Teatr Syrena w Warszawie</figcaption>
                </figure>

                <table class="calendar-table">
                    <tbody class="calendar-table__body">
                        <tr class="calendar-table__body--mounth"><th>Kwiecień 2020</th></tr>
                        <tr class="calendar-table__body--event odd"><td>4, godz. 15.00</td><td class="calendar-table__body--title">RODZINA ADDAMSÓW</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>4, godz. 19.00</td><td class="calendar-table__body--title">RODZINA ADDAMSÓW</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>5, godz. 15.00</td><td class="calendar-table__body--title">RODZINA ADDAMSÓW</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>5, godz. 19.00</td><td class="calendar-table__body--title">RODZINA ADDAMSÓW</td><td class="calendar-table__body--place"><a href="http://teatrsyrena.pl/" target="_blank">Teatr Syrena w Warszawie</a></td></tr>

                        <tr class="calendar-table__body--event odd"><td>25, godz. 19.00</td><td class="calendar-table__body--title">Sunset Boulevard - PREMIERA</td><td class="calendar-table__body--place"><a href="http://www.opera.bydgoszcz.pl/" target="_blank">Opera Nova w Bydgoszczy</a></td></tr>
                        <tr class="calendar-table__body--event odd"><td>26, godz. 18.00</td><td class="calendar-table__body--title">Sunset Boulevard - II PREMIERA</td><td class="calendar-table__body--place"><a href="http://www.opera.bydgoszcz.pl/" target="_blank">Opera Nova w Bydgoszczy</a></td></tr>
                    </tbody>
                </table>

                {/*<figure class="calendar-figure">*/}
                {/*    <img class="calendar-figure--image"src="images/spektakle/sunset_blvd_baner.jpg" alt="Sunset blvd baner" />*/}
                {/*        <figcaption class="calendar-figure--caption">Opera Nova w Bydgoszczy</figcaption>*/}
                {/*</figure>*/}

                {/*<figure class="calendar-figure">*/}
                {/*    <img class="calendar-figure--image"src="images/spektakle/footloose/Karol_Drozd_Footloose_1.jpg" alt="Karol Drozd FOOTLOOSE" />*/}
                {/*    <figcaption class="calendar-figure--caption">Teatr Muzyczny w Poznaniu</figcaption>*/}
                {/*</figure>*/}


                {/*<figure class="calendar-figure">*/}
                {/*    <img class="calendar-figure--image"src="images/Karol_drozd_Opera_za_trzy_grosze.jpeg" alt="Karol_drozd_Opera_za_trzy_grosze" />*/}
                {/*    <figcaption class="calendar-figure--caption">Fot. Łukasz Popielarczyk</figcaption>*/}
                {/*</figure>*/}


                {/*<figure class="calendar-figure">*/}
                {/*    <img class="calendar-figure--image"src="images/spektakle/footloose/Karol_Drozd_Footloose_2.jpg" alt="Karol Drozd FOOTLOOSE" />*/}
                {/*    <figcaption class="calendar-figure--caption">Teatr Muzyczny w Poznaniu</figcaption>*/}
                {/*</figure>*/}

                {/*<figure class="calendar-figure">*/}
                {/*    <img class="calendar-figure--image"src="images/spektakle/CrazyForYou/Karol-Drozd-Crazy-For-You1.jpg" alt="Karol Drozd - Crazy For You" />*/}
                {/*    <figcaption class="calendar-figure--caption">Fot. © Opera na Zamku</figcaption>*/}
                {/*</figure>*/}
            </div>
        </main>
    )
}