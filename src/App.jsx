// IMPORT
import { useState } from 'react'
import './App.css'
import Container from './components/Container';
import Header from './components/Header';
import Calendar from './components/Calendar';
// _____________________________________

// DATI
//DATI
const source = [
  {
    "id": 0,
    "type": "image",
    "icon": "ico-neve",
    "title": "gremlins",
    "url": "img/gremlins.gif"
  },
  {
    "id": 1,
    "type": "image",
    "icon": "ico-albero",
    "title": "friends",
    "url": "img/friends.gif"

  },
  {
    "id": 2,
    "type": "text",
    "icon": "ico-fiocco",
    "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
  },
  {
    "id": 3,
    "type": "image",
    "icon": "ico-stella",
    "title": "home alone",
    "url": "img/homealone.gif"
  },
  {
    "id": 4,
    "type": "text",
    "icon": "ico-omino",
    "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
  },
  {
    "id": 5,
    "type": "image",
    "icon": "ico-stella",
    "title": "Griffin",
    "url": "img/griffin.gif"
  },
  {
    "id": 6,
    "type": "text",
    "icon": "ico-pupazzo",
    "text": "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?"
  },
  {
    "id": 7,
    "type": "text",
    "icon": "ico-caramella",
    "text": "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?"
  },
  {
    "id": 8,
    "type": "image",
    "icon": "ico-calza",
    "title": "Skeleton",
    "url": "img/skeleton.gif"
  },
  {
    "id": 9,
    "type": "text",
    "icon": "ico-pupazzo",
    "text": "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate"
  },
  {
    "id": 10,
    "type": "text",
    "icon": "ico-fiocco",
    "text": "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643."
  },
  {
    "id": 11,
    "type": "text",
    "icon": "ico-fiocco",
    "text": "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi."
  },
  {
    "id": 12,
    "type": "text",
    "icon": "ico-calza",
    "text": "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883"
  },
  {
    "id": 13,
    "type": "image",
    "icon": "ico-stella",
    "title": "Nightmare Before Christmas",
    "url": "img/nightmare.gif"
  },
  {
    "id": 14,
    "type": "text",
    "icon": "ico-stella",
    "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
  },
  {
    "id": 15,
    "type": "image",
    "icon": "ico-calza",
    "title": "The Grinch",
    "url": "img/grinch.gif"
  },
  {
    "id": 16,
    "type": "text",
    "icon": "ico-caramella",
    "text": "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi"
  },
  {
    "id": 17,
    "type": "text",
    "icon": "ico-omino",
    "text": "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni"
  },
  {
    "id": 18,
    "type": "text",
    "icon": "ico-caramella",
    "text": "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza"
  },
  {
    "id": 19,
    "type": "text",
    "icon": "ico-calza",
    "text": "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari"
  },
  {
    "id": 20,
    "type": "image",
    "icon": "ico-caramella",
    "title": "Una poltrona per due",
    "url": "img/poltrona.gif"
  },
  {
    "id": 21,
    "type": "image",
    "icon": "ico-caramella",
    "title": "Spongebob",
    "url": "img/spongebob.gif"
  },
  {
    "id": 22,
    "type": "image",
    "icon": "ico-neve",
    "title": "Elf",
    "url": "img/elf.gif"
  },
  {
    "id": 23,
    "type": "text",
    "icon": "ico-neve",
    "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
  },
  {
    "id": 24,
    "type": "image",
    "icon": "ico-caramella",
    "title": "Carlton dancing",
    "url": "img/dance.gif"
  }
];

// COMPONENT
function App() {
  return (
    <Container>
      <Header />
      <Calendar source={source} />
    </Container>
  );
}

export default App
