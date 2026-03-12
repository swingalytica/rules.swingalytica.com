export const GROUPS: { de: string; en: string; rules: number[] }[] = [
  {
    de: 'I. Die Grundlagen des Spiels',
    en: 'I. The Basics of the Game',
    rules: [1, 2, 3, 4]
  },
  {
    de: 'II. Spielen der Runde und eines Loches',
    en: 'II. Playing the Round and a Hole',
    rules: [5, 6]
  },
  {
    de: 'III. Spielen des Balls',
    en: 'III. Playing the Ball',
    rules: [7, 8, 9, 10, 11]
  },
  {
    de: 'IV. Sonderregeln für Bunker und Grüns',
    en: 'IV. Special Rules for Bunkers and Greens',
    rules: [12, 13]
  },
  {
    de: 'V. Ball aufnehmen und ins Spiel zurückbringen',
    en: 'V. Lifting and Returning the Ball to Play',
    rules: [14]
  },
  {
    de: 'VI. Straflose Erleichterung',
    en: 'VI. Relief Without Penalty',
    rules: [15, 16]
  },
  {
    de: 'VII. Erleichterung mit Strafe',
    en: 'VII. Relief With Penalty',
    rules: [17, 18, 19]
  },
  {
    de: 'VIII. Vorgehensweise für die Spieler und die Spielleitung bei strittigen Fällen der Regelanwendung',
    en: 'VIII. Procedure for Players and Committee in Case of Disputed Rules Application',
    rules: [20]
  },
  {
    de: 'IX. Andere Spielformen',
    en: 'IX. Other Forms of Play',
    rules: [21, 22, 23, 24]
  },
  { de: 'X. Definitionen', en: 'X. Definitions', rules: [] }
];

export const PREFIX = { de: 'Regel', en: 'Rule' } as const;
