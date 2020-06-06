import React from 'react';

export function CalendarTable() {
    return (
        <div className="repertuar kalendarium">
            <div className="dzien-miesiaca spektakl-niedostepny">
                <span>01.06</span>
                <br />
                poniedziałek
            </div>

            <div className="row spektakl spektakl-niedostepny ">
                <div className="termin">
                    godz. 10:00
                    <br />
                    <span className="light">
                        Litewska 3
                    </span>
                </div>

                <div className=" tytul">
                    <a href="http://www.teatrsyrena.pl/spektakle/18/dzieci-z-bullerbyn-br">
                        Dzieci z Bullerbyn<br />
                    </a>
                    <p>spektakl odwołany</p>
                </div>

                <div className=" ikony-cena">
                    <div className="col-xs-6 ikony">
                        <img
                            src="/images/layout/ikony/ico_oko.png"
                            className="gray"
                            alt="Dostosowany dla osób z dysfunkcją wzroku"
                            title="Dostosowany dla osób z dysfunkcją wzroku"
                        />
                        <img
                            src="/images/layout/ikony/ico_audio.png"
                            className="gray"
                            alt="Dostosowany dla osób z dysfunkcją słuchu"
                            title="Dostosowany dla osób z dysfunkcją słuchu" />
                    </div>
                    <br />
                    40&nbsp;-&nbsp;45&nbsp;zł
                </div>

                <div className=" kup-bilet">
                    <div><span className="light">brak miejsc</span></div>
                    <div><span className="light">brak wejściówek</span></div>
                </div>
            </div>

            <div className="row kreska">
                <div className="col-md-offset-1 col-xs-9">
                    <hr />
                </div>
            </div>
        </div>
    );
}