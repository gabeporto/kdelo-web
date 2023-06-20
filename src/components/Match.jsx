import React from 'react';
import GPSEX_PLAYER_PHOTO from '../images/players/GPSEX.png';
import CORBA_PLAYER_PHOTO from '../images/players/CORBA.png';
import PERKS_PLAYER_PHOTO from '../images/players/PERKS.png';
import DEFAULT_PLAYER_PHOTO from '../images/players/DEFAULT.png';
import TARIQUE_PLAYER_PHOTO from '../images/players/TARIQUE.png';
import IGR_PLAYER_PHOTO from '../images/players/IGR.png';
import GALBAT_PLAYER_PHOTO from '../images/players/GALBAT.png';
import BERDZ_PLAYER_PHOTO from '../images/players/BERDINADIZ.png';
import JPDR_PLAYER_PHOTO from '../images/players/JPDR.png';

function getPlayerPhoto(id) {
    switch (id) {
      case 1:
        return GPSEX_PLAYER_PHOTO;
      case 2:
        return CORBA_PLAYER_PHOTO;
      case 3:
        return PERKS_PLAYER_PHOTO;
      case 4:
        return DEFAULT_PLAYER_PHOTO;
      case 5:
        return TARIQUE_PLAYER_PHOTO;
      case 6:
        return IGR_PLAYER_PHOTO;
      case 7:
        return GALBAT_PLAYER_PHOTO;
      case 8:
        return BERDZ_PLAYER_PHOTO;
      case 9:
        return JPDR_PLAYER_PHOTO;
      default:
        return '';
    }
}

