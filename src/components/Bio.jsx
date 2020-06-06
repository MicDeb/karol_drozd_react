import React from "react";
import { Figure } from './shared/Figure'

export function Bio() {
    const roles= [
        {
            title: 'Rock of Ages',
            role: 'Drew Boley',
            director: 'Jacek Mikołajczyk',
            theater: 'Teatr Syrena w Warszawie',
        },
        {
            title: 'Crazy for You',
            role: 'Bobby Child',
            director: 'Jerzy Jan Połoński',
            theater: 'Opera na Zamku w Szczecinie',
        },
        {
            title: 'Footloose',
            role: 'Ren McCormack',
            director: 'Jerzy Jan Połoński',
            theater: 'Teatr Muzyczny w Poznaniu',
        },
        {
            title: 'Rodzina Addamsów',
            role: 'Lucas Beineke',
            director: 'Jacek Mikołajczyk',
            theater: 'Teatr Syrena w Warszawie',
        },
        {
            title: 'Opera za Trzy Grosze',
            role: 'Mackie Majcher, Filch',
            director: 'Jerzy Jan Połoński',
            theater: 'Teatr Variete w Krakowie',
        },
        {
            title: 'Czarownice z Eastwick',
            role: 'Michael Spofford',
            director: 'Jacek Mikołajczyk',
            theater: 'Teatr Syrena w Warszawie',
        },
        {
            title: 'Grimm',
            role: 'Grimm',
            director: 'Neva Howard',
            theater: 'Uckermarkische Buhnen Schwedt',
        },
        {
            title: 'Love Story',
            role: 'Oliver Barrett IV',
            director: 'Zbigniew Kułagowski',
            theater: 'Nowy Teatr w Słupsku',
        },
        {
            title: 'Fame',
            role: 'Nick Piazza',
            director: 'Miłosz Gałaj',
            theater: 'Teatr Palladium w Warszawie',
        },
    ];

    return (
        <main className="main">
            <h2>KAROL DROZD - BIOGRAFIA</h2>
            <div className="main__container biography">
                <article className="biography-article">
                    <h3 className="biography-article__name">BIOGRAFIA</h3>

                    <Figure
                        figureClass='biography-article__figure'
                        imageClass='biography-article__figure--image'
                        imageSrc={require('../images/poza/Karol-Drozd-poza1.jpg')}
                        imageAlt='Karol Drozd'
                    />

                    <p className="biography-article--education paragraph">
                        Absolwent <strong>Akademii Muzycznej im. Stanisława Moniuszki w Gdańsku</strong> na specjalności
                        musical.
                        Swój warsztat wokalny kształcił pod okiem prof. zw. dra hab. Ryszarda Minkiewicza.
                        Studia muzyczne pierwszego stopnia ukończył z wyróżnieniem.
                    </p>
                    <p className="biography-article--jobs paragraph">
                        Aktor scen musicalowych w Polsce i za granicą.
                        Doświadczenie sceniczne zdobywa biorąc udział w musicalach i spektaklach muzycznych
                        takich jak:
                    </p>
                    <ul className="biography-article--jobs-list">
                        {roles.map((role) => (
                            <li key={role.title} className="biography-article--jobs-list--item">
                                - “{role.title}” – {role.role} (reż. {role.director}), {role.theater}
                            </li>
                        ))}
                    </ul>

                    <Figure
                        figureClass='biography-article__figure'
                        imageClass='biography-article__figure--image'
                        imageSrc={require('../images/poza/Karol-Drozd-poza3.jpg')}
                        imageAlt='Karol Drozd'
                    />

                    <p className="biography-article--awards paragraph">
                        Zdobywca najwyższej klasy tanecznej w Polsce w tańcach latynoamerykańskich i standardowych.
                        Trzykrotny Mistrz Polski i dwukrotny półfinalista Mistrzostw Świata z formacją latynoamerykańską
                        Takt Chadek Chełm.
                        Współpracował z choraografami takimi jak:
                        <strong>Jarosław Staniek</strong>, <strong>Ewelina Adamska-Porczyk</strong>,
                        <strong>Joanna Semeńczuk</strong>, <strong>Neva Howard.</strong>
                    </p>
                    <p className="biography-article--another paragraph">
                        Od 2015 roku instruktor tańca i choreograf w fundacji <strong>MUSICAMP</strong>,
                        której celem jest kształcenie młodych talentów poprzez organizowanie
                        warsztatów musicalowych oraz koncertów tym samym rozpowszechniając musical w Polsce.
                    </p>

                    <Figure
                        figureClass='biography-article__figure'
                        imageClass='biography-article__figure--image'
                        imageSrc={require('../images/poza/Karol-Drozd-poza2.jpg')}
                        imageAlt='Karol Drozd'
                    />

                </article>
            </div>
        </main>
    )
}