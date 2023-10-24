import React, {useState} from "react";
import {MDBRow} from "mdb-react-ui-kit";


export default function Priests() {
	  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };

	const handleHide = () => {
    setShowAll(false);
  };

  const listItems = [
    "MIKOŁAJ, lata: od 1325",
    "JACOBUS RECTOR, lata: od 1421",
    "MICHAŁ Z WIELKIEGO GŁOWNINA, lata: od 1529",
    "JEŻOWSKI PIOTR, lata: 1651-1671",
    "KĘDZIERSKI, lata: 1671-1697",
    "BICKIEWICZ WALENTY, lata: 1697-1731",
    "GAJOWSKI WAWRZYNIEC, lata: 1731-1735",
    "MASZCZYKOWSKI WOJCIECH, lata: 1735-1770",
    "KOŹLICKI MARCIN, lata: 1770-1776",
    "WITKOWSKI ANDRZEJ, lata: 1776-1815",
    "SMOLNICKI DIONIZY, lata: 1816-1846",
    "KAWKOWSKI WOJCIECH, lata: 1846-1855",
    "JASIŃSKI ANTONI, lata: 1855-1877",
    "KOMER DOMICJAN, lata: 1877-1885",
    "NAWROCKI KONSTANTY, lata: 1885-1892",
    "GIEDROJĆ PIOTR, lata: 1892-1892",
    "KUCEWICZ KAZIMIERZ, lata: 1892-1905",
    "LIBURA MIKOŁAJ, lata: 1905-1910",
    "ADAMEK ADAM, lata: 1910-1919",
    "MAZUR FRANCISZEK, lata: 1919-1920",
    "BOGDARENKO MIKOŁAJ, lata: 1920-1922",
    "WALOCHA ANTONI, lata: 1922-1924",
    "DUDA STEFAN, lata: 1924-1931",
    "AUGUSTYNIK PIOTR, lata: 1931-1937",
    "SMOLARKIEWICZ WŁADYSŁAW, lata: 1937-1939",
    "SZYMCZYK WINCENTY, lata: 1939-1957",
    "PROSZEWSKI STANISŁAW, lata: 1957-1966",
    "MAŃKA TADEUSZ, lata: 1966-1977",
    "JUDA JÓZEF, lata: 1977-1985",
    "BORYCZKA JAN, lata: 1985-1988",
    "RAKOWSKI JANUSZ, lata: 1988-1996",
    "CER ROMAN, lata: od 1996",
  ];

	const visibleItems = showAll ? listItems : listItems.slice(0, 5);

	return (
    <MDBRow className={'m-4 header-text'} id={'priests'}>
      <h1 className="text-center">Kapłani parafii od 1325 roku</h1>
      <ul className="list-group list-group-flush bg-transparent">
        {visibleItems.map((item, index) => (
          <li key={index} className="list-group-item fw-bold h5 bg-transparent my-3">
            {item}
          </li>
        ))}
        {!showAll && (
          <li className="list-group-item fw-bold h5 bg-transparent my-3">
            <button className="btn btn-primary" onClick={handleViewAll}>
              Rozwiń
            </button>
          </li>
        )}
        {showAll && (
          <li className="list-group-item fw-bold h5 bg-transparent my-3">
            <button className="btn btn-primary" onClick={handleHide}>
              Zwiń
            </button>
          </li>
        )}
      </ul>
    </MDBRow>
  );
}