export default function Match() {
    
  const KDELO_TEAM = 'KDÉLO TEAM'
  const matches = [
    {
    id: 1,
    time1: KDELO_TEAM,
    time2: 'Time B',
    placarA: 16,
    placarB: 1,
    placar: '16 - 01',
    jogadores: [
      { id: 1, nome: 'Jogador 1', foto: 'caminho/para/foto2.jpg' },
      { id: 2, nome: 'Jogador 2', foto: 'caminho/para/foto2.jpg' },
      { id: 3, nome: 'Jogador 3', foto: 'caminho/para/foto3.jpg' },
      { id: 4, nome: 'Jogador 4', foto: 'caminho/para/foto4.jpg' },
      { id: 5, nome: 'Jogador 5', foto: 'caminho/para/foto5.jpg' },
    ],
    data: '20 de Junho, 2023',
    horario: '19:00',
    local: 'Mirage',
    },
    {
    id: 2,
    time1: KDELO_TEAM,
    time2: 'Time B',
    placarA: 9,
    placarB: 16,
    placar: '09 - 16',
    jogadores: [
      { id: 2, nome: 'Jogador 1', foto: 'caminho/para/foto1.jpg' },
      { id: 4, nome: 'Jogador 2', foto: 'caminho/para/foto2.jpg' },
      { id: 5, nome: 'Jogador 3', foto: 'caminho/para/foto3.jpg' },
      { id: 6, nome: 'Jogador 4', foto: 'caminho/para/foto4.jpg' },
      { id: 8, nome: 'Jogador 5', foto: 'caminho/para/foto5.jpg' },
    ],
    data: '20 de Junho, 2023',
    horario: '18:00',
    local: 'Dust II',
    },
    {
    id: 3,
    time1: KDELO_TEAM,
    time2: 'Time B',
    placarA: 15,
    placarB: 15,
    placar: '15 - 15',
    jogadores: [
        { id: 1, nome: 'Jogador 1', foto: 'caminho/para/foto1.jpg' },
        { id: 2, nome: 'Jogador 2', foto: 'caminho/para/foto2.jpg' },
        { id: 7, nome: 'Jogador 3', foto: 'caminho/para/foto3.jpg' },
        { id: 8, nome: 'Jogador 4', foto: 'caminho/para/foto4.jpg' },
        { id: 9, nome: 'Jogador 5', foto: 'caminho/para/foto5.jpg' },
    ],
    data: '20 de Junho, 2023',
    horario: '14:00',
    local: 'Inferno',
    },
    {
    id: 1,
    time1: KDELO_TEAM,
    time2: 'Time B',
    placarA: 16,
    placarB: 1,
    placar: '16 - 01',
    jogadores: [
        { id: 1, nome: 'Jogador 1', foto: 'caminho/para/foto2.jpg' },
        { id: 2, nome: 'Jogador 2', foto: 'caminho/para/foto2.jpg' },
        { id: 3, nome: 'Jogador 3', foto: 'caminho/para/foto3.jpg' },
        { id: 4, nome: 'Jogador 4', foto: 'caminho/para/foto4.jpg' },
        { id: 5, nome: 'Jogador 5', foto: 'caminho/para/foto5.jpg' },
    ],
    data: '20 de Junho, 2023',
    horario: '19:00',
    local: 'Mirage',
    },
    {
    id: 2,
    time1: KDELO_TEAM,
    time2: 'Time B',
    placarA: 16,
    placarB: 6,
    placar: '16 - 06',
    jogadores: [
        { id: 2, nome: 'Jogador 1', foto: 'caminho/para/foto1.jpg' },
        { id: 4, nome: 'Jogador 2', foto: 'caminho/para/foto2.jpg' },
        { id: 5, nome: 'Jogador 3', foto: 'caminho/para/foto3.jpg' },
        { id: 6, nome: 'Jogador 4', foto: 'caminho/para/foto4.jpg' },
        { id: 8, nome: 'Jogador 5', foto: 'caminho/para/foto5.jpg' },
    ],
    data: '20 de Junho, 2023',
    horario: '18:00',
    local: 'Dust II',
    },
    {
    id: 3,
    time1: KDELO_TEAM,
    time2: 'Time B',
    placarA: 14,
    placarB: 16,
    placar: '14 - 16',
    jogadores: [
        { id: 1, nome: 'Jogador 1', foto: 'caminho/para/foto1.jpg' },
        { id: 2, nome: 'Jogador 2', foto: 'caminho/para/foto2.jpg' },
        { id: 7, nome: 'Jogador 3', foto: 'caminho/para/foto3.jpg' },
        { id: 8, nome: 'Jogador 4', foto: 'caminho/para/foto4.jpg' },
        { id: 9, nome: 'Jogador 5', foto: 'caminho/para/foto5.jpg' },
    ],
    data: '20 de Junho, 2023',
    horario: '14:00',
    local: 'Inferno',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Partidas de CS:GO</h1>
      <div className="grid grid-cols-1 gap-4 w-full">

      {matches.map((match) => {
        const empate = match.placarA === match.placarB;
        const vitoriaTimeA = match.placarA > match.placarB;
        const derrotaTimeA = match.placarA < match.placarB;

        let cardClassName = "bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-start md:justify-between";
        let placarClassName = "text-4xl font-bold mb-2 md:mb-0 md:mr-6 md:flex-shrink-0";
        let destaqueClassName = "";

        if (empate) {
            destaqueClassName = "bg-gradient-to-r from-yellow-200 to-yellow-0";
        } else if (vitoriaTimeA) {
            destaqueClassName = "bg-gradient-to-r from-green-200 to-green-0";
        } else if (derrotaTimeA) {
            destaqueClassName = "bg-gradient-to-r from-red-200 to-red-0";
        }

        return (
            <div
            key={match.id}
            className={`${cardClassName} ${destaqueClassName}`}
            >
            <div className="flex flex-col md:flex-row md:items-center"> <div className={`${placarClassName}`}>
                {match.placar}
                </div>
                <div className="text-gray-600 md:ml-6 md:mt-0">
                <div>{match.data}</div>
                <div>{match.horario}</div>
                <div>{match.local}</div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center md:flex-grow">
            {match.jogadores.map((jogador) => (
                <div
                key={jogador.id}
                className="w-20 h-20 bg-gray-300 rounded-full mx-2 mb-2"
                style={{
                    backgroundImage: `url(${getPlayerPhoto(jogador.id)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
            ))}
            </div>
            </div>
        );
        })}

        
      </div>
    </div>
  );
};


