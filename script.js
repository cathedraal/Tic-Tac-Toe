const values = [

    // СЕТКА Маленькое поле
    ["x1-y3", "x2-y3", "x3-y3",
        "x1-y2", "x2-y2", "x3-y2",
        "x1-y1", "x2-y1", "x3-y1"],

    // СЕТКА Среднее поле 
    ["x1-y4", "x2-y4", "x3-y4", "x4-y4",
        "x1-y3", "x2-y3", "x3-y3", "x4-y3",
        "x1-y2", "x2-y2", "x3-y2", "x4-y2",
        "x1-y1", "x2-y1", "x3-y1", "x4-y1"],

    // СЕТКА Большое поле (5x5)
    ["x1-y5", "x2-y5", "x3-y5", "x4-y5", "x5-y5",
        "x1-y4", "x2-y4", "x3-y4", "x4-y4", "x5-y4",
        "x1-y3", "x2-y3", "x3-y3", "x4-y3", "x5-y3",
        "x1-y2", "x2-y2", "x3-y2", "x4-y2", "x5-y2",
        "x1-y1", "x2-y1", "x3-y1", "x4-y1", "x5-y1"],

    // СЕТКА Огромное поле (7x7)
    ["x1-y7", "x2-y7", "x3-y7", "x4-y7", "x5-y7", "x6-y7", "x7-y7",
        "x1-y6", "x2-y6", "x3-y6", "x4-y6", "x5-y6", "x6-y6", "x7-y6",
        "x1-y5", "x2-y5", "x3-y5", "x4-y5", "x5-y5", "x6-y5", "x7-y5",
        "x1-y4", "x2-y4", "x3-y4", "x4-y4", "x5-y4", "x6-y4", "x7-y4",
        "x1-y3", "x2-y3", "x3-y3", "x4-y3", "x5-y3", "x6-y3", "x7-y3",
        "x1-y2", "x2-y2", "x3-y2", "x4-y2", "x5-y2", "x6-y2", "x7-y2",
        "x1-y1", "x2-y1", "x3-y1", "x4-y1", "x5-y1", "x6-y1", "x7-y1"]
];

const winMoves = [

    // ПОБЕДА Маленькое поле (3x3)
    [
        ["x1-y3", "x1-y2", "x1-y1"],
        ["x2-y3", "x2-y2", "x2-y1"],
        ["x3-y3", "x3-y2", "x3-y1"],

        ["x1-y3", "x2-y3", "x3-y3"],
        ["x1-y2", "x2-y2", "x3-y2"],
        ["x1-y1", "x2-y1", "x3-y1"],

        ["x1-y3", "x2-y2", "x3-y1"],
        ["x3-y3", "x2-y2", "x1-y1"]
    ],

    // ПОБЕДА Среднее поле (4x4)
    [
        ["x1-y4", "x2-y4", "x3-y4", "x4-y4"],
        ["x1-y3", "x2-y3", "x3-y3", "x4-y3"],
        ["x1-y2", "x2-y2", "x3-y2", "x4-y2"],
        ["x1-y1", "x2-y1", "x3-y1", "x4-y1"],

        ["x1-y4", "x1-y3", "x1-y2", "x1-y1"],
        ["x2-y4", "x2-y3", "x2-y2", "x2-y1"],
        ["x3-y4", "x3-y3", "x3-y2", "x3-y1"],
        ["x4-y4", "x4-y3", "x4-y2", "x4-y1"],

        ["x1-y4", "x2-y3", "x3-y2", "x4-y1"],
        ["x4-y4", "x3-y3", "x2-y2", "x1-y1"]
    ],

    // ПОБЕДА Большое поле (5x5)
    [
        ["x1-y5", "x2-y5", "x3-y5", "x4-y5", "x5-y5"],
        ["x1-y4", "x2-y4", "x3-y4", "x4-y4", "x5-y4"],
        ["x1-y3", "x2-y3", "x3-y3", "x4-y3", "x5-y3"],
        ["x1-y2", "x2-y2", "x3-y2", "x4-y2", "x5-y2"],
        ["x1-y1", "x2-y1", "x3-y1", "x4-y1", "x5-y1"],

        ["x1-y5", "x1-y4", "x1-y3", "x1-y2", "x1-y1"],
        ["x2-y5", "x2-y4", "x2-y3", "x2-y2", "x2-y1"],
        ["x3-y5", "x3-y4", "x3-y3", "x3-y2", "x3-y1"],
        ["x4-y5", "x4-y4", "x4-y3", "x4-y2", "x4-y1"],
        ["x5-y5", "x5-y4", "x5-y3", "x5-y2", "x5-y1"],

        ["x1-y5", "x2-y4", "x3-y3", "x4-y2", "x5-y1"],
        ["x5-y5", "x4-y4", "x3-y3", "x2-y2", "x1-y1"]
    ],

    // ПОБЕДА Огромное поле (7x7)
    [
        // Горизонтали
        ["x1-y7", "x2-y7", "x3-y7", "x4-y7", "x5-y7", "x6-y7", "x7-y7"],
        ["x1-y6", "x2-y6", "x3-y6", "x4-y6", "x5-y6", "x6-y6", "x7-y6"],
        ["x1-y5", "x2-y5", "x3-y5", "x4-y5", "x5-y5", "x6-y5", "x7-y5"],
        ["x1-y4", "x2-y4", "x3-y4", "x4-y4", "x5-y4", "x6-y4", "x7-y4"],
        ["x1-y3", "x2-y3", "x3-y3", "x4-y3", "x5-y3", "x6-y3", "x7-y3"],
        ["x1-y2", "x2-y2", "x3-y2", "x4-y2", "x5-y2", "x6-y2", "x7-y2"],
        ["x1-y1", "x2-y1", "x3-y1", "x4-y1", "x5-y1", "x6-y1", "x7-y1"],

        // Вертикали
        ["x1-y7", "x1-y6", "x1-y5", "x1-y4", "x1-y3", "x1-y2", "x1-y1"],
        ["x2-y7", "x2-y6", "x2-y5", "x2-y4", "x2-y3", "x2-y2", "x2-y1"],
        ["x3-y7", "x3-y6", "x3-y5", "x3-y4", "x3-y3", "x3-y2", "x3-y1"],
        ["x4-y7", "x4-y6", "x4-y5", "x4-y4", "x4-y3", "x4-y2", "x4-y1"],
        ["x5-y7", "x5-y6", "x5-y5", "x5-y4", "x5-y3", "x5-y2", "x5-y1"],
        ["x6-y7", "x6-y6", "x6-y5", "x6-y4", "x6-y3", "x6-y2", "x6-y1"],
        ["x7-y7", "x7-y6", "x7-y5", "x7-y4", "x7-y3", "x7-y2", "x7-y1"],

        // Диагонали
        ["x1-y7", "x2-y6", "x3-y5", "x4-y4", "x5-y3", "x6-y2", "x7-y1"],
        ["x7-y7", "x6-y6", "x5-y5", "x4-y4", "x3-y3", "x2-y2", "x1-y1"]
    ]
];

const languages = {
    ru: {
        lobby: {
            title: "Крестики:Нолики", 
            subtitle: "Быстрые поединки на внимательность и тактику.", 
            title2: "Придумай никнейм", 
            inputfield: "Напиши что-нибудь...",
            button: "Погнали",
            error: 'Игрок уже существует.',
            soundOn: "Звук",
            soundOff: "Без звука"
        },
        menu: {
            header: {
                title: "Привет",
                subtitle: "Подбери под себя подходящие условия для комфортной игры.",
            },
            leftContainer: {
                side: { 
                    title: "Сторона"
                }, 
                secondNick: {
                    title: "Добавить никнейм второму игроку?",
                    error1: "Игрок уже существует.",
                    error2: "Не длиннее 12 символов.",
                    added: "Второй игрок добавлен",
                    inputfield: "Напиши что-нибудь...",
                    button: "Добавить"
                }
            },
            middleContainer: {
                level: {
                    title: "Уровень сложности",
                    buttons: {
                        aiLevel: {
                            cover: "ИИ",
                            easyAi: "Лёгкий ИИ",
                            hardAi: "Сложный ИИ"
                        },
                        twoPlayers: "2 игрока"
                    }
                },

                format: {
                    title: "Сетка"
                }
            },
            rightContainer: {
                title1: "Кол-во раундов",
                title2: "Переключать очки?",
                buttons: {
                    rounds: {
                        quickGame: "На разогрев (6)",
                        classics: "Классика (16)",
                        longGame: "Бесконечная игра"
                    },
                    gameMode: {
                        yes: "Да",
                        no: "Нет"
                    }
                }
            },
            footer: {
                startGame: "Начать игру",
                quitGame: "Выйти"
            }
        },
        field: {
            statsRound: {
                rounds: "Раунд",
                level: "Уровень",
                levelInfo: "ИИ"
            },
            aiThinks: "ИИ думает"
        },

        roundResults: {
            title: {
                win: "Победа!",
                loss: "Поражение",
                draw: "Ничья",
                timeOut: "Тайм-аут"
            },
            buttons: {
                nextRound: "Следующий раунд",
                changeFormat: "Поменять условия",
                checkResults: "Посмотреть итоги",
                quit: "Выйти в меню",

                resumeGame: "Начать заново"
            },
        },

        changeFormat: {
            header: {
                title: "Плохая игра, ",
                subtitle: "Здесь можно легко поменять условия для более комфортных раундов."
            },
            level: {
                title: "Поменять уровень",
                buttons: {
                    aiLevel: {
                        cover: "ИИ",
                        easyAi: "Лёгкий ИИ",
                        hardAi: "Сложный ИИ"
                    },
                    twoPlayers: "2 игрока"
                }
            },
            format: "Поменять сетку", 
            footer: {
                button: "Продолжить"
            }
        },

        checkResults: {
            header: {
                title: "Довольны результатом?",
                subtitle: "Вы можете им поделиться со своими друзьями."
            },
            leftContainer: {
                title: "Статистика",
                wins: "Побед",
                rounds: "Раундов",
                button: "Сравняться с другими"
            },
        },

        stats: {
            header: {
                title: "Статистика игроков",
                subtitle: "Здесь высвечивается статистика игроков, игравших здесь."
            },
            row1: "Игрок",
            row2: "Побед",
            row3: "Раундов",
            secondPlayer: "(второй игрок)",
            firstPlayer: "(вы)",
            button: "Назад"
        }
    },

    en: {
        lobby: {
            title: "Tic:Tac:Toe", 
            subtitle: "Quick duels on attentiveness and tactics.", 
            title2: "Choose a nickname", 
            inputfield: "Write anything...",
            button: "Start",
            error: 'Player exists.',
            soundOn: "Sound on",
            soundOff: "Sound off"
        },
        menu: {
            header: {
                title: "Hello, ",
                subtitle: "Choose the right conditions for perfect game.",
            },
            leftContainer: {
                side: { 
                    title: "Side"
                }, 
                secondNick: {
                    title: "Wanna add nick to player 2?",
                    inputfield: "Write anything...",
                    error1: "Player exists.",
                    error2: "Max. 12 symbols.",
                    added: "Second player added",
                    button: "Add"
                }
            },
            middleContainer: {
                level: {
                    title: "Mode",
                    buttons: {
                        aiLevel: {
                            cover: "AI",
                            easyAi: "Easy AI",
                            hardAi: "Strong AI"
                        },
                        twoPlayers: "2 players"
                    }
                },

                format: {
                    title: "Grid"
                }
            },
            rightContainer: {
                title1: "Number of rounds",
                title2: "Switch Game?",
                buttons: {
                    rounds: {
                        quickGame: "Quick Game (6)",
                        classics: "Long Game (16)",
                        longGame: "Infinity Game"
                    },
                    gameMode: {
                        yes: "Yes",
                        no: "No"
                    }
                }
            },
            footer: {
                startGame: "Start",
                quitGame: "Menu"
            }
        },
        field: {
            statsRound: {
                rounds: "Round",
                level: "Mode",
                levelInfo: "AI"
            },
            aiThinks: "AI Thinks"
        },

        roundResults: {
            title: {
                win: "Win!",
                loss: "Loss",
                draw: "Draw",
                timeOut: "Time-Out"
            },
            buttons: {
                nextRound: "Next round",
                changeFormat: "Change conditions",
                checkResults: "Check results",
                quit: "Menu",

                resumeGame: "Resume game"
            },
        },

        changeFormat: {
            header: {
                title: "Too difficult, ",
                subtitle: "You can change conditions here to play more comfortable."
            },
            // level: {
            //     title: "Modus ändern",
            //     buttons: {
            //         aiLevel: {
            //             cover: "KI",
            //             easyAi: "Entspannte KI",
            //             hardAi: "Schwierige KI"
            //         },
            //         twoPlayers: "2 Spieler"
            //     }
            // },
            format: "Change format", 
            footer: {
                button: "Resume"
            }
        },

        checkResults: {
            header: {
                title: "Feeling happy with your results?",
                subtitle: "You can share your stats with friends."
            },
            leftContainer: {
                title: "Stats",
                wins: "Wins",
                rounds: "Rounds",
                button: "Show others"
            },
        },

        stats: {
            header: {
                title: "Other players' stats",
                subtitle: "You can see here other players' stats who have already."
            },
            row1: "Player",
            row2: "Wins",
            row3: "Rounds",
            secondPlayer: "(second player)",
            firstPlayer: "(you)",
            button: "Back"
        }
    },

    de: {
        lobby: {
            title: "Tic:Tac:Toe", 
            subtitle: "Schnelle Kämpfe für Achtsamkeit und Taktik.", 
            title2: "Denke ein Nickname aus", 
            inputfield: "Schreibe etwas...",
            button: "Starten",
            error: 'Spieler existiert.',
            soundOn: "Laut",
            soundOff: "Stumm"
        },
        menu: {
            header: {
                title: "Hallo",
                subtitle: "Wähle die richtigen Voraussetzungen für ein angenehmes Spiel.",
            },
            leftContainer: {
                side: { 
                    title: "Seite"
                }, 
                secondNick: {
                    title: "Ein Nickname für zweiten Spieler?",
                    inputfield: "Schreibe etwas...",
                    error1: "Spieler existiert.",
                    error2: "Nicht länger als 12 Symbole.",
                    added: "Spieler 2 hinzugefügt",
                    button: "Hinzufügen"
                }
            },
            middleContainer: {
                level: {
                    title: "Modus",
                    buttons: {
                        aiLevel: {
                            cover: "KI",
                            easyAi: "Leichte KI",
                            hardAi: "Schwierige KI"
                        },
                        twoPlayers: "2 Spieler"
                    }
                },

                format: {
                    title: "Netz"
                }
            },
            rightContainer: {
                title1: "Anzahl der Runden",
                title2: "Switch Game?",
                buttons: {
                    rounds: {
                        quickGame: "Schnelles Spiel (6)",
                        classics: "Langes Spiel (16)",
                        longGame: "Endloses Spiel"
                    },
                    gameMode: {
                        yes: "Ja",
                        no: "Nein"
                    }
                }
            },
            footer: {
                startGame: "Spiel starten",
                quitGame: "Menü"
            }
        },
        field: {
            statsRound: {
                rounds: "Runde",
                level: "Modus",
                levelInfo: "KI"
            },
            aiThinks: "KI denkt"
        },

        roundResults: {
            title: {
                win: "Sieg!",
                loss: "Niederlage",
                draw: "Unentsch",
                timeOut: "Time-Out"
            },
            buttons: {
                nextRound: "Nächste Runde",
                changeFormat: "Bedingungen ändern",
                checkResults: "Ergebnis anschauen",
                quit: "Menü",

                resumeGame: "Neustart"
            },
        },

        changeFormat: {
            header: {
                title: "Geht in die Hose, ",
                subtitle: "Hier kannst du die Bedingungen für angenehmere Runden leicht ändern."
            },
            // level: {
            //     title: "Modus ändern",
            //     buttons: {
            //         aiLevel: {
            //             cover: "KI",
            //             easyAi: "Entspannte KI",
            //             hardAi: "Schwierige KI"
            //         },
            //         twoPlayers: "2 Spieler"
            //     }
            // },
            format: "Netz ändern", 
            footer: {
                button: "Weiter"
            }
        },

        checkResults: {
            header: {
                title: "Zufrieden mit dem Ergebnis?",
                subtitle: "Du kannst es mit deinen Freunden teilen."
            },
            leftContainer: {
                title: "Statistik",
                wins: "Gewinne",
                rounds: "Runden",
                button: "Sehe anderen"
            },
        },

        stats: {
            header: {
                title: "Statistik von anderen Spielern",
                subtitle: "Hier werden die Statistiken der Spieler angezeigt, die hier schon gespielt haben."
            },
            row1: "Spieler",
            row2: "Gewinne",
            row3: "Runden",
            secondPlayer: "(zweiter Spieler)",
            firstPlayer: "(Sie)",
            button: "Zurück"
        }
    },

}

let currentLang = 'en'

const failureSound = new Audio('sounds/failure.mp3')
failureSound.volume = 0.5
const successSound = new Audio('sounds/success.mp3')
successSound.volume = 0.5
const drawSound = new Audio('sounds/draw.mp3')
drawSound.volume = 0.5
const clickSound = new Audio('sounds/click.m4a')
clickSound.volume = 0.5
const errorSound = new Audio('sounds/error.mp3')
errorSound.volume = 0.5
const menuSound = new Audio('sounds/menu.mp4')
menuSound.volume = 0.5
const hoverSound = new Audio('sounds/hover.mp3')
hoverSound.volume = 0.3
const addedMessage = new Audio('sounds/added-message.mp4')
addedMessage.volume = 0.5
const timeOutSound = new Audio('sounds/time-out.mp4')
timeOutSound.volume = 0.5
const switchedScoresSound = new Audio('sounds/switched-scores.mp3')
switchedScoresSound.volume = 0.5
const soundOn = new Audio('sounds/sound-on.mp4')
soundOn.volume = 0.5
const soundOff = new Audio('sounds/sound-off.mp4')
soundOff.volume = 0.5

const bg = document.createElement('div');
bg.style.position = 'fixed';
bg.style.top = 0;
bg.style.left = 0;
bg.style.width = '100%';
bg.style.height = '100%';
bg.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/inspiration-geometry.png")';
bg.style.backgroundRepeat = 'repeat';
bg.style.opacity = '0.6';
bg.style.zIndex = '-1';
bg.style.pointerEvents = 'none';
document.body.appendChild(bg);

const container = document.getElementById('tictactoe-container');
const footer = document.getElementById('footer-container');
const mainContainer = document.getElementById('main-container');
let flexContainer = document.getElementById('flex-container')
let footerStats = document.getElementById('footer-stats');
let header = document.getElementById('header-container');
let signLeft = document.getElementById('sign-left')
let signRight = document.getElementById('sign-right')

let stopGameButtonRow = document.createElement('div')
stopGameButtonRow.classList.add('stop-game-button-row')

const statsPercent = document.createElement('h1')
statsPercent.classList.add('stats-per-cent')
const statsPercent2 = document.createElement('h1')
statsPercent2.classList.add('stats-per-cent')

const statsSecondPlayerPercent = document.createElement('h1')
statsSecondPlayerPercent.classList.add('stats-per-cent')

let resultsContainer = document.createElement('div')
resultsContainer.classList.add('results-container')
resultsContainer.style.gap = '0px'

let gif = document.createElement('img')
gif.classList.add('results-gif')

const levelOptions = ['2 players', 'easy', 'hard'];
const AINickname = 'Bob';

let headerTitle = document.createElement('h1');
headerTitle.classList.add('tictactoe-title');
let headerSubtitle = document.createElement('p');
headerSubtitle.classList.add('tictactoe-subtitle');

let playerMoves = [];
let secondPlayerMoves = [];
let playerSide = '';
let secondPlayerSide = '';
let nonValuedButtons = [];
let level = '';
let playerCurrentTurn = '';
let roundCounter = 0;
let playerWinCounter = 0;
let secondPlayerWinCounter = 0;

let fieldLengthFormat = 0;
let gridFormat = 0;
let valuesIndex = 0;

let users = JSON.parse(localStorage.getItem('users')) || [];
let user = '';

let playerNick = ''
let secondPlayerNick = ''

let foundUser = ''
let uniqueUsers = []

let buttonNumTest = 0
let gridNumTest = 0
let indexTest = 0

let roundsLimit = 'infinite rounds'
let timeLimit = 'infinite game'
let switchGame = false
let timer; 

const timerDiv = document.createElement('div')
timerDiv.classList.add('timer-div')

const timerText = document.createElement('p')
timerText.classList.add('timer-text')

timerDiv.appendChild(timerText)

let splittedPlayerNick = ''
let splittedSecondPlayerNick = ''

const headerSides = document.createElement('div')
headerSides.classList.add('header-sides')

const playerAvatarDiv = document.createElement('div')
playerAvatarDiv.classList.add('player-avatar-div')

const playerGoMark = document.createElement('div')
playerGoMark.classList.add('player-go-mark')

const playerAvatar = document.createElement('circle')
playerAvatar.classList.add('player-avatar')

playerAvatarDiv.appendChild(playerGoMark)
playerAvatarDiv.appendChild(playerAvatar)

const secondPlayerAvatarDiv = document.createElement('div')
secondPlayerAvatarDiv.classList.add('second-player-avatar-div')

const secondPlayerAvatar = document.createElement('circle')
secondPlayerAvatar.classList.add('second-player-avatar')

const secondPlayerGoMark = document.createElement('div')
secondPlayerGoMark.classList.add('second-player-go-mark')

secondPlayerAvatarDiv.appendChild(secondPlayerAvatar)
secondPlayerAvatarDiv.appendChild(secondPlayerGoMark)

const toggleDiv = document.createElement('div')
toggleDiv.classList.add('toggle-div')

const toggleText = document.createElement('p')
toggleText.classList.add('toggle-text')

const toggle = document.createElement('div')
toggle.classList.add('toggle-container')
const toggleSwitch = document.createElement('div')
toggleSwitch.classList.add('toggle-switch')

toggle.appendChild(toggleSwitch)
toggleDiv.appendChild(toggle)
toggleDiv.appendChild(toggleText)
// toggle.appendChild(toggleSwitch)

let aiThinking = false
let statsSwitched = false

const middleContainer = document.createElement('div')
middleContainer.classList.add('middle-container')

const chooseLevel = document.createElement('p')
chooseLevel.classList.add('menu-choose-level') 

const chooseFormat = document.createElement('p')
chooseFormat.classList.add('menu-choose-format')


writeNicknameMenu()

function writeNicknameMenu() {
    container.innerHTML = ''
    footer.innerHTML = ''
    header.innerHTML = ''

    container.style.width = '250px'
    container.style.height = 'auto'

    const footerButtonsDiv = document.createElement('div')
    footerButtonsDiv.classList.add('write-nickname-footer-buttons-div')

    footer.appendChild(footerButtonsDiv)

    const changeLanguageDiv = document.createElement('div')
    changeLanguageDiv.classList.add('change-language-div')
    footerButtonsDiv.appendChild(changeLanguageDiv)

    const changeVolumeDiv = document.createElement('div')
    changeVolumeDiv.classList.add('change-volume-div')
    footerButtonsDiv.appendChild(changeVolumeDiv)

    const rusLangButton = document.createElement('button')
    rusLangButton.classList.add('change-language-rus')
    rusLangButton.textContent = 'RU'
    rusLangButton.addEventListener('click', () => {
        clickSound.play()

        // сброс у всех
        rusLangButton.style.backgroundColor = '#ffffff';
        rusLangButton.style.color = '#777777b2';
        deLangButton.style.backgroundColor = '#ffffff';
        deLangButton.style.color = '#777777b2';
        enLangButton.style.backgroundColor = '#ffffff';
        enLangButton.style.color = '#777777b2';

        // подсветка выбранной
        rusLangButton.style.backgroundColor = '#a4c3b2';
        rusLangButton.style.color = '#ececec';

        currentLang = "ru"
        headerTitle.textContent = languages[currentLang].lobby.title
        headerSubtitle.textContent = languages[currentLang].lobby.subtitle
        inputField.placeholder = languages[currentLang].lobby.inputfield
        writeNickname.textContent = languages[currentLang].lobby.title2
        soundOnButton.textContent = languages[currentLang].lobby.soundOn
        soundOffButton.textContent = languages[currentLang].lobby.soundOff
        console.log(currentLang)
    });

    const deLangButton = document.createElement('button')
    deLangButton.classList.add('change-language-de')
    deLangButton.textContent = 'DE'
    deLangButton.addEventListener('click', () => {
        clickSound.play()

        // сброс у всех
        rusLangButton.style.backgroundColor = '#ffffff';
        rusLangButton.style.color = '#777777b2';
        deLangButton.style.backgroundColor = '#ffffff';
        deLangButton.style.color = '#777777b2';
        enLangButton.style.backgroundColor = '#ffffff';
        enLangButton.style.color = '#777777b2';

        // подсветка выбранной
        deLangButton.style.backgroundColor = '#a4c3b2';
        deLangButton.style.color = '#ececec';

        currentLang = "de"
        headerTitle.textContent = languages[currentLang].lobby.title
        headerSubtitle.textContent = languages[currentLang].lobby.subtitle
        inputField.placeholder = languages[currentLang].lobby.inputfield
        writeNickname.textContent = languages[currentLang].lobby.title2
        soundOnButton.textContent = languages[currentLang].lobby.soundOn
        soundOffButton.textContent = languages[currentLang].lobby.soundOff
        console.log(currentLang)
    });

    const enLangButton = document.createElement('button')
    enLangButton.classList.add('change-language-en')
    enLangButton.textContent = 'EN'
    enLangButton.style.backgroundColor = '#a4c3b2';
    enLangButton.style.color = '#ececec';
    enLangButton.addEventListener('click', () => {
        clickSound.play()

        // сброс у всех
        rusLangButton.style.backgroundColor = '#ffffff';
        rusLangButton.style.color = '#777777b2';
        deLangButton.style.backgroundColor = '#ffffff';
        deLangButton.style.color = '#777777b2';
        enLangButton.style.backgroundColor = '#ffffff';
        enLangButton.style.color = '#777777b2';

        // подсветка выбранной
        enLangButton.style.backgroundColor = '#a4c3b2';
        enLangButton.style.color = '#ececec';

        currentLang = "en"
        headerTitle.textContent = languages[currentLang].lobby.title
        headerSubtitle.textContent = languages[currentLang].lobby.subtitle
        inputField.placeholder = languages[currentLang].lobby.inputfield
        writeNickname.textContent = languages[currentLang].lobby.title2
        soundOnButton.textContent = languages[currentLang].lobby.soundOn
        soundOffButton.textContent = languages[currentLang].lobby.soundOff
        console.log(currentLang)
    });

    changeLanguageDiv.appendChild(rusLangButton)
    changeLanguageDiv.appendChild(deLangButton)
    changeLanguageDiv.appendChild(enLangButton)

    const soundOffButton = document.createElement('button')
    soundOffButton.classList.add('sound-off-button')
    soundOffButton.textContent = languages[currentLang].lobby.soundOff
    soundOffButton.addEventListener('click', () => {
        soundOff.play()

        // сброс у всех
        soundOffButton.style.backgroundColor = '#ffffff';
        soundOffButton.style.color = '#777777b2';
        soundOnButton.style.backgroundColor = '#ffffff';
        soundOnButton.style.color = '#777777b2';

        // подсветка выбранной
        soundOffButton.style.backgroundColor = '#a4c3b2';
        soundOffButton.style.color = '#ececec';

        failureSound.volume = 0.0
        successSound.volume = 0.0
        drawSound.volume = 0.0
        clickSound.volume = 0.0
        errorSound.volume = 0.0
        menuSound.volume = 0.0
        hoverSound.volume = 0.0
        addedMessage.volume = 0.0
        timeOutSound.volume = 0.0
        switchedScoresSound.volume = 0.0
    })

    const soundOnButton = document.createElement('button')
    soundOnButton.classList.add('sound-on-button')
    soundOnButton.style.backgroundColor = '#a4c3b2'
    soundOnButton.style.color = '#ececec'
    soundOnButton.textContent = languages[currentLang].lobby.soundOn
    soundOnButton.addEventListener('click', () => {
        soundOn.play()

        // сброс у всех
        soundOffButton.style.backgroundColor = '#ffffff';
        soundOffButton.style.color = '#777777b2';
        soundOnButton.style.backgroundColor = '#ffffff';
        soundOnButton.style.color = '#777777b2';

        // подсветка выбранной
        soundOnButton.style.backgroundColor = '#a4c3b2';
        soundOnButton.style.color = '#ececec';

        failureSound.volume = 0.5
        successSound.volume = 0.5
        drawSound.volume = 0.5
        clickSound.volume = 0.5
        errorSound.volume = 0.5
        menuSound.volume = 0.5
        hoverSound.volume = 0.5
        addedMessage.volume = 0.5
        timeOutSound.volume = 0.5
        switchedScoresSound.volume = 0.5
    })

    changeVolumeDiv.appendChild(soundOffButton)
    changeVolumeDiv.appendChild(soundOnButton)

    headerTitle.textContent = languages[currentLang].lobby.title
    headerSubtitle.textContent = languages[currentLang].lobby.subtitle

    const writeNickname = document.createElement('p')
    writeNickname.classList.add('menu-write-nickname')
    writeNickname.textContent = languages[currentLang].lobby.title2

    const inputField = document.createElement('input')
    inputField.placeholder = languages[currentLang].lobby.inputfield
    inputField.classList.add('inputField')

    const submitBtn = document.createElement('button')
    submitBtn.classList.add('nickname-submit-button')
    
    inputField.addEventListener('input', () => {
        if (inputField.value !== '') {
            if (document.querySelector('.nickname-submit-button') === null) {
                submitBtn.textContent = languages[currentLang].lobby.button
                submitBtn.addEventListener('click', () => {
                    clickSound.play()
                    const doesExist = users.some(user => user.nick === inputField.value)
                    const message = document.createElement('p')
                    message.classList.add('player-exists-message')
                    message.textContent = languages[currentLang].lobby.error

                    if (doesExist === true) {
                        console.log('already existsss')
                        if (document.querySelector('.player-exists-message') === null) {
                            errorSound.play()
                            container.appendChild(message)
                        }
                    } else if (doesExist === false) {
                        message.remove()
                        playerNick = inputField.value.trim()
                        inputField.value = ''; // очистить поле
                        submitBtn.remove()
                        instructions()
                    }
                });
                container.appendChild(submitBtn)
            }
        }
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const playerExist = users.some(user => user.nick === inputField.value.trim())
            const message = document.createElement('p')
            message.classList.add('player-exists-message')
            message.textContent = languages[currentLang].lobby.error

            if (playerExist === true) {
                console.log('already existsss')
                if (document.querySelector('.player-exists-message') === null) {
                    errorSound.play()
                    container.appendChild(message)
                }
            } else if (playerExist === false) {
                message.remove()
                playerNick = inputField.value.trim()
                splittedPlayerNick = playerNick.split('')
                console.log(splittedPlayerNick)
                inputField.value = ''; // очистить поле
                submitBtn.remove()
                instructions()
            }
        }
    });

    header.appendChild(headerTitle)
    header.appendChild(headerSubtitle)
    container.appendChild(writeNickname)
    container.appendChild(inputField)
}

function instructions() {
    container.innerHTML = ''
    container.style.width = 'auto'
    container.style.height = 'auto'
    footer.innerHTML = ''
    header.innerHTML = ''

    const dangerImg = document.createElement('img')
    dangerImg.classList.add('danger-img')
    dangerImg.src = 'images/danger.png'
    dangerImg.alt = 'danger img'

    const instructionTxt = document.createElement('p')
    instructionTxt.classList.add('instruction-text')
    instructionTxt.textContent = 'Твоя цель — первым выстроить свою линию по горизонтали, вертикали или диагонали.'

    const okButton = document.createElement('button')
    okButton.classList.add('instruction-ok-button')
    okButton.textContent = 'Ок'
    okButton.addEventListener('click', () => {
        clickSound.play()
        // chooseSideMenu()
        createOptions()
    });

    container.appendChild(dangerImg)
    container.appendChild(instructionTxt)
    container.appendChild(okButton)
}

function createOptions() {
    footerStats.style.display = 'none'
    flexContainer.style.display = 'none'
    container.style.display = 'none'
    middleContainer.innerHTML = ''
    footer.innerHTML = ''
    header.innerHTML = ''

    mainContainer.style.flexDirection = 'row'
    mainContainer.style.alignItems = 'flex-start'
    mainContainer.style.width = 'auto'

    const errorMessage = document.createElement('p')
    errorMessage.classList.add('error-message')

    const leftContainer = document.createElement('div')
    leftContainer.classList.add('left-container')
    mainContainer.appendChild(leftContainer)
    
    // const middleContainer = document.createElement('div')
    // middleContainer.classList.add('middle-container')

    mainContainer.appendChild(middleContainer)
    
    const rightContainer = document.createElement('div')
    rightContainer.classList.add('right-container')
    mainContainer.appendChild(rightContainer)

    headerTitle.textContent = `${languages[currentLang].menu.header.title + ' ' + playerNick}`
    headerSubtitle.textContent = languages[currentLang].menu.header.subtitle
    header.appendChild(headerTitle)
    header.appendChild(headerSubtitle)

    const leftBox = document.createElement('div')
    leftBox.classList.add('left-box')
    leftContainer.appendChild(leftBox)

    const leftBox2 = document.createElement('div')
    leftBox2.classList.add('left-box-2')
    leftContainer.appendChild(leftBox2)

    const middleBox1 = document.createElement('div')
    middleBox1.classList.add('middle-box-1')
    middleContainer.appendChild(middleBox1)

    const middleBox2 = document.createElement('div')
    middleBox2.classList.add('middle-box-2')
    middleContainer.appendChild(middleBox2)

    const rightBox = document.createElement('div')
    rightBox.classList.add('right-box')
    mainContainer.appendChild(rightBox)

    const chooseSide = document.createElement('p')
    chooseSide.classList.add('menu-choose-format')
    chooseSide.textContent = languages[currentLang].menu.leftContainer.side.title

    const chooseSideButtonRow = document.createElement('div')
    chooseSideButtonRow.classList.add('choose-side-button-row')

    const xButton = document.createElement('button')
    xButton.classList.add('x-button')
    xButton.textContent = 'X'
    xButton.value = 'x'
    xButton.addEventListener('click', () => {
        // сброс у обеих
        xButton.style.backgroundColor = '#a4c3b2';
        xButton.style.color = '#ececec';
        oButton.style.backgroundColor = '#a4c3b2';
        oButton.style.color = '#ececec';

        // подсветка выбранной
        xButton.style.backgroundColor = '#ececec';
        xButton.style.color = '#525252';

        clickSound.play()
        playerSide = 'Х'
        secondPlayerSide = 'О'
        playerCurrentTurn = playerSide
    });

    const oButton = document.createElement('button')
    oButton.classList.add('o-button')
    oButton.textContent = 'O'
    oButton.value = 'o'
    oButton.addEventListener('click', () => {
        // сброс у обеих
        xButton.style.backgroundColor = '#a4c3b2';
        xButton.style.color = '#ececec';
        oButton.style.backgroundColor = '#a4c3b2';
        oButton.style.color = '#ececec';

        // подсветка выбранной
        oButton.style.backgroundColor = '#ececec';
        oButton.style.color = '#525252';

        // выделить новую

        clickSound.play()
        playerSide = 'О'
        secondPlayerSide = 'Х'
        playerCurrentTurn = playerSide
    });

    leftBox.appendChild(chooseSide)
    leftBox.appendChild(chooseSideButtonRow)
    chooseSideButtonRow.appendChild(xButton)
    chooseSideButtonRow.appendChild(oButton)

    const chooseAiNick = document.createElement('p')
    chooseAiNick.classList.add('choose-ai-nick')
    chooseAiNick.textContent = languages[currentLang].menu.leftContainer.secondNick.title

    const inputField = document.createElement('input')
    inputField.placeholder = languages[currentLang].menu.leftContainer.secondNick.inputfield
    inputField.classList.add('input-menu')

    const submitBtn = document.createElement('button')
    submitBtn.classList.add('ai-nickname-submit-button')

    const message = document.createElement('p')
    message.classList.add('input-field-error-message')

    inputField.addEventListener('input', () => {
        if (inputField.value !== '') {
            if (document.querySelector('.nickname-submit-button') === null) {
                submitBtn.textContent = languages[currentLang].menu.leftContainer.secondNick.button
                submitBtn.addEventListener('click', () => {
                    clickSound.play()
                    const existingMessage = document.querySelector('.input-field-error-message');
                    const doesExist = users.some(user => user.nick === inputField.value)

                    if (doesExist === true || inputField.value.trim() === playerNick) {
                        console.log('already existsss')

                        if (existingMessage) {
                            errorSound.play()
                            existingMessage.textContent = languages[currentLang].menu.leftContainer.secondNick.error1;
                        } else {
                            errorSound.play()
                            const message = document.createElement('p');
                            message.classList.add('input-field-error-message');
                            message.textContent = languages[currentLang].menu.leftContainer.secondNick.error1;
                            leftBox2.appendChild(message);
                        }
                    } else if (inputField.value.length > 12) {
                        if (existingMessage) {
                            errorSound.play()
                            existingMessage.textContent = languages[currentLang].menu.leftContainer.secondNick.error2;
                        } else {
                            errorSound.play()
                            const message = document.createElement('p');
                            message.classList.add('input-field-error-message');
                            message.textContent = languages[currentLang].menu.leftContainer.secondNick.error2;
                            leftBox2.appendChild(message);
                        }
                    } else if (doesExist === false && inputField.value.trim() !== playerNick) {
                        if (existingMessage) {
                            message.remove()
                        }
                        submitBtn.remove()
                        secondPlayerNick = inputField.value.trim()
                        inputField.value = ''; // очистить поле
                        leftBox2.innerHTML = ''

                        addedMessage.play()
                        const addedImg = document.createElement('img')
                        addedImg.classList.add('added-img')
                        addedImg.src = 'images/check.png'
                        addedImg.alt = 'checked'
                        const addedText = document.createElement('p')
                        addedText.classList.add('added-second-player-nick')
                        addedText.textContent = languages[currentLang].menu.leftContainer.secondNick.added
                        leftBox2.appendChild(addedImg)
                        leftBox2.appendChild(addedText)
                    } 
                });
                leftBox2.appendChild(submitBtn)
            }
        }
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const doesExist = users.some(user => user.nick === inputField.value.trim())
            const existingMessage = document.querySelector('.input-field-error-message');

            if (doesExist === true || inputField.value.trim() === playerNick) {
                console.log('already existsss')
                if (existingMessage) {
                    errorSound.play()
                    existingMessage.textContent = languages[currentLang].menu.leftContainer.secondNick.error1;
                } else {
                    errorSound.play()
                    const message = document.createElement('p');
                    message.classList.add('input-field-error-message');
                    message.textContent = languages[currentLang].menu.leftContainer.secondNick.error1;
                    leftBox2.appendChild(message);
                }
            } else if (inputField.value.length > 12) {
                if (existingMessage) {
                    errorSound.play()
                    existingMessage.textContent = languages[currentLang].menu.leftContainer.secondNick.error2;
                } else {
                    errorSound.play()
                    const message = document.createElement('p');
                    message.classList.add('input-field-error-message');
                    message.textContent = languages[currentLang].menu.leftContainer.secondNick.error2;
                    leftBox2.appendChild(message);
                }
            } else if (doesExist === false && inputField.value.trim() !== playerNick) {
                if (existingMessage) {
                    message.remove()
                }
                submitBtn.remove()
                secondPlayerNick = inputField.value.trim()
                inputField.value = ''; // очистить поле
                leftBox2.innerHTML = ''

                addedMessage.play()
                const addedImg = document.createElement('img')
                addedImg.classList.add('added-img')
                addedImg.src = 'images/check.png'
                addedImg.alt = 'checked'
                const addedText = document.createElement('p')
                addedText.classList.add('added-second-player-nick')
                addedText.textContent = languages[currentLang].menu.leftContainer.secondNick.added
                leftBox2.appendChild(addedImg)
                leftBox2.appendChild(addedText)
            } 
        }
    });

    if (inputField.value === '') {
        secondPlayerNick = createSecondPlayerNick()
    }

    leftBox2.appendChild(chooseAiNick)
    leftBox2.appendChild(inputField)

    const chooseLevelTextDiv = document.createElement('div')
    chooseLevelTextDiv.classList.add('choose-level-text-div')
    middleBox1.appendChild(chooseLevelTextDiv)

    // const chooseLevel = document.createElement('p')
    // chooseLevel.classList.add('menu-choose-level')
    chooseLevel.textContent = languages[currentLang].menu.middleContainer.level.title

    const helpIcon = document.createElement('img')
    helpIcon.classList.add('choose-level-tutorial-icon')
    helpIcon.src = 'images/tutorial-icon.svg'
    helpIcon.alt = 'tutorial icon'
    helpIcon.addEventListener('click', () => {
        clickSound.play()

        mainContainer.style.flexDirection = 'column'
        mainContainer.style.alignItems = 'center'
        mainContainer.style.gap = '0px'
        middleContainer.remove()
        rightBox.remove()
        leftContainer.remove()
        submitButton.remove()
        menuButton.remove()

        levelInfo()
        console.log('info')
    });

    chooseLevelTextDiv.appendChild(chooseLevel)
    chooseLevelTextDiv.appendChild(helpIcon)

    const buttonRow1 = document.createElement('div')
    buttonRow1.classList.add('choose-level-button-row')

    middleBox1.appendChild(buttonRow1)

    const twoPlayersButton = document.createElement('button')
    twoPlayersButton.classList.add('two-players-button')
    twoPlayersButton.textContent = languages[currentLang].menu.middleContainer.level.buttons.twoPlayers
    twoPlayersButton.addEventListener('click', () => {
        // сброс у всех
        twoPlayersButton.style.backgroundColor = '#a4c3b2';
        twoPlayersButton.style.color = '#ececec';
        aiButton.style.backgroundColor = '#a4c3b2';
        aiButton.style.color = '#ececec';
        aiEasyButton.style.backgroundColor = '#a4c3b2';
        aiEasyButton.style.color = '#ececec';
        aiHardButton.style.backgroundColor = '#a4c3b2';
        aiHardButton.style.color = '#ececec';
        minimaxButton.style.backgroundColor = '#a4c3b2';
        minimaxButton.style.color = '#ececec';
        limitedMinimaxButton.style.backgroundColor = '#a4c3b2';
        limitedMinimaxButton.style.color = '#ececec';
        monteCarloButton.style.backgroundColor = '#a4c3b2';
        monteCarloButton.style.color = '#ececec';

        aiButtonPopup.style.display = 'none'
        aiButton.textContent = languages[currentLang].menu.middleContainer.level.buttons.aiLevel.cover

        // подсветка выбранной
        twoPlayersButton.style.backgroundColor = '#ececec';
        twoPlayersButton.style.color = '#525252';
        clickSound.play()

        level = '2 players'
    });

    const aiButtonDiv = document.createElement('div')
    aiButtonDiv.classList.add('ai-button-div')
    buttonRow1.appendChild(aiButtonDiv)
    const aiButtonPopup = document.createElement('div')
    aiButtonPopup.classList.add('ai-button-popup')
    aiButtonPopup.style.display = 'none'
    aiButtonPopup.addEventListener('mouseleave', () => {
        if (level === '') {
            aiButton.style.backgroundColor = '#a4c3b2';
            aiButton.style.color = '#ececec';
        }
        aiButtonPopup.style.display = 'none'
    });

    const aiButton = document.createElement('button')
    aiButton.classList.add('ai-button')
    aiButton.textContent = languages[currentLang].menu.middleContainer.level.buttons.aiLevel.cover
    aiButton.addEventListener('click', () => {
        aiButtonPopup.style.display = 'flex'
        // сброс у всех
        twoPlayersButton.style.backgroundColor = '#a4c3b2';
        twoPlayersButton.style.color = '#ececec';
        aiButton.style.backgroundColor = '#a4c3b2';
        aiButton.style.color = '#ececec';

        // подсветка выбранной
        aiButton.style.backgroundColor = '#ececec';
        aiButton.style.color = '#525252';
        clickSound.play()

        level = ''
    });

    const aiEasyButton = document.createElement('button')
    aiEasyButton.classList.add('ai-easy-button')
    aiEasyButton.textContent = languages[currentLang].menu.middleContainer.level.buttons.aiLevel.easyAi
    aiEasyButton.addEventListener('click', () => {
        // сброс у всех
        aiEasyButton.style.backgroundColor = '#a4c3b2';
        aiEasyButton.style.color = '#ececec';
        aiHardButton.style.backgroundColor = '#a4c3b2';
        aiHardButton.style.color = '#ececec';
        minimaxButton.style.backgroundColor = '#a4c3b2';
        minimaxButton.style.color = '#ececec';
        limitedMinimaxButton.style.backgroundColor = '#a4c3b2';
        limitedMinimaxButton.style.color = '#ececec';
        monteCarloButton.style.backgroundColor = '#a4c3b2';
        monteCarloButton.style.color = '#ececec';

        aiButtonPopup.style.display = 'none'
        aiButton.textContent = languages[currentLang].menu.middleContainer.level.buttons.aiLevel.easyAi
        aiButton.style.backgroundColor = '#ececec';
        aiButton.style.color = '#525252';

        // подсветка выбранной
        aiEasyButton.style.backgroundColor = '#ececec';
        aiEasyButton.style.color = '#525252';
        clickSound.play()

        level = 'easy'
    });

    const aiHardButton = document.createElement('button')
    aiHardButton.classList.add('ai-hard-button')
    aiHardButton.textContent = languages[currentLang].menu.middleContainer.level.buttons.aiLevel.hardAi
    aiHardButton.addEventListener('click', () => {
        // сброс у всех
        aiEasyButton.style.backgroundColor = '#a4c3b2';
        aiEasyButton.style.color = '#ececec';
        aiHardButton.style.backgroundColor = '#a4c3b2';
        aiHardButton.style.color = '#ececec';
        minimaxButton.style.backgroundColor = '#a4c3b2';
        minimaxButton.style.color = '#ececec';
        limitedMinimaxButton.style.backgroundColor = '#a4c3b2';
        limitedMinimaxButton.style.color = '#ececec';
        monteCarloButton.style.backgroundColor = '#a4c3b2';
        monteCarloButton.style.color = '#ececec';

        aiButtonPopup.style.display = 'none'
        aiButton.textContent = languages[currentLang].menu.middleContainer.level.buttons.aiLevel.hardAi
        aiButton.style.backgroundColor = '#ececec';
        aiButton.style.color = '#525252';

        // подсветка выбранной
        aiHardButton.style.backgroundColor = '#ececec';
        aiHardButton.style.color = '#525252';
        clickSound.play()

        level = 'hard'
    });

    const minimaxButton = document.createElement('button')
    minimaxButton.classList.add('ai-minimax-button')
    minimaxButton.textContent = 'Minimax'
    minimaxButton.addEventListener('click', () => {
        // сброс у всех
        aiEasyButton.style.backgroundColor = '#a4c3b2';
        aiEasyButton.style.color = '#ececec';
        aiHardButton.style.backgroundColor = '#a4c3b2';
        aiHardButton.style.color = '#ececec';
        minimaxButton.style.backgroundColor = '#a4c3b2';
        minimaxButton.style.color = '#ececec';
        limitedMinimaxButton.style.backgroundColor = '#a4c3b2';
        limitedMinimaxButton.style.color = '#ececec';
        monteCarloButton.style.backgroundColor = '#a4c3b2';
        monteCarloButton.style.color = '#ececec';

        aiButtonPopup.style.display = 'none'
        aiButton.textContent = 'Minimax'
        aiButton.style.backgroundColor = '#ececec';
        aiButton.style.color = '#525252';

        // подсветка выбранной
        minimaxButton.style.backgroundColor = '#ececec';
        minimaxButton.style.color = '#525252';
        clickSound.play()

        level = 'Minimax'
    });

    const limitedMinimaxButton = document.createElement('button')
    limitedMinimaxButton.classList.add('ai-limited-minimax-button')
    limitedMinimaxButton.textContent = 'Limited Minimax'
    limitedMinimaxButton.addEventListener('click', () => {
        // сброс у всех
        aiEasyButton.style.backgroundColor = '#a4c3b2';
        aiEasyButton.style.color = '#ececec';
        aiHardButton.style.backgroundColor = '#a4c3b2';
        aiHardButton.style.color = '#ececec';
        minimaxButton.style.backgroundColor = '#a4c3b2';
        minimaxButton.style.color = '#ececec';
        limitedMinimaxButton.style.backgroundColor = '#a4c3b2';
        limitedMinimaxButton.style.color = '#ececec';
        monteCarloButton.style.backgroundColor = '#a4c3b2';
        monteCarloButton.style.color = '#ececec';

        aiButtonPopup.style.display = 'none'
        aiButton.textContent = 'Limited Minimax'
        aiButton.style.backgroundColor = '#ececec';
        aiButton.style.color = '#525252';

        // подсветка выбранной
        limitedMinimaxButton.style.backgroundColor = '#ececec';
        limitedMinimaxButton.style.color = '#525252';
        clickSound.play()

        level = 'Limited Minimax'
    });

    const monteCarloButton = document.createElement('button')
    monteCarloButton.classList.add('ai-monte-carlo-button')
    monteCarloButton.textContent = 'MCTS'
    monteCarloButton.addEventListener('click', () => {
        // сброс у всех
        aiEasyButton.style.backgroundColor = '#a4c3b2';
        aiEasyButton.style.color = '#ececec';
        aiHardButton.style.backgroundColor = '#a4c3b2';
        aiHardButton.style.color = '#ececec';
        minimaxButton.style.backgroundColor = '#a4c3b2';
        minimaxButton.style.color = '#ececec';
        limitedMinimaxButton.style.backgroundColor = '#a4c3b2';
        limitedMinimaxButton.style.color = '#ececec';
        monteCarloButton.style.backgroundColor = '#a4c3b2';
        monteCarloButton.style.color = '#ececec';

        aiButtonPopup.style.display = 'none'
        aiButton.textContent = 'MCTS'
        aiButton.style.backgroundColor = '#ececec';
        aiButton.style.color = '#525252';

        // подсветка выбранной
        monteCarloButton.style.backgroundColor = '#ececec';
        monteCarloButton.style.color = '#525252';
        clickSound.play()

        level = 'MCTS'
    });

    aiButtonPopup.appendChild(aiEasyButton)
    aiButtonPopup.appendChild(aiHardButton)
    aiButtonPopup.appendChild(minimaxButton)
    aiButtonPopup.appendChild(limitedMinimaxButton)
    aiButtonPopup.appendChild(monteCarloButton)

    buttonRow1.appendChild(twoPlayersButton)
    aiButtonDiv.appendChild(aiButton)
    aiButtonDiv.appendChild(aiButtonPopup)
    // buttonRow1.appendChild(aiHardButton)
    // buttonRow1.appendChild(aiImpossibleButton)

    // const chooseFormat = document.createElement('p')
    // chooseFormat.classList.add('menu-choose-format')
    chooseFormat.textContent = languages[currentLang].menu.middleContainer.format.title

    const buttonRow2 = document.createElement('div')
    buttonRow2.classList.add('choose-format-button-row')

    middleBox2.appendChild(chooseFormat)
    middleBox2.appendChild(buttonRow2)

    const threeThreeButton = document.createElement('button')
    threeThreeButton.classList.add('three-to-three-button')
    threeThreeButton.textContent = '3x3'
    threeThreeButton.addEventListener('click', () => {
        // сброс у всех
        threeThreeButton.style.backgroundColor = '#a4c3b2';
        threeThreeButton.style.color = '#ececec';
        fourFourButton.style.backgroundColor = '#a4c3b2';
        fourFourButton.style.color = '#ececec';
        fiveFiveButton.style.backgroundColor = '#a4c3b2';
        fiveFiveButton.style.color = '#ececec';
        sevenSevenButton.style.backgroundColor = '#a4c3b2';
        sevenSevenButton.style.color = '#ececec';

        // подсветка выбранной
        threeThreeButton.style.backgroundColor = '#ececec';
        threeThreeButton.style.color = '#525252';
        clickSound.play()

        buttonNumTest = 9
        gridNumTest = 3
        indexTest = 0
    });

    const fourFourButton = document.createElement('button')
    fourFourButton.classList.add('four-to-four-button')
    fourFourButton.textContent = '4x4'
    fourFourButton.addEventListener('click', () => {
        // сброс у всех
        threeThreeButton.style.backgroundColor = '#a4c3b2';
        threeThreeButton.style.color = '#ececec';
        fourFourButton.style.backgroundColor = '#a4c3b2';
        fourFourButton.style.color = '#ececec';
        fiveFiveButton.style.backgroundColor = '#a4c3b2';
        fiveFiveButton.style.color = '#ececec';
        sevenSevenButton.style.backgroundColor = '#a4c3b2';
        sevenSevenButton.style.color = '#ececec';

        // подсветка выбранной
        fourFourButton.style.backgroundColor = '#ececec';
        fourFourButton.style.color = '#525252';
        clickSound.play()

        buttonNumTest = 16
        gridNumTest = 4
        indexTest = 1
    });

    const fiveFiveButton = document.createElement('button')
    fiveFiveButton.classList.add('five-to-five-button')
    fiveFiveButton.textContent = '5x5'
    fiveFiveButton.addEventListener('click', () => {
        // сброс у всех
        threeThreeButton.style.backgroundColor = '#a4c3b2';
        threeThreeButton.style.color = '#ececec';
        fourFourButton.style.backgroundColor = '#a4c3b2';
        fourFourButton.style.color = '#ececec';
        fiveFiveButton.style.backgroundColor = '#a4c3b2';
        fiveFiveButton.style.color = '#ececec';
        sevenSevenButton.style.backgroundColor = '#a4c3b2';
        sevenSevenButton.style.color = '#ececec';

        // подсветка выбранной
        fiveFiveButton.style.backgroundColor = '#ececec';
        fiveFiveButton.style.color = '#525252';
        clickSound.play()

        buttonNumTest = 25
        gridNumTest = 5
        indexTest = 2
    });

    const sevenSevenButton = document.createElement('button')
    sevenSevenButton.classList.add('seven-to-seven-button')
    sevenSevenButton.textContent = '7x7'
    sevenSevenButton.addEventListener('click', () => {
        // сброс у всех
        threeThreeButton.style.backgroundColor = '#a4c3b2';
        threeThreeButton.style.color = '#ececec';
        fourFourButton.style.backgroundColor = '#a4c3b2';
        fourFourButton.style.color = '#ececec';
        fiveFiveButton.style.backgroundColor = '#a4c3b2';
        fiveFiveButton.style.color = '#ececec';
        sevenSevenButton.style.backgroundColor = '#a4c3b2';
        sevenSevenButton.style.color = '#ececec';

        // подсветка выбранной
        sevenSevenButton.style.backgroundColor = '#ececec';
        sevenSevenButton.style.color = '#525252';
        clickSound.play()

        buttonNumTest = 49
        gridNumTest = 7
        indexTest = 3
    });

    buttonRow2.appendChild(threeThreeButton)
    buttonRow2.appendChild(fourFourButton)
    buttonRow2.appendChild(fiveFiveButton)
    buttonRow2.appendChild(sevenSevenButton)

    const chooseRounds = document.createElement('p')
    chooseRounds.classList.add('choose-rounds')
    chooseRounds.textContent = languages[currentLang].menu.rightContainer.title1

    const buttonRow3 = document.createElement('div')
    buttonRow3.classList.add('choose-rounds-button-row')

    rightBox.appendChild(chooseRounds)
    rightBox.appendChild(buttonRow3)

    const quickGameButton = document.createElement('button')
    quickGameButton.classList.add('quick-game-button')
    quickGameButton.textContent = languages[currentLang].menu.rightContainer.buttons.rounds.quickGame
    quickGameButton.addEventListener('click', () => {
        // сброс у всех
        quickGameButton.style.backgroundColor = '#a4c3b2';
        quickGameButton.style.color = '#ececec';
        longGameButton.style.backgroundColor = '#a4c3b2';
        longGameButton.style.color = '#ececec';
        infiniteGameButton.style.backgroundColor = '#a4c3b2';
        infiniteGameButton.style.color = '#ececec';

        // подсветка выбранной
        quickGameButton.style.backgroundColor = '#ececec';
        quickGameButton.style.color = '#525252';

        roundsLimit = 6
        timeLimit = 20
        clickSound.play()
    });

    const longGameButton = document.createElement('button')
    longGameButton.classList.add('long-game-button')
    longGameButton.textContent = languages[currentLang].menu.rightContainer.buttons.rounds.classics
    longGameButton.addEventListener('click', () => {
        // сброс у всех
        quickGameButton.style.backgroundColor = '#a4c3b2';
        quickGameButton.style.color = '#ececec';
        longGameButton.style.backgroundColor = '#a4c3b2';
        longGameButton.style.color = '#ececec';
        infiniteGameButton.style.backgroundColor = '#a4c3b2';
        infiniteGameButton.style.color = '#ececec';

        // подсветка выбранной
        longGameButton.style.backgroundColor = '#ececec';
        longGameButton.style.color = '#525252';

        roundsLimit = 16
        timeLimit = 300
        clickSound.play()
    });

    const infiniteGameButton = document.createElement('button')
    infiniteGameButton.classList.add('infinite-game-button')
    infiniteGameButton.textContent = languages[currentLang].menu.rightContainer.buttons.rounds.longGame
    infiniteGameButton.addEventListener('click', () => {
        // сброс у всех
        quickGameButton.style.backgroundColor = '#a4c3b2';
        quickGameButton.style.color = '#ececec';
        longGameButton.style.backgroundColor = '#a4c3b2';
        longGameButton.style.color = '#ececec';
        infiniteGameButton.style.backgroundColor = '#a4c3b2';
        infiniteGameButton.style.color = '#ececec';

        // подсветка выбранной
        infiniteGameButton.style.backgroundColor = '#ececec';
        infiniteGameButton.style.color = '#525252';

        yesButton.style.backgroundColor = '#a4c3b2';
        yesButton.style.color = '#ececec'

        noButton.style.backgroundColor = '#ececec';
        noButton.style.color = '#525252';

        roundsLimit = 'infinite rounds'
        timeLimit = 'infinite game'
        clickSound.play()
    });

    buttonRow3.appendChild(quickGameButton)
    buttonRow3.appendChild(longGameButton)
    buttonRow3.appendChild(infiniteGameButton)

    const chooseModeTextDiv = document.createElement('div')
    chooseModeTextDiv.classList.add('choose-mode-text-div')
    rightBox.appendChild(chooseModeTextDiv)

    const chooseMode = document.createElement('p')
    chooseMode.classList.add('choose-game-mode')
    chooseMode.textContent = languages[currentLang].menu.rightContainer.title2

    const helpIcon2 = document.createElement('img')
    helpIcon2.classList.add('switch-game-tutorial-icon')
    helpIcon2.src = 'images/tutorial-icon.svg'
    helpIcon2.alt = 'tutorial icon'
    helpIcon2.addEventListener('click', () => {
        clickSound.play()

        mainContainer.style.flexDirection = 'column'
        mainContainer.style.alignItems = 'center'
        mainContainer.style.gap = '0px'
        middleContainer.remove()
        rightBox.remove()
        leftContainer.remove()
        submitButton.remove()
        menuButton.remove()

        switchGameInfo()
    });

    chooseModeTextDiv.appendChild(chooseMode)
    chooseModeTextDiv.appendChild(helpIcon2)

    const buttonRow4 = document.createElement('div')
    buttonRow4.classList.add('switch-game-mode-button-row')

    rightBox.appendChild(buttonRow4)

    const yesButton = document.createElement('button')
    yesButton.classList.add('yes-button')
    yesButton.textContent = languages[currentLang].menu.rightContainer.buttons.gameMode.yes
    yesButton.addEventListener('click', () => {
        // сброс у всех
        yesButton.style.backgroundColor = '#a4c3b2';
        yesButton.style.color = '#ececec';
        noButton.style.backgroundColor = '#a4c3b2';
        noButton.style.color = '#ececec';

        // подсветка выбранной
        yesButton.style.backgroundColor = '#ececec';
        yesButton.style.color = '#525252';

        infiniteGameButton.style.backgroundColor = '#a4c3b2';
        infiniteGameButton.style.color = '#ececec'

        switchGame = true
        clickSound.play()
    });

    const noButton = document.createElement('button')
    noButton.classList.add('no-button')
    noButton.textContent = languages[currentLang].menu.rightContainer.buttons.gameMode.no
    noButton.addEventListener('click', () => {
        // сброс у всех
        yesButton.style.backgroundColor = '#a4c3b2';
        yesButton.style.color = '#ececec';
        noButton.style.backgroundColor = '#a4c3b2';
        noButton.style.color = '#ececec';

        // подсветка выбранной
        noButton.style.backgroundColor = '#ececec';
        noButton.style.color = '#525252';
        clickSound.play()
        switchGame = false
    });

    buttonRow4.appendChild(yesButton)
    buttonRow4.appendChild(noButton)

    const footerButtonRow = document.createElement('div')
    footerButtonRow.classList.add('footer-button-row')
    footer.appendChild(footerButtonRow)

    const submitButton = document.createElement('button')
    submitButton.classList.add('submit-all-button')
    submitButton.textContent = languages[currentLang].menu.footer.startGame
    submitButton.addEventListener('click', () => {
        if (timeLimit === 'infinite game') {
            timerDiv.style.display = 'none'
        } else {
            timerDiv.style.display = 'flex'
            timerText.textContent = timeLimit + 'с.';

            timer = setInterval(() => {
                timeLimit--;
                if (timeLimit > 0) {
                    timerText.textContent = timeLimit + 'с.'; 
                }
                else {
                    timeOutSound.play()
                    clearInterval(timer);
                    timerText.textContent = languages[currentLang].roundResults.title.timeOut;
                    if (document.querySelector('.stop-game-button-row') === null) {
                        stopGame()
                    } else {
                        console.log('stopgamebuttonrow exists')
                    }
                }
            }, 1000);
        }

        console.log("switch game? " + switchGame)

        splittedSecondPlayerNick = secondPlayerNick.split('')
        console.log(splittedSecondPlayerNick)
        // if (level === '' || playerSide === '' || buttonNumTest === 0 || roundsLimit === 1) {
        //     errorSound.play()
        //     errorMessage.textContent = 'Вы подобрали не все условия для игры.'
        //     footer.appendChild(errorMessage)
        if (level === '' && playerSide !== '' && buttonNumTest !== 0 && roundsLimit !== 1) {
            errorSound.play()
            errorMessage.textContent = 'Выберите уровень.'
            middleBox1.style.border = '3px solid rgba(255, 0, 0, 0.39)'
            rightBox.style.border = 'none'
            leftBox.style.border = 'none'
            middleBox2.style.border = 'none'
            footer.appendChild(errorMessage)
        } else if (playerSide === '' && level !== '' && buttonNumTest !== 0 && roundsLimit !== 1) {
            errorSound.play()
            errorMessage.textContent = 'Выберите сторону.'
            leftBox.style.border = '3px solid rgba(255, 0, 0, 0.39)'
            rightBox.style.border = 'none'
            middleBox1.style.border = 'none'
            middleBox2.style.border = 'none'
            footer.appendChild(errorMessage)
        } else if (buttonNumTest === 0 && level !== '' && playerSide !== '' && roundsLimit !== 1) {
            errorSound.play()
            errorMessage.textContent = 'Выберите сетку.'
            middleBox2.style.border = '3px solid rgba(255, 0, 0, 0.39)'
            middleBox1.style.border = 'none'
            rightBox.style.border = 'none'
            leftBox.style.border = 'none'
            footer.appendChild(errorMessage)
        } else if (roundsLimit === 1 && buttonNumTest !== 0 && level !== '' && playerSide !== '') {
            errorSound.play()
            errorMessage.textContent = 'Выберите кол-во раундов'
            rightBox.style.border = '3px solid rgba(255, 0, 0, 0.39)'
            middleBox1.style.border = 'none'
            middleBox2.style.border = 'none'
            leftBox.style.border = 'none'
            footer.appendChild(errorMessage)
        }
        else if (level !== '' && playerSide !== '' && buttonNumTest !== 0 && roundsLimit !== 1) {
            clickSound.play()

            console.log('player side = ' + playerSide)
            console.log('second player side = ' + secondPlayerSide)
            console.log('current turn = ' + playerCurrentTurn)
            console.log('/////////////////////////////////////')

            console.log('level = ' + level)
            console.log('/////////////////////////////////////')

            console.log('buttonNum = ' + buttonNumTest)
            console.log('gridNum = ' + gridNumTest)
            console.log('index = ' + indexTest)
            console.log('/////////////////////////////////////')
            console.log('-------------------------------------')

            mainContainer.style.flexDirection = 'column'
            mainContainer.style.alignItems = 'center'
            mainContainer.style.gap = '0px'
            middleContainer.remove()
            rightBox.remove()
            leftContainer.remove()

            footerStats.style.display = 'flex'
            flexContainer.style.display = 'flex'
            container.style.display = 'flex'

            createButtons(buttonNumTest, gridNumTest, indexTest)
        }
    });

    const menuButton = document.createElement('button')
    menuButton.classList.add('back-to-menu-button') 
    menuButton.textContent = languages[currentLang].menu.footer.quitGame
    menuButton.addEventListener('click', () => {
        menuSound.play()
        playerSide = ''
        secondPlayerSide = ''
        playerCurrentTurn = ''
        level = ''
        buttonNumTest = 0
        gridNumTest = 0
        indexTest = 0
        leftContainer.remove()
        middleContainer.remove()
        rightBox.remove()
        flexContainer.style.display = 'flex'
        container.style.display = 'flex'
        writeNicknameMenu()
    });

    footerButtonRow.appendChild(submitButton)
    footerButtonRow.appendChild(menuButton)
}

function levelInfo () {
    header.innerHTML = ''
    container.innerHTML = ''
    flexContainer.style.display = 'flex'
    container.style.display = 'flex'
    container.style.width = '520px'

    const title = document.createElement('h1')
    title.classList.add('help-title')
    title.textContent = 'Используемые ИИ'

    const description = document.createElement('p')
    description.classList.add('help-subtitle')
    description.textContent = 'В моей игре есть 5 разных алгоритмов ИИ, против которого Вы играете. Дефиниции по видам:'

    const aiList = document.createElement('ul')
    aiList.classList.add('level-info-ai-list')

    const li = document.createElement('li')
    li.classList.add('level-info-li')
    
    const liDiv = document.createElement('div')
    liDiv.classList.add('level-info-li-div')

    const liTitle = document.createElement('h3')
    liTitle.classList.add('level-info-li-title')
    liTitle.textContent = '"Лёгкий" ИИ'

    const liSubtitle = document.createElement('p')
    liSubtitle.classList.add('level-info-li-subtitle')
    liSubtitle.textContent = 'Алгоритм, который ходит абсолютно рандомно, не пытаясь выиграть.'

    const li2 = document.createElement('li')
    li2.classList.add('level-info-li')
    
    const liDiv2 = document.createElement('div')
    liDiv2.classList.add('level-info-li-div')

    const liTitle2 = document.createElement('h3')
    liTitle2.classList.add('level-info-li-title')
    liTitle2.textContent = '"Сложный" ИИ'

    const liSubtitle2 = document.createElement('p')
    liSubtitle2.classList.add('level-info-li-subtitle')
    liSubtitle2.textContent = 'Алгоритм по-сложнее, который сначала пытается выиграть сам, если не получается - блокирует твою победу, если и это за горами - ходит рандомно.'

    const li3 = document.createElement('li')
    li3.classList.add('level-info-li')

    const liDiv3 = document.createElement('div')
    liDiv3.classList.add('level-info-li-div')
    
    const liTitle3 = document.createElement('h3')
    liTitle3.classList.add('level-info-li-title')
    liTitle3.textContent = 'Minimax'

    const liSubtitle3 = document.createElement('p')
    liSubtitle3.classList.add('level-info-li-subtitle')
    liSubtitle3.textContent = 'ИИ, который заранее просчитал все возможные ходы и которого нереально выиграть. Играется только на поле 3х3. Здесь используется рекурсия.'

    const li4 = document.createElement('li')
    li4.classList.add('level-info-li')

    const liDiv4 = document.createElement('div')
    liDiv4.classList.add('level-info-li-div')
    
    const liTitle4 = document.createElement('h3')
    liTitle4.classList.add('level-info-li-title')
    liTitle4.textContent = 'Limited Depth Minimax'

    const liSubtitle4 = document.createElement('p')
    liSubtitle4.classList.add('level-info-li-subtitle')
    liSubtitle4.textContent = 'Разновидность Minimax, который думает на 3 хода вперёд и оценивает вероятность выигрыша используя эвристику.'

    const li5 = document.createElement('li')
    li5.classList.add('level-info-li')

    const liDiv5 = document.createElement('div')
    liDiv5.classList.add('level-info-li-div')
    
    const liTitle5 = document.createElement('h3')
    liTitle5.classList.add('level-info-li-title')
    liTitle5.textContent = 'Monte Carlo Tree Search'

    const liSubtitle5 = document.createElement('p')
    liSubtitle5.classList.add('level-info-li-subtitle')
    liSubtitle5.textContent = 'Умный ИИ, который "учится", играя с тобой. После раунда он просчитывает вероятности выигрыша и запоминает, как лучше ходить.'
    
    const backButton = document.createElement('button')
    backButton.classList.add('help-back-button')
    backButton.textContent = 'Назад'
    backButton.addEventListener('click', () => {
        clickSound.play()
        createOptions()
    });

    liDiv.appendChild(liTitle)
    liDiv.appendChild(liSubtitle)
    li.appendChild(liDiv)
    aiList.appendChild(li)

    liDiv2.appendChild(liTitle2)
    liDiv2.appendChild(liSubtitle2)
    li2.appendChild(liDiv2)
    aiList.appendChild(li2)

    liDiv3.appendChild(liTitle3)
    liDiv3.appendChild(liSubtitle3)
    li3.appendChild(liDiv3)
    aiList.appendChild(li3)

    liDiv4.appendChild(liTitle4)
    liDiv4.appendChild(liSubtitle4)
    li4.appendChild(liDiv4)
    aiList.appendChild(li4)

    liDiv5.appendChild(liTitle5)
    liDiv5.appendChild(liSubtitle5)
    li5.appendChild(liDiv5)
    aiList.appendChild(li5)

    container.appendChild(title)
    container.appendChild(description)
    container.appendChild(aiList)

    container.appendChild(backButton)

}

function switchGameInfo() {
    header.innerHTML = ''
    container.innerHTML = ''
    flexContainer.style.display = 'flex'
    container.style.display = 'flex'
    container.style.width = '400px'

    const title = document.createElement('h1')
    title.classList.add('help-title')
    title.textContent = 'Switch game'

    const description = document.createElement('p')
    description.classList.add('help-description')
    description.textContent = "Если ты активируешь этот алгоритм, через половину выбранного количества раундов (например через 3 раунда, если ты выбрал 6 раундов), твои очки и очки второго игрока поменяются местами и ты будешь играть за очки второго игрока."

    const backButton = document.createElement('button')
    backButton.classList.add('help-back-button')
    backButton.textContent = 'Назад'
    backButton.addEventListener('click', () => {
        clickSound.play()
        createOptions()
    });

    container.appendChild(title)
    container.appendChild(description)
    container.appendChild(backButton)
}

// function chooseLevelMenu() {
//     container.innerHTML = ''
//     footer.innerHTML = ''
//     header.innerHTML = ''

//     headerTitle.textContent = `Как играем?`
//     headerSubtitle.textContent = 'Здесь можно выбрать желаемый уровень сложности под себя.'
//     header.appendChild(headerTitle)
//     header.appendChild(headerSubtitle)

//     const chooseFormat = document.createElement('p')
//     chooseFormat.classList.add('menu-choose-level')
//     chooseFormat.textContent = 'Выбери уровень сложности'

//     const buttonRow = document.createElement('div')
//     buttonRow.classList.add('choose-level-button-row')

//     container.appendChild(chooseFormat)
//     container.appendChild(buttonRow)

//     for (let i = 0; i < levelOptions.length; i++) {
//         const button = document.createElement('button');
//         button.classList.add('choose-level-button');
//         button.textContent = levelOptions[i];
//         button.value = levelOptions[i];
//         button.style.cursor = 'pointer';
//         button.addEventListener('click', () => {
//             clickSound.play()
//             if (button.value === levelOptions[i]) {
//                 level = levelOptions[i]
//                 if (level === '2 players') {
//                     secondPlayerWinCounter = 0
//                 }
//                 chooseFormatMenu()
//             }
//         });
//         buttonRow.appendChild(button)
//     }
// }

function chooseFormatMenu() {
    container.style.display = 'none'
    footer.innerHTML = ''
    header.innerHTML = ''

    header.appendChild(timerDiv)

    headerTitle.textContent = languages[currentLang].changeFormat.header.title + " " + playerNick + "?"
    headerSubtitle.textContent = languages[currentLang].changeFormat.header.subtitle
    header.appendChild(headerTitle)
    header.appendChild(headerSubtitle)

    chooseFormat.textContent = languages[currentLang].changeFormat.format
    chooseLevel.textContent = 'Поменять уровень'

    if (mainContainer.contains(middleContainer)) {
        middleContainer.innerHTML = ''
        middleContainer.remove()
    } else {
        mainContainer.appendChild(middleContainer)
    }

    const footerButtonRow = document.createElement('div')
    footerButtonRow.classList.add('footer-button-row')
    footer.appendChild(footerButtonRow)

    const submitButton = document.createElement('button')
    submitButton.classList.add('submit-all-button')
    submitButton.textContent = languages[currentLang].changeFormat.footer.button
    submitButton.addEventListener('click', () => {
        if (level === '' || buttonNumTest === 0) {
            errorSound.play()
            footer.appendChild(errorMessage)
        } else {
            clickSound.play()
            middleContainer.remove()
            footerButtonRow.remove()

            footerStats.style.display = 'flex'
            flexContainer.style.display = 'flex'
            container.style.display = 'flex'

            createButtons(buttonNumTest, gridNumTest, indexTest)
        }
    });

    footerButtonRow.appendChild(submitButton)
}

function createButtons(format, gridNum, index) {

    console.log('rounds limit ' + roundsLimit)

    headerSides.innerHTML = ''
    container.style.display = 'flex'
    container.style.width = 'auto'
    flexContainer.style.display = 'flex'
    
    console.log("createButtons запущена!");
    console.log('format ' + format, 'grid num ' + gridNum, 'values index '+ index);
    console.log(values[index]);

    console.log(playerNick)
    console.log(secondPlayerNick)

    container.innerHTML = ''
    footer.innerHTML = ''
    header.innerHTML = ''
    // footerStats.innerHTML = ''

    header.appendChild(timerDiv)

    fieldLengthFormat = format
    gridFormat = gridNum
    buttonsIndex = index

    playerAvatar.textContent = splittedPlayerNick[0].toUpperCase()
    secondPlayerAvatar.textContent = splittedSecondPlayerNick[0].toUpperCase()

    const roundStats = document.createElement('p')
    roundStats.classList.add('round-stats')
    roundStats.textContent = `${playerWinCounter} : ${secondPlayerWinCounter}`

    header.appendChild(headerSides)

    headerSides.appendChild(playerAvatarDiv)
    headerSides.appendChild(roundStats)
    headerSides.appendChild(secondPlayerAvatarDiv)
    // const playerSideDiv = document.createElement('div')
    // playerSideDiv.classList.add('player-side-div')

    // const secondPlayerSideDiv = document.createElement('div')
    // secondPlayerSideDiv.classList.add('second-player-side-div')

    const divBox = document.createElement('div')
    divBox.classList.add('div-tictactoe-box')
    divBox.style.display = 'grid'
    divBox.style.gridTemplateColumns = `repeat(${gridNum}, 100px)`;
    divBox.style.gridTemplateRows = `repeat(${gridNum}, 100px)`;
    divBox.style.gap = '2px';
    container.appendChild(divBox)

    for (let i = 0; i < format; i++) {
        const buttonField = document.createElement('button')
        buttonField.classList.add(`tictactoe-button`)
        const coord = values[index][i]
        buttonField.value = coord
        buttonField.addEventListener('click', () => {
            clickSound.play()
            buttonField.style.color = '#63756b'
            if (level === 'hard') {
                buttonField.textContent = playerSide
                playerMoves.push(buttonField.value)
                buttonField.disabled = true;
                checkWinner(playerMoves, index, playerSide)
            } else if (level === 'Minimax') {
                // <<< ВАЖНО: отдельная ветка для limited depth minimax
                buttonField.textContent = playerSide;
                playerMoves.push(buttonField.value);
                buttonField.disabled = true;
                checkWinner(playerMoves, index, playerSide); // внутри вызовется useMinimax
                // Никаких переключений currentTurn здесь не нужно
            } else if (level === 'Limited Minimax') {
                // <<< ВАЖНО: отдельная ветка для monte carlo search
                buttonField.textContent = playerSide;
                playerMoves.push(buttonField.value);
                buttonField.disabled = true;
                checkWinner(playerMoves, index, playerSide); // внутри вызовется useMinimax
                // Никаких переключений currentTurn здесь не нужно
            }
            else if (level === 'MCTS') {
                // <<< ВАЖНО: отдельная ветка для minimax
                buttonField.textContent = playerSide;
                playerMoves.push(buttonField.value);
                buttonField.disabled = true;
                checkWinner(playerMoves, index, playerSide); // внутри вызовется useMinimax
                // Никаких переключений currentTurn здесь не нужно
            } else if (level === 'easy') {
                buttonField.textContent = playerSide
                playerMoves.push(buttonField.value)
                checkWinner(playerMoves, index, playerSide)
            } else {
                if (playerCurrentTurn === playerSide) {
                    buttonField.style.color = '#63756b'
                    const allButtons = [...document.querySelectorAll('.tictactoe-button')]
                    for (let i = 0; i < allButtons.length; i++) {
                        if (allButtons[i].textContent === '' && !playerMoves.includes(allButtons[i].value) 
                            && !secondPlayerMoves.includes(allButtons[i].value)) {
                            nonValuedButtons.push(allButtons[i])
                        }
                    }
                    buttonField.textContent = playerSide
                    playerMoves.push(buttonField.value)
                    buttonField.disabled = true
                    checkWinner(playerMoves, index, playerSide)
                    // Если сейчас ход у X, то сделай ход у O. Если сейчас ход у O, то сделай ход у X
                    playerCurrentTurn = playerCurrentTurn === 'Х' ? 'О' : 'Х'
                    
                } else {
                    buttonField.style.color = '#a4c3b2'
                    const allButtons = [...document.querySelectorAll('.tictactoe-button')]
                    for (let i = 0; i < allButtons.length; i++) {
                        if (allButtons[i].textContent === '' && !playerMoves.includes(allButtons[i].value) 
                            && !secondPlayerMoves.includes(allButtons[i].value)) {
                            nonValuedButtons.push(allButtons[i])
                        }
                    }
                    buttonField.textContent = secondPlayerSide
                    secondPlayerMoves.push(buttonField.value)
                    buttonField.disabled = true
                    checkWinner(secondPlayerMoves, index, secondPlayerSide)
                    // Если сейчас ход у X, то сделай ход у O. Если сейчас ход у O, то сделай ход у X
                    playerCurrentTurn = playerCurrentTurn === 'Х' ? 'О' : 'Х'
                }
            }
        });
        divBox.appendChild(buttonField)
    }

    displayRoundInfo()
}

function stopGame() {
    toggleDiv.style.display = 'none'

    stopGameButtonRow.style.display = 'flex'

    const allButtons = [...document.querySelectorAll('.tictactoe-button')]
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true
    }

    signLeft.style.transform = 'translateY(0)'
    signRight.style.transform = 'translateY(0)'

    console.log('game over')

    // const line = document.createElement('hr')
    // line.classList.add('game-over-line')
    // footerStats.appendChild(line)

    const goText = document.createElement('h1')
    goText.classList.add('go-text')
    goText.textContent = 'Выберите поле'

    if (timeLimit !== 0) {

        const nextRoundButton = document.createElement('button')
        nextRoundButton.classList.add('next-round-button')
        nextRoundButton.textContent = languages[currentLang].roundResults.buttons.nextRound
        nextRoundButton.addEventListener('mouseenter', () => {
            signLeft.style.transform = 'translateY(-30px)'
            signRight.style.transform = 'translateY(30px)'
            signLeft.style.color = '#00000015'
            signRight.style.color = '#00000015'
        });
        nextRoundButton.addEventListener('mouseleave', () => {
            signLeft.style.transform = 'translateY(0)'
            signRight.style.transform = 'translateY(0'
            signLeft.style.color = '#00000010'
            signRight.style.color = '#00000010'
        });
        nextRoundButton.addEventListener('click', () => {
            stopGameButtonRow.style.boxShadow = 'none'
            toggleDiv.style.display = 'flex'
            resultsContainer.innerHTML = ''
            container.style.marginRight = '0px'
            clickSound.play()
            clearPage()
            createButtons(fieldLengthFormat, gridFormat, buttonsIndex)
            // header.appendChild(goText)
        });

        const changeLevelButton = document.createElement('button')
        changeLevelButton.classList.add('change-level-button')
        changeLevelButton.textContent = languages[currentLang].roundResults.buttons.changeFormat
        changeLevelButton.addEventListener('click', () => {
            stopGameButtonRow.style.boxShadow = 'none'
            container.style.marginRight = '0px'
            resultsContainer.innerHTML = ''
            clickSound.play()
            clearPage()
            chooseFormatMenu()
        });

        const seeResultsButton = document.createElement('button')
        seeResultsButton.classList.add('see-results-button')
        seeResultsButton.textContent = languages[currentLang].roundResults.buttons.checkResults
        seeResultsButton.addEventListener('click', () => {
            clickSound.play()
            container.style.display = 'none'
            container.style.borderRadius = '30px'
            container.innerHTML = ''
            header.innerHTML = ''
            footerStats.innerHTML = ''
            signLeft.style.display = 'none'
            signRight.style.display = 'none'

            const existingPlayer = users.find(user => user.nick === playerNick)
            const existingSecondPlayer = users.find(user => user.nick === secondPlayerNick)

            let winRate = Math.round((playerWinCounter / roundCounter) * 100)
            let secondPlayerWinRate = Math.round((secondPlayerWinCounter / roundCounter) * 100)

            if (existingPlayer) {
                existingPlayer.stats = winRate
                existingPlayer.rounds = roundCounter
                existingPlayer.coefficient = (winRate * roundCounter)/100

            } else {
                user = createPlayerStats(playerNick, winRate, roundCounter, (winRate * roundCounter)/100)
                users.push(user); // добавляем в массив
                localStorage.setItem('users', JSON.stringify(users)); // сохраняем
            }
            if (existingSecondPlayer) {
                existingSecondPlayer.stats = secondPlayerWinRate
                existingSecondPlayer.rounds = roundCounter
                existingSecondPlayer.coefficient = (secondPlayerWinRate * roundCounter)/100

            } else {
                user = createPlayerStats(secondPlayerNick, secondPlayerWinRate, roundCounter, (secondPlayerWinRate * roundCounter)/100)
                users.push(user); // добавляем в массив
                localStorage.setItem('users', JSON.stringify(users)); // сохраняем
            }
            nonValuedButtons = []
            playerMoves = []
            secondPlayerMoves = []
            showResults()
        });

        const menuButton = document.createElement('button')
        menuButton.classList.add('menu-button')
        const icon = document.createElement('img')
        icon.classList.add('menu-button-arrow')
        icon.src = 'images/arrow.png'
        icon.alt = 'Left-Arrow'
        menuButton.textContent = languages[currentLang].roundResults.buttons.quit
        menuButton.appendChild(icon)
        menuButton.addEventListener('click', () => {
            container.style.display = 'flex'
            stopGameButtonRow.style.boxShadow = 'none'
            resultsContainer.innerHTML = ''
            playerSide = ''
            secondPlayerSide = ''
            playerCurrentTurn = ''
            level = ''
            buttonNumTest = 0
            gridNumTest = 0
            indexTest = 0
            container.style.marginRight = '0px'
            menuSound.play()
            clearPage()
            playerWinCounter = 0
            secondPlayerWinCounter = 0
            roundCounter = 0
            roundsLimit = 'infinite rounds'
            middleContainer.innerHTML = ''
            writeNicknameMenu()
        });

        stopGameButtonRow.appendChild(nextRoundButton)
        stopGameButtonRow.appendChild(changeLevelButton)
        stopGameButtonRow.appendChild(seeResultsButton)
        stopGameButtonRow.appendChild(menuButton)
        footer.appendChild(stopGameButtonRow)

    } else {
        console.log(timeLimit)
        footer.innerHTML = ''
        stopGameButtonRow.remove()

        const seeResultsButton = document.createElement('button')
        seeResultsButton.classList.add('see-results-button')
        seeResultsButton.textContent = languages[currentLang].roundResults.buttons.checkResults
        seeResultsButton.addEventListener('click', () => {
            clickSound.play()
            container.style.display = 'none'
            container.style.borderRadius = '30px'
            container.innerHTML = ''
            header.innerHTML = ''
            footerStats.innerHTML = ''
            signLeft.style.display = 'none'
            signRight.style.display = 'none'

            const existingPlayer = users.find(user => user.nick === playerNick)
            const existingSecondPlayer = users.find(user => user.nick === secondPlayerNick)

            let winRate = Math.round((playerWinCounter / roundCounter) * 100)
            let secondPlayerWinRate = Math.round((secondPlayerWinCounter / roundCounter) * 100)

            if (existingPlayer) {
                existingPlayer.stats = winRate
                existingPlayer.rounds = roundCounter
                existingPlayer.coefficient = (winRate * roundCounter)/100

            } else {
                user = createPlayerStats(playerNick, winRate, roundCounter, (winRate * roundCounter)/100)
                users.push(user); // добавляем в массив
                localStorage.setItem('users', JSON.stringify(users)); // сохраняем
            }
            if (existingSecondPlayer) {
                existingSecondPlayer.stats = secondPlayerWinRate
                existingSecondPlayer.rounds = roundCounter
                existingSecondPlayer.coefficient = (secondPlayerWinRate * roundCounter)/100

            } else {
                user = createPlayerStats(secondPlayerNick, secondPlayerWinRate, roundCounter, (secondPlayerWinRate * roundCounter)/100)
                users.push(user); // добавляем в массив
                localStorage.setItem('users', JSON.stringify(users)); // сохраняем
            }
            nonValuedButtons = []
            playerMoves = []
            secondPlayerMoves = []
            showResults()
        });

        const menuButton = document.createElement('button')
        menuButton.classList.add('menu-button')
        const icon = document.createElement('img')
        icon.classList.add('menu-button-arrow')
        icon.src = 'images/arrow.png'
        icon.alt = 'Left-Arrow'
        menuButton.textContent = languages[currentLang].roundResults.buttons.quit
        menuButton.appendChild(icon)
        menuButton.addEventListener('click', () => {
            stopGameButtonRow.style.boxShadow = 'none'
            resultsContainer.innerHTML = ''
            playerSide = ''
            secondPlayerSide = ''
            playerCurrentTurn = ''
            level = ''
            buttonNumTest = 0
            gridNumTest = 0
            indexTest = 0
            container.style.marginRight = '0px'
            menuSound.play()
            clearPage()
            playerWinCounter = 0
            secondPlayerWinCounter = 0
            roundCounter = 0
            roundsLimit = 'infinite rounds'
            middleContainer.innerHTML = ''
            writeNicknameMenu()
        });

        stopGameButtonRow.appendChild(seeResultsButton)
        stopGameButtonRow.appendChild(menuButton)
        footer.appendChild(stopGameButtonRow)
    }
}

function showResults() {
    container.style.display = 'none'
    resultsContainer.innerHTML = ''
    stopGameButtonRow.style.padding = '20px'
    stopGameButtonRow.style.borderRadius = '20px'
    stopGameButtonRow.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.103)'
    mainContainer.style.height = 'auto'
    mainContainer.style.width = 'auto'

    let imgCrown = document.createElement('img')
    imgCrown.classList.add('results-crown')
    imgCrown.src = 'images/crown.png'
    imgCrown.alt = 'crown'

    gif.src = 'images/tictactoe.gif'
    gif.alt = 'gif'
    gif.style.opacity = '0.7'

    mainContainer.appendChild(resultsContainer)

    const leftInfoContainer = document.createElement('div')
    leftInfoContainer.classList.add('left-info-container')
    mainContainer.appendChild(leftInfoContainer)

    const middleInfoContainer = document.createElement('div')
    middleInfoContainer.classList.add('middle-info-container')
    mainContainer.appendChild(middleInfoContainer)

    foundSecondPlayer = users.find(user => user.nick === secondPlayerNick)
    foundPlayer = users.find(user => user.nick === playerNick)

    console.log(`rounds played ${roundCounter}`)
    console.log(`player wins ${playerWinCounter} (${(playerWinCounter / roundCounter) * 100}%)`)
    console.log(`AI wins ${secondPlayerWinCounter} (${(secondPlayerWinCounter / roundCounter) * 100}%)`)

    headerTitle.textContent = languages[currentLang].checkResults.header.title
    headerSubtitle.textContent = languages[currentLang].checkResults.header.subtitle
    header.appendChild(headerTitle)
    header.appendChild(headerSubtitle)

    // Main Player stats
    const statsHeaderDiv1 = document.createElement('div')
    statsHeaderDiv1.classList.add('stats-header-div')    
    middleInfoContainer.appendChild(statsHeaderDiv1)

    const statsTitleDiv = document.createElement('div')
    statsTitleDiv.classList.add('stats-title-div')
    statsHeaderDiv1.appendChild(statsTitleDiv)

    const statsTitle = document.createElement('h1')
    statsTitle.classList.add('stats-title')
    statsTitle.textContent = languages[currentLang].checkResults.leftContainer.title

    const statsNick = document.createElement('h1')
    statsNick.classList.add('stats-nick')
    statsNick.textContent = playerNick

    statsTitleDiv.appendChild(statsTitle)
    statsTitleDiv.appendChild(statsNick)

    const line = document.createElement('hr')
    line.classList.add('results-header-line')
    statsTitleDiv.appendChild(line)

    const player1Title = document.createElement('h1')
    player1Title.classList.add('player-title')
    player1Title.textContent = 'PLAYER #1'
    middleInfoContainer.appendChild(player1Title)

    const statsDiv = document.createElement('div')
    statsDiv.classList.add('stats-div')
    middleInfoContainer.appendChild(statsDiv)

    const statsPercentDiv = document.createElement('div')
    statsPercentDiv.classList.add('stats-per-cent-div')
    statsDiv.appendChild(statsPercentDiv)

    const statsRoundsDiv = document.createElement('div')
    statsRoundsDiv.classList.add('stats-rounds-div')
    statsDiv.appendChild(statsRoundsDiv)

    statsPercent.textContent = `${foundPlayer.stats}%`
    const statsPercentSubtitle = document.createElement('p')
    statsPercentSubtitle.classList.add('stats-per-cent-subtitle')
    statsPercentSubtitle.textContent = languages[currentLang].checkResults.leftContainer.wins

    statsPercentDiv.appendChild(statsPercent)
    statsPercentDiv.appendChild(statsPercentSubtitle)

    const statsRounds = document.createElement('h1')
    statsRounds.classList.add('stats-rounds')
    statsRounds.textContent = foundPlayer.rounds

    const statsRoundSubtitle = document.createElement('p')
    statsRoundSubtitle.classList.add('stats-round-subtitle')
    statsRoundSubtitle.textContent = languages[currentLang].checkResults.leftContainer.rounds

    statsRoundsDiv.appendChild(statsRounds)
    statsRoundsDiv.appendChild(statsRoundSubtitle)

    const showOthersButton = document.createElement('button')
    showOthersButton.classList.add('show-other-players-button')
    showOthersButton.textContent = languages[currentLang].checkResults.leftContainer.button
    showOthersButton.addEventListener('click', () => {
        clickSound.play()
        gif.remove()
        stopGameButtonRow.style.display = 'none'
        signLeft.style.display = 'none'
        signRight.style.display = 'none'
        resultsContainer.style.display = 'none'
        showOthers()
    });
    middleInfoContainer.appendChild(showOthersButton)

    resultsContainer.appendChild(middleInfoContainer)

    const rightInfoContainer = document.createElement('div')
    rightInfoContainer.classList.add('right-info-container')
    resultsContainer.appendChild(rightInfoContainer)

    rightInfoContainer.appendChild(gif)
    rightInfoContainer.appendChild(stopGameButtonRow)

    // Second Player stats
    const statsHeaderDiv2 = document.createElement('div')
    statsHeaderDiv2.classList.add('stats-header-div')
    leftInfoContainer.appendChild(statsHeaderDiv2)

    if (foundPlayer.stats > foundSecondPlayer.stats) {
        imgCrown.style.marginLeft = '10px'
        statsHeaderDiv1.appendChild(imgCrown)
    } else if (foundPlayer.stats === foundSecondPlayer.stats) {
        imgCrown.remove()
    } else { 
        imgCrown.style.marginRight = '10px'
        statsHeaderDiv2.appendChild(imgCrown)
    }

    const statsTitleDiv2 = document.createElement('div')
    statsTitleDiv2.classList.add('stats-title-div')
    statsHeaderDiv2.appendChild(statsTitleDiv2)

    const statsTitle2 = document.createElement('h1')
    statsTitle2.classList.add('stats-title')
    statsTitle2.textContent = languages[currentLang].checkResults.leftContainer.title

    const statsNick2 = document.createElement('h1')
    statsNick2.classList.add('stats-nick')
    statsNick2.textContent = secondPlayerNick

    statsTitleDiv2.appendChild(statsTitle2)
    statsTitleDiv2.appendChild(statsNick2)

    const line2 = document.createElement('hr')
    line2.classList.add('results-header-line')
    statsTitleDiv2.appendChild(line2)

    const player2Title = document.createElement('h1')
    player2Title.classList.add('player-title')
    player2Title.textContent = 'PLAYER #2'
    leftInfoContainer.appendChild(player2Title)

    const statsDiv2 = document.createElement('div')
    statsDiv2.classList.add('stats-div')
    leftInfoContainer.appendChild(statsDiv2)

    const statsPercentDiv2 = document.createElement('div')
    statsPercentDiv2.classList.add('stats-per-cent-div')
    statsDiv2.appendChild(statsPercentDiv2)

    const statsRoundsDiv2 = document.createElement('div')
    statsRoundsDiv2.classList.add('stats-rounds-div')
    statsDiv2.appendChild(statsRoundsDiv2)

    statsPercent2.textContent = `${foundSecondPlayer.stats}%`
    const statsPercentSubtitle2 = document.createElement('p')
    statsPercentSubtitle2.classList.add('stats-per-cent-subtitle')
    statsPercentSubtitle2.textContent = languages[currentLang].checkResults.leftContainer.wins

    statsPercentDiv2.appendChild(statsPercent2)
    statsPercentDiv2.appendChild(statsPercentSubtitle2)

    const statsRounds2 = document.createElement('h1')
    statsRounds2.classList.add('stats-rounds')
    statsRounds2.textContent = foundSecondPlayer.rounds

    const statsRoundSubtitle2 = document.createElement('p')
    statsRoundSubtitle2.classList.add('stats-round-subtitle')
    statsRoundSubtitle2.textContent = languages[currentLang].checkResults.leftContainer.rounds

    statsRoundsDiv2.appendChild(statsRounds2)
    statsRoundsDiv2.appendChild(statsRoundSubtitle2)

    resultsContainer.appendChild(leftInfoContainer)
}

function showOthers() {
    header.innerHTML = ''
    flexContainer.style.display = 'flex'
    container.innerHTML = ''
    container.style.display = 'flex'
    container.style.justifyContent = 'flex-start'
    container.style.marginRight = '0px'

    container.style.width = '750px'
    const sortedUsers = users.sort((a, b) => {
        if (a.stats > b.stats) {
            return -1;   // если a больше b → a идёт раньше
        } else if (a.stats < b.stats) {
            return 1;  // если a меньше b → a идёт позже
        } else if (a.stats === b.stats) {
            if (a.coefficient > b.coefficient) {
                return -1
            } else if (a.coefficient < b.coefficient) {
                return 1
            } else {
                return 0 // равны → порядок не меняем
            } 
        }
    });

    headerTitle.textContent = languages[currentLang].stats.header.title
    headerSubtitle.textContent = languages[currentLang].stats.header.subtitle
    header.appendChild(headerTitle)
    header.appendChild(headerSubtitle)

    const tableDiv = document.createElement('div')
    tableDiv.classList.add('table-div')
    container.appendChild(tableDiv)

    const nickLabel = document.createElement('h1')
    nickLabel.classList.add('nick-label')
    nickLabel.textContent = languages[currentLang].stats.row1

    const perCentLabel = document.createElement('h1')
    perCentLabel.classList.add('per-cent-label')
    perCentLabel.textContent = languages[currentLang].stats.row2

    const roundsDivLabel = document.createElement('h1')
    roundsDivLabel.classList.add('rounds-label')
    roundsDivLabel.textContent = languages[currentLang].stats.row3

    const descriptionRow = document.createElement('div')
    descriptionRow.classList.add('description-row')
    tableDiv.appendChild(descriptionRow)

    descriptionRow.appendChild(nickLabel)
    descriptionRow.appendChild(perCentLabel)
    descriptionRow.appendChild(roundsDivLabel)

    const playerRow = document.createElement('div')
    playerRow.classList.add('player-row')

    const nickDiv = document.createElement('div')
    nickDiv.classList.add('others-player-nick-div')
    playerRow.appendChild(nickDiv)

    const winsDiv = document.createElement('div')
    winsDiv.classList.add('others-player-wins-div')
    playerRow.appendChild(winsDiv)

    const roundsDiv = document.createElement('div')
    roundsDiv.classList.add('others-player-rounds-div')
    playerRow.appendChild(roundsDiv)

    const secondPlayerRow = document.createElement('div')
    secondPlayerRow.classList.add('second-player-row')

    const secondPlayerNickDiv = document.createElement('div')
    secondPlayerNickDiv.classList.add('others-second-player-nick-div')
    secondPlayerRow.appendChild(secondPlayerNickDiv)

    const secondPlayerWinsDiv = document.createElement('div')
    secondPlayerWinsDiv.classList.add('others-second-player-wins-div')
    secondPlayerRow.appendChild(secondPlayerWinsDiv)

    const secondPlayerRoundsDiv = document.createElement('div')
    secondPlayerRoundsDiv.classList.add('others-second-player-rounds-div')
    secondPlayerRow.appendChild(secondPlayerRoundsDiv)

    for (let i = 0; i < sortedUsers.length; i++) {
        const otherPlayerRow = document.createElement('div')
        otherPlayerRow.classList.add('other-player-row')
        tableDiv.appendChild(otherPlayerRow)

        const otherNicksDiv = document.createElement('div')
        otherNicksDiv.classList.add('other-nicks-div')
        otherPlayerRow.appendChild(otherNicksDiv)

        const otherWindsDiv = document.createElement('div')
        otherWindsDiv.classList.add('other-wins-div')
        otherPlayerRow.appendChild(otherWindsDiv)

        const otherRoundsDiv = document.createElement('div')
        otherRoundsDiv.classList.add('other-rounds-div')
        otherPlayerRow.appendChild(otherRoundsDiv)

        if (sortedUsers[i].nick !== playerNick && sortedUsers[i].nick !== secondPlayerNick) {
            let playerPlace = document.createElement('p')
            playerPlace.classList.add('other-player-row-place')
            let imgCrown = document.createElement('img')
            imgCrown.classList.add('player-row-first-place')
            imgCrown.src = 'images/crown.png'
            imgCrown.alt = 'crown'

            // otherPlayerPlace.textContent = `#${i+1}`
            if (i === 0) {
                playerPlace.replaceWith(imgCrown)
                playerPlace = imgCrown
            } else {
                playerPlace.textContent = `#${i+1}`
            }

            const otherPlayerRowNick = document.createElement('p')
            otherPlayerRowNick.classList.add('other-player-row-nick-name')
            otherPlayerRowNick.textContent = `${sortedUsers[i].nick}`
            otherNicksDiv.appendChild(playerPlace)
            otherNicksDiv.appendChild(otherPlayerRowNick)

            const otherPlayerRowWins = document.createElement('p')
            otherPlayerRowWins.classList.add('other-player-row-wins')
            otherPlayerRowWins.textContent = `${sortedUsers[i].stats}%`
            otherWindsDiv.appendChild(otherPlayerRowWins)

            const otherPlayerRowRounds = document.createElement('p')
            otherPlayerRowRounds.classList.add('other-player-row-rounds')
            otherPlayerRowRounds.textContent = sortedUsers[i].rounds
            otherRoundsDiv.appendChild(otherPlayerRowRounds)

        } else if (sortedUsers[i].nick === playerNick) {
            tableDiv.appendChild(playerRow)

            let playerPlace = document.createElement('p')
            playerPlace.classList.add('player-row-place')
            let imgCrown = document.createElement('img')
            imgCrown.classList.add('player-row-first-place')
            imgCrown.src = 'images/crown.png'
            imgCrown.alt = 'crown'

            // otherPlayerPlace.textContent = `#${i+1}`
            if (i === 0) {
                playerPlace.replaceWith(imgCrown)
                playerPlace = imgCrown
            } else {
                playerPlace.textContent = `#${i+1}`
            }

            const playerRowNick = document.createElement('p')
            playerRowNick.classList.add('player-row-nick-name')
            playerRowNick.textContent = sortedUsers[i].nick + " " + languages[currentLang].stats.firstPlayer
            nickDiv.appendChild(playerPlace)
            nickDiv.appendChild(playerRowNick)

            const playerRowWins = document.createElement('p')
            playerRowWins.classList.add('player-row-wins')
            playerRowWins.textContent = `${sortedUsers[i].stats}%`
            winsDiv.appendChild(playerRowWins)

            const playerRowRounds = document.createElement('p')
            playerRowRounds.classList.add('player-row-rounds')
            playerRowRounds.textContent = sortedUsers[i].rounds
            roundsDiv.appendChild(playerRowRounds)

        } else if (sortedUsers[i].nick === secondPlayerNick) {
            tableDiv.appendChild(secondPlayerRow)

            let playerPlace = document.createElement('p')
            playerPlace.classList.add('second-player-row-place')
            let imgCrown = document.createElement('img')
            imgCrown.classList.add('player-row-first-place')
            imgCrown.src = 'images/crown.png'
            imgCrown.alt = 'crown'

            // otherPlayerPlace.textContent = `#${i+1}`
            if (i === 0) {
                playerPlace.replaceWith(imgCrown)
                playerPlace = imgCrown
            } else {
                playerPlace.textContent = `#${i+1}`
            }

            const playerRowNick = document.createElement('p')
            playerRowNick.classList.add('second-player-row-nick-name')
            playerRowNick.textContent = sortedUsers[i].nick + " " + languages[currentLang].stats.secondPlayer
            secondPlayerNickDiv.appendChild(playerPlace)
            secondPlayerNickDiv.appendChild(playerRowNick)

            const playerRowWins = document.createElement('p')
            playerRowWins.classList.add('second-player-row-wins')
            playerRowWins.textContent = `${sortedUsers[i].stats}%`
            secondPlayerWinsDiv.appendChild(playerRowWins)

            const playerRowRounds = document.createElement('p')
            playerRowRounds.classList.add('second-player-row-rounds')
            playerRowRounds.textContent = sortedUsers[i].rounds
            secondPlayerRoundsDiv.appendChild(playerRowRounds)
        }
    }

    const backButton = document.createElement('button')
    backButton.classList.add('show-others-back-button')
    backButton.textContent = languages[currentLang].stats.button
    backButton.addEventListener('click', () => {
        clickSound.play()
        resultsContainer.style.display = 'flex'
        stopGameButtonRow.style.display = 'flex'
        showResults()
    });
    container.appendChild(backButton)
}

function displayRoundInfo() {
    // const footerStats = document.createElement('div')
    // footerStats.classList.add('footer-stats')
    // footer.appendChild(footerStats)

    toggleText.textContent = languages[currentLang].field.aiThinks

    const roundInfo = document.createElement('div')
    roundInfo.classList.add('round-info')
    footerStats.appendChild(roundInfo)

    const roundDiv = document.createElement('div')
    roundDiv.classList.add('footer-stats-round-div')

    const round = document.createElement('p')
    round.classList.add('footer-round-text')
    round.textContent = languages[currentLang].field.statsRound.rounds

    const roundCounted = document.createElement('h1')
    roundCounted.classList.add('footer-round-count')
    roundCounted.textContent = `${roundCounter + 1}`

    const levelDiv = document.createElement('div')
    levelDiv.classList.add('footer-stats-level-div')

    const level1 = document.createElement('p')
    level1.classList.add('footer-level-text')
    level1.textContent = languages[currentLang].field.statsRound.level

    const level1Shown = document.createElement('h1')
    level1Shown.classList.add('footer-level-shown')
    level1Shown.textContent = languages[currentLang].field.statsRound.levelInfo + " " + `(${level})`

    roundInfo.appendChild(roundDiv)
    roundInfo.appendChild(levelDiv)

    roundDiv.appendChild(round)
    roundDiv.appendChild(roundCounted)
    levelDiv.appendChild(level1)
    levelDiv.appendChild(level1Shown)

    if (level !== '2 players') {
        if (footerStats.contains(toggleDiv)) {
            toggleDiv.remove();
        } else {
            footerStats.appendChild(toggleDiv)
            if (!toggle.dataset.listenerAdded) {
                toggle.addEventListener('click', () => {
                    toggle.classList.toggle('active')
                    if (toggle.classList.contains('active')) {
                        aiThinking = true
                        console.log('ai thinks = ' + aiThinking)
                    } else {
                        aiThinking = false
                        console.log('ai thinks = ' + aiThinking)
                    }
                });

                toggle.dataset.listenerAdded = 'true'
            }
        }
    }
}

function clearPage() {
    gif.remove()
    container.style.height = 'auto'
    container.style.borderRadius = '20px'
    signLeft.style.display = 'none'
    signRight.style.display = 'none'
    footerStats.innerHTML = ''
    stopGameButtonRow.innerHTML = ''
    flexContainer.appendChild(container)
    nonValuedButtons = []
    playerMoves = []
    secondPlayerMoves = []
}

function createSecondPlayerNick() {
    const randomNicks = ['bob', 'Jarvis', 'helloKite', 'kitten', 'quteBoy', 
        'marshal', 'abuser', 'propropro', 'TTTKiller']
    const randomNumbers = getRandomInt(0, 5000)
    const randomSecondPlayerNick1 = randomNicks[getRandomInt(0, randomNicks.length)] + randomNumbers
    const randomSecondPlayerNick2 = randomNicks[getRandomInt(0, randomNicks.length)]

    if (randomSecondPlayerNick1.length <= 12) {
        console.log(randomSecondPlayerNick1)
        return randomSecondPlayerNick1
    } else { 
        console.log(randomSecondPlayerNick2)
        return randomSecondPlayerNick2
    }
}

function createPlayerStats(name, stat, round, coeff, date) {
    return {
        nick: name,
        stats: stat,
        rounds: round,
        coefficient: coeff,
        registrDate: date
    }
}

function createThinkingLabel(func) {
    let progressContainer = document.querySelector('.progress-container');
    let progressBar;

    const allButtons = [...document.querySelectorAll('.tictactoe-button')]
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true
    }

    // если не существует прогресс контейнера
    if (!progressContainer) {
        progressContainer = document.createElement('div');
        progressContainer.classList.add('progress-container');
        progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressContainer.appendChild(progressBar);
        container.appendChild(progressContainer);
    // если существует - берём существующий прогресс бар из существующего контейнера
    } else {
        progressBar = progressContainer.querySelector('.progress-bar');
    }

    let timeLeft = 100;
    progressContainer.style.display = 'block';
    progressBar.style.width = '100%';

    const interval = setInterval(() => {
        timeLeft -= 1;
        progressBar.style.width = `${timeLeft}%`;

        if (timeLeft <= 0) {
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].disabled = false
            }
            clearInterval(interval);
            progressContainer.style.display = 'none';
            func(); // вызывается только после прогресса
        }
    }, 10);
}

function uniquePlayers() {
    return users.filter((user, index, self) => {
        if (index === self.findIndex(u => u.nick === user.nick)) {
            return true; // оставить элемент
        } else {
            return false; // убрать элемент
        }
    });
}

function checkScoresToSwitch() {
    if (switchGame === true) {
        if (!statsSwitched && roundCounter >= Math.floor(roundsLimit / 2)) {
            let copiedPlayerWinCounter = playerWinCounter
            playerWinCounter = secondPlayerWinCounter
            secondPlayerWinCounter = copiedPlayerWinCounter

            // [playerWinCounter, secondPlayerWinCounter] = [secondPlayerWinCounter, playerWinCounter]

            statsSwitched = true

            console.log('/////////////////////')
            console.log('SCORES SWITCHED')
            console.log('stats switched = ' + statsSwitched)
            console.log(switchGame)
            console.log(playerWinCounter)
            console.log(secondPlayerWinCounter)
        } 
    }
}

function checkWinner(array, index, side) {

    checkScoresToSwitch()

    const goText = document.createElement('h1')
    goText.classList.add('go-text')
    goText.textContent = 'Ходите...'

    let titleResult = document.createElement('h1')
    titleResult.classList.add('title-result')

    // let subtitleResult = document.createElement('p')
    // subtitleResult.classList.add('subtitle-result')

    if (nonValuedButtons) {

        // true/false если выигрыш
        const isWinner = winMoves[index].some(arr =>
            arr.every(element =>
                array.includes(element))
        )

        // win array если выигрыш
        const winMovePos = winMoves[index].find(arr =>
            arr.every(element =>
                array.includes(element))
        )
        if (roundsLimit !== 'infinite rounds' && roundCounter === roundsLimit) {
            titleResult.textContent = `Игра окончена`
            drawSound.play()
            titleResult.style.color = 'rgba(0, 0, 0, 0.36)'
            stopGame()
        }
        if (isWinner === false) {
            playerGoMark.style.backgroundColor = '#a4c3b2'
            secondPlayerGoMark.style.backgroundColor = '#ffffffff'

            if (playerMoves.length + secondPlayerMoves.length === buttonNumTest) {
                playerGoMark.style.backgroundColor = '#ffffffff'
                secondPlayerGoMark.style.backgroundColor = '#ffffffff'
                drawSound.play()
                roundCounter += 1
                signLeft.textContent = playerSide
                signRight.textContent = secondPlayerSide
                titleResult.textContent = toggleText.textContent = languages[currentLang].roundResults.title.draw
                titleResult.style.color = 'rgba(0, 0, 0, 0.36)'
                header.appendChild(titleResult)
                stopGame() // Ничья
            } else if (side === playerSide && level === 'hard') {
                goText.remove()
                playerGoMark.style.backgroundColor = '#ffffffff'
                useSemiHardAi(index)
            } else if (side === playerSide && level === 'Minimax' && gridNumTest === 3) {
                playerGoMark.style.backgroundColor = '#ffffffff'
                secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
                if (aiThinking === true) {
                    createThinkingLabel(() => useMinimax(index));
                } else {
                    useMinimax(index)
                }
                // useMinimax(index)
            } else if (side === playerSide && level === 'Limited Minimax') {
                playerGoMark.style.backgroundColor = '#ffffffff'
                secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
                if (aiThinking === true) {
                    createThinkingLabel(() => useDepthLimitedMinimax(index, 3));
                } else {
                    useDepthLimitedMinimax(index, 3)
                }
                // useDepthLimitedMinimax(index, 3)
            } else if (side === playerSide && level === 'MCTS') {
                playerGoMark.style.backgroundColor = '#ffffffff'
                secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
                if (aiThinking === true) {
                    createThinkingLabel(() => useMonteCarloMove(index));
                } else {
                    useMonteCarloMove(index)
                }
                // useMonteCarloMove(index)
            }
            else if (side === playerSide && level === 'easy') {
                playerGoMark.style.backgroundColor = '#ffffffff'
                secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
                useSimpleAi(index)
            } else if (playerCurrentTurn === secondPlayerSide && level === '2 players') {
                secondPlayerGoMark.style.backgroundColor = '#ffffffff'
                playerGoMark.style.backgroundColor = '#a4c3b2'
            } else if (playerCurrentTurn === playerSide && level === '2 players') {
                secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
                playerGoMark.style.backgroundColor = '#ffffffff'
            }

        } else if (isWinner === true) {
            playerGoMark.style.backgroundColor = '#ffffffff'
            secondPlayerGoMark.style.backgroundColor = '#ffffffff'

            if (side === playerSide) {
                successSound.play()
                goText.remove()
                statsPercent.style.backgroundColor = '#a4c3b22c'
                statsPercent.style.color = '#a4c3b2'
                statsPercent2.style.backgroundColor = '#caa2a25e'
                statsPercent2.style.color = '#caa2a2ff'
                signLeft.style.display = 'flex'
                signRight.style.display = 'flex'
                signLeft.textContent = playerSide
                signRight.textContent = playerSide
                titleResult.textContent = languages[currentLang].roundResults.title.win
                titleResult.style.color = 'rgba(0, 0, 0, 0.36)'
                header.appendChild(titleResult)
                playerWinCounter += 1
                secondPlayerWinCounter += 0
                roundCounter += 1
                console.log(`${playerSide} PLAYER WON`)
                stopGame()
                displayWinner(winMovePos, playerSide)
                nonValuedButtons = []
            } else if (side === secondPlayerSide && level !== 'hard' && level !== 'easy' && level !== '2 players') {
                failureSound.play()
                goText.remove()
                statsPercent.style.backgroundColor = '#caa2a25e'
                statsPercent.style.color = '#caa2a2ff'
                statsPercent2.style.backgroundColor = '#a4c3b22c'
                statsPercent2.style.color = '#a4c3b2'
                signLeft.style.display = 'flex'
                signRight.style.display = 'flex'
                signLeft.textContent = secondPlayerSide
                signRight.textContent = secondPlayerSide
                titleResult.textContent = languages[currentLang].roundResults.title.loss
                // titleResult.style.color = '#caa2a2ff'
                titleResult.style.color = 'rgba(0, 0, 0, 0.36)'
                header.appendChild(titleResult)
                playerWinCounter += 0
                secondPlayerWinCounter += 1
                roundCounter += 1
                console.log(`${secondPlayerSide} AI WON`)
                displayWinner(winMovePos, secondPlayerSide)
                stopGame()
                nonValuedButtons = []
            }
            else if (side === secondPlayerSide && level === 'hard') {
                failureSound.play()
                goText.remove()
                statsPercent.style.backgroundColor = '#caa2a25e'
                statsPercent.style.color = '#caa2a2ff'
                statsPercent2.style.backgroundColor = '#a4c3b22c'
                statsPercent2.style.color = '#a4c3b2'
                signLeft.style.display = 'flex'
                signRight.style.display = 'flex'
                signLeft.textContent = secondPlayerSide
                signRight.textContent = secondPlayerSide
                titleResult.textContent = languages[currentLang].roundResults.title.loss
                titleResult.style.color = '#caa2a2ff'
                header.appendChild(titleResult)
                playerWinCounter += 0
                secondPlayerWinCounter += 1
                roundCounter += 1
                console.log(`${secondPlayerSide} AI WON`)
                displayWinner(winMovePos, secondPlayerSide)
                nonValuedButtons = []
            } else if (side === secondPlayerSide && level === '2 players') {
                failureSound.play()
                goText.remove()
                statsPercent.style.backgroundColor = '#caa2a25e'
                statsPercent.style.color = '#caa2a2ff'
                statsPercent2.style.backgroundColor = '#a4c3b22c'
                statsPercent2.style.color = '#a4c3b2'
                signLeft.style.display = 'flex'
                signRight.style.display = 'flex'
                signLeft.textContent = secondPlayerSide
                signRight.textContent = secondPlayerSide
                titleResult.textContent = languages[currentLang].roundResults.title.loss
                // titleResult.style.color = '#caa2a2ff'
                titleResult.style.color = 'rgba(0, 0, 0, 0.36)'

                playerWinCounter += 0
                secondPlayerWinCounter += 1
                roundCounter += 1
                console.log(`${secondPlayerSide} AI WON`)
                stopGame()
                displayWinner(winMovePos, secondPlayerSide)
                nonValuedButtons = []
            }
        }
    }
}

function displayWinner(buttonsWinMove, side) {
    const allButtons = [...document.querySelectorAll('.tictactoe-button')]

    if (side === playerSide) {
        for (let i = 0; i < buttonsWinMove.length; i++) {
            const button = allButtons.find(button1 => button1.value === buttonsWinMove[i])
            button.style.backgroundColor = '#a4c3b2'
            button.style.color = 'white'
        }
    } else if (side === secondPlayerSide) {
        for (let i = 0; i < buttonsWinMove.length; i++) {
            const button = allButtons.find(button1 => button1.value === buttonsWinMove[i])
            button.style.backgroundColor = '#caa2a2ff'
            button.style.color = 'white'
        }
    }

    allButtons.filter(button => button.textContent !== '' && !buttonsWinMove.includes(button.value))
        .forEach(button => button.style.color = '#798f8383');
}

// ---------------------------------------------Minimax for 3x3--------------------------------------------

function useMinimax(index) {
    secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
    console.log('сейчас работает minimax.')
    const allButtons = [...document.querySelectorAll('.tictactoe-button')];
    
    // создаём массив текущего состояния поля
    const board = allButtons.map(btn => {
        if (playerMoves.includes(btn.value)) return playerSide;
        if (secondPlayerMoves.includes(btn.value)) return secondPlayerSide;
        return ''; // пустое поле
    });

    // запускаем minimax для каждого возможного хода ИИ
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = secondPlayerSide;
            const score = minimax(board, 0, false, index);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

   // делаем найденный ход
    const chosenButton = allButtons[move];
    chosenButton.textContent = secondPlayerSide;
    chosenButton.disabled = true;
    secondPlayerMoves.push(chosenButton.value);

    checkWinner(secondPlayerMoves, index, secondPlayerSide);
}

// Вспомогательная рекурсивная функция minimax
function minimax(board, depth, isMaximizing, index) {
    const winner = evaluateBoard(board, index);

    if (winner !== null) {
        // возвращаем очки: +1 победа ИИ, -1 победа игрока, 0 ничья
        if (winner === secondPlayerSide) return 1;
        else if (winner === playerSide) return -1;
        else return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = secondPlayerSide;
                const score = minimax(board, depth + 1, false, index);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = playerSide;
                const score = minimax(board, depth + 1, true, index);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Проверка победителя для minimax
function evaluateBoard(board, index) {
    const winLines = winMoves[index];
    for (let line of winLines) {
        const symbols = line.map(cell => {
            const cellIndex = values[index].indexOf(cell);
            return board[cellIndex];
        });

        if (symbols.every(v => v === playerSide && v !== '')) return playerSide;
        if (symbols.every(v => v === secondPlayerSide && v !== '')) return secondPlayerSide;
    }

    // если нет победителя, но все поля заняты — ничья
    if (board.every(cell => cell !== '')) return 'draw';
    return null;
}

// ---------------------------------------------depth Limited Minimax for 4x4--------------------------------------

function useDepthLimitedMinimax(index, depthLimit = 3) {
    secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
    console.log('сейчас работает лимитированный minimax.')

    const allButtons = [...document.querySelectorAll('.tictactoe-button')];

    // Текущее состояние поля
    const board = allButtons.map(btn => {
        if (playerMoves.includes(btn.value)) return playerSide;
        if (secondPlayerMoves.includes(btn.value)) return secondPlayerSide;
        return '';
    });

    let bestScore = -Infinity;
    let move = null;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = secondPlayerSide; // пробуем поставить свой знак
            const score = minimaxLimited(board, 0, false, index, depthLimit);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    if (move !== null) {
        const chosenButton = allButtons[move];
        chosenButton.textContent = secondPlayerSide;
        chosenButton.disabled = true;
        secondPlayerMoves.push(chosenButton.value);
        checkWinner(secondPlayerMoves, index, secondPlayerSide);
    }
}

function minimaxLimited(board, depth, isMaximizing, index, depthLimit) {
    const winner = evaluateBoard(board, index);

    // Если кто-то победил или ничья — возвращаем оценку
    if (winner !== null) {
        if (winner === secondPlayerSide) return 10 - depth;
        else if (winner === playerSide) return depth - 10;
        else return 0; // ничья
    }

    // Ограничение глубины
    if (depth >= depthLimit) {
        return heuristicEvaluation(board, index);
    }

    // Если сейчас ход ИИ
    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = secondPlayerSide;
                const score = minimaxLimited(board, depth + 1, false, index, depthLimit);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;

    // Если сейчас ход игрока
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = playerSide;
                const score = minimaxLimited(board, depth + 1, true, index, depthLimit);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Оценочная функция — анализирует положение на доске (эвристика)
function heuristicEvaluation(board, index) {
    const winLines = winMoves[index];
    let score = 0;

    for (let line of winLines) {
        const symbols = line.map(cell => {
            const cellIndex = values[index].indexOf(cell);
            return board[cellIndex];
        });

        const playerCount = symbols.filter(s => s === playerSide).length;
        const aiCount = symbols.filter(s => s === secondPlayerSide).length;

        // Чем ближе линия к победе, тем больше очков
        if (aiCount > 0 && playerCount === 0) {
            score += aiCount * aiCount; // бонус ИИ
        } else if (playerCount > 0 && aiCount === 0) {
            score -= playerCount * playerCount; // штраф игроку
        }
    }

    return score;
}

// ---------------------------------------------Monte Carlo Tree Search for 5x5 & 7x7 --------------------------------------

// Запоминаем статистику игр между состояниями (state → wins, plays)
let mctsMemory = JSON.parse(localStorage.getItem('mctsMemory')) || {};

// Возвращает строку состояния поля, чтобы можно было хранить в localStorage
function getBoardKey(board) {
    return board.join('');
}

// Проверка победителя (упрощённая, без интерфейса)
// function evaluateBoardMontecarlo(board, index) {
//     const winLines = winMoves[index];
//     for (let line of winLines) {
//         const symbols = line.map(cell => {
//             const cellIndex = values[index].indexOf(cell);
//             return board[cellIndex];
//         });

//         if (symbols.every(v => v === playerSide && v !== '')) return playerSide;
//         if (symbols.every(v => v === secondPlayerSide && v !== '')) return secondPlayerSide;
//     }

//     if (board.every(cell => cell !== '')) return 'draw';
//     return null;
// }

// Основная функция хода Monte Carlo
function useMonteCarloMove(index) {
    secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
    console.log('сейчас активирован Monte Carlo Tree Search')

    const allButtons = [...document.querySelectorAll('.tictactoe-button')];
    const board = allButtons.map(btn => {
        if (playerMoves.includes(btn.value)) return playerSide;
        if (secondPlayerMoves.includes(btn.value)) return secondPlayerSide;
        return '';
    });

    const key = getBoardKey(board);
    if (!mctsMemory[key]) mctsMemory[key] = { wins: 0, plays: 0 };

    let bestMove = null;
    let bestWinRate = -Infinity;

    // Проверяем все свободные клетки
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            // Симулируем несколько игр с этого состояния
            let wins = 0;
            const simulations = 60; // можно увеличить, если хочешь больше точности

            for (let s = 0; s < simulations; s++) {
                const result = simulateRandomGame(board.slice(), i, index);
                if (result === secondPlayerSide) wins++;
            }

            const winRate = wins / simulations;
            if (winRate > bestWinRate) {
                bestWinRate = winRate;
                bestMove = i;
            }
        }
    }

    if (bestMove !== null) {
        const chosenButton = allButtons[bestMove];
        chosenButton.textContent = secondPlayerSide;
        chosenButton.disabled = true;
        secondPlayerMoves.push(chosenButton.value);
        checkWinner(secondPlayerMoves, index, secondPlayerSide);

        // Сохраняем опыт
        mctsMemory[key].wins += bestWinRate;
        mctsMemory[key].plays++;
        localStorage.setItem('mctsMemory', JSON.stringify(mctsMemory));
    }
}

// Симулируем случайную игру до конца, возвращаем победителя
function simulateRandomGame(board, moveIndex, index) {
    board[moveIndex] = secondPlayerSide;

    let currentTurn = playerSide;

    while (true) {
        const result = evaluateBoard(board, index);
        if (result !== null) return result;

        const emptyIndices = board.map((v, i) => v === '' ? i : null).filter(i => i !== null);
        if (emptyIndices.length === 0) return 'draw';

        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        board[randomIndex] = currentTurn;
        currentTurn = (currentTurn === playerSide) ? secondPlayerSide : playerSide;
    }
}

// ----------------------------------------------------------------------------------------------------------

/**
     * Алгоритм, который ищет последнюю свободную клетку у ИГРОКА и возвращает её
     * @param {array} playerArray - массив игрока
     * @param {array} secondPlayerArray - массив второго игрока
     * @returns {string} - свободная клетка
     */
function findPlayerBlockMove(playerArray, secondPlayerArray, winArray) {
    for (let winLine of winArray) {
        let freeField = winLine.filter(cell => !playerArray.includes(cell) && !secondPlayerArray.includes(cell));
        let takenField = winLine.filter(cell => playerArray.includes(cell));

        if (takenField.length === winLine.length - 1 && freeField.length === 1) {
            return freeField[0]; // та самая клетка
        }
    }
    return null;
}

/**
     * Алгоритм, который ищет последнюю свободную клетку у ВТОРОГО ИГРОКА и возвращает её
     * @param {array} playerArray - массив игрока
     * @param {array} secondPlayerArray - массив второго игрока
     * @returns {string} - свободная клетка
     */
function findSecondPlayerBlockMove(playerArray, secondPlayerArray, winArray) {
    for (let winLine of winArray) {
        let freeField = winLine.filter(cell => !playerArray.includes(cell) && !secondPlayerArray.includes(cell));
        let takenField = winLine.filter(cell => secondPlayerArray.includes(cell));

        if (takenField.length === winLine.length - 1 && freeField.length === 1) {
            return freeField[0]; // та самая клетка
        }
    }
    return null;
}

function useSemiHardAi(index) {
    secondPlayerGoMark.style.backgroundColor = '#a4c3b2'
    nonValuedButtons = []

    const blockPlayerWinField = findPlayerBlockMove(playerMoves, secondPlayerMoves, winMoves[index])
    const lastWinField = findSecondPlayerBlockMove(playerMoves, secondPlayerMoves, winMoves[index])

    console.log(blockPlayerWinField)

    // Поиск пустых полей
    const allButtons = [...document.querySelectorAll('.tictactoe-button')]
    for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i].textContent === '' && !playerMoves.includes(allButtons[i].value) && !secondPlayerMoves.includes(allButtons[i].value)) {
            nonValuedButtons.push(allButtons[i])
        }
    }

    const thinkingLabel = document.createElement('p')
    thinkingLabel.classList.add('thinking-label')
    thinkingLabel.textContent = 'thinking...'

    // 1. Прогресс контейнер
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');

    // 2. Сам прогресс-бар (заливка)
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressContainer.appendChild(progressBar);

    // 3. Добавляем в container
    container.appendChild(progressContainer);

    // 4. Запускаем таймер
    let timeLeft = 100; // проценты (100%)
    let timerInterval = setInterval(() => {
        timeLeft -= 1; // уменьшаем на 1%
        progressBar.style.width = `${timeLeft}%`;

        container.appendChild(thinkingLabel)

        // дизейбл всех кнопок
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].disabled = true
        }

        if (timeLeft <= 0) {
            // Время вышло  
            clearInterval(timerInterval);
            progressContainer.remove()

            secondPlayerGoMark.style.backgroundColor = '#ffffffff'

            if (lastWinField !== null) {
                goToWinField(index, lastWinField, allButtons)
                checkWinner(secondPlayerMoves, index, secondPlayerSide)
                for (let i = 0; i < nonValuedButtons.length; i++) {
                    if (!playerMoves.includes(nonValuedButtons[i].value) && !secondPlayerMoves.includes(nonValuedButtons[i].value)) {
                        nonValuedButtons[i].disabled = false
                    }
                    // else if (nonValuedButtons.length === 0 && !playerMoves.includes(nonValuedButtons[i] && !secondPlayerMoves.includes(nonValuedButtons[i]))) {
                    //     stopGame()
                    // }
                }
                if (nonValuedButtons.length === 0) {
                    stopGame()
                }

            } else if (blockPlayerWinField !== null) {

                blockPlayerWin(index, blockPlayerWinField, allButtons)
                checkWinner(secondPlayerMoves, index, secondPlayerSide)
                for (let i = 0; i < nonValuedButtons.length; i++) {
                    if (!playerMoves.includes(nonValuedButtons[i].value) && !secondPlayerMoves.includes(nonValuedButtons[i].value)) {
                        nonValuedButtons[i].disabled = false
                    }
                    // else if (nonValuedButtons.length === 0 && !playerMoves.includes(nonValuedButtons[i] && !secondPlayerMoves.includes(nonValuedButtons[i]))) {
                    //     stopGame()
                    // }
                }
                if (nonValuedButtons.length === 0) {
                    stopGame()
                }

            } else {
                const secondPlayerButton = nonValuedButtons[getRandomInt(0, nonValuedButtons.length - 1)]
                goRandomField(index, allButtons, secondPlayerButton)
                checkWinner(secondPlayerMoves, index, secondPlayerSide)
                for (let i = 0; i < nonValuedButtons.length; i++) {
                    if (!playerMoves.includes(nonValuedButtons[i].value) && !secondPlayerMoves.includes(nonValuedButtons[i].value)) {
                        nonValuedButtons[i].disabled = false
                    }
                    // else if (nonValuedButtons.length === 0 && !playerMoves.includes(nonValuedButtons[i] && !secondPlayerMoves.includes(nonValuedButtons[i]))) {
                    //     stopGame()
                    // }
                }
                if (nonValuedButtons.length === 0) {
                    stopGame()
                }
            }
            thinkingLabel.remove()
        }
    }, 10);
}

function useSimpleAi(index) {
    nonValuedButtons = []

    // Поиск пустых полей
    const allButtons = [...document.querySelectorAll('.tictactoe-button')]
    for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i].textContent === '' && !playerMoves.includes(allButtons[i].value) && !secondPlayerMoves.includes(allButtons[i].value)) {
            nonValuedButtons.push(allButtons[i])
        }
    }

    // 1. Прогресс контейнер
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');

    // 2. Сам прогресс-бар (заливка)
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressContainer.appendChild(progressBar);

    // 3. Добавляем в container
    container.appendChild(progressContainer);

    // 4. Запускаем таймер
    let timeLeft = 100; // проценты (100%)
    let timerInterval = setInterval(() => {
        timeLeft -= 1; // уменьшаем на 1%
        progressBar.style.width = `${timeLeft}%`;

        // дизейбл всех кнопок
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].disabled = true
        }

        if (timeLeft <= 0) {
            // Время вышло  
            clearInterval(timerInterval);
            progressContainer.remove()

            const secondPlayerButton = nonValuedButtons[getRandomInt(0, nonValuedButtons.length - 1)]
            goRandomField(index, allButtons, secondPlayerButton)
            checkWinner(secondPlayerMoves, index, secondPlayerSide)
            if (nonValuedButtons.length !== 0) {
                for (let i = 0; i < nonValuedButtons.length; i++) {
                    if (!playerMoves.includes(nonValuedButtons[i].value) && !secondPlayerMoves.includes(nonValuedButtons[i].value)) {
                        nonValuedButtons[i].disabled = false
                    }
                }
            } else {
                stopGame()
            }
        }
    }, 10);
}

function goToWinField(index, field, allButtonsArray) {
    if (nonValuedButtons.length !== 0) {
        const winField = field
        const secondPlayerButton = allButtonsArray.find(button => button.value === winField)
        const buttonIndex = allButtonsArray.indexOf(secondPlayerButton)
        const coord = values[index][buttonIndex]
        secondPlayerButton.value = coord
        secondPlayerButton.textContent = secondPlayerSide
        secondPlayerMoves.push(secondPlayerButton.value)
        secondPlayerButton.disabled = true
    }
}

function blockPlayerWin(index, field, allButtonsArray) {
    if (nonValuedButtons.length !== 0) {
        const playerField = field
        const secondPlayerButton = allButtonsArray.find(button => button.value === playerField)
        const buttonIndex = allButtonsArray.indexOf(secondPlayerButton)
        const coord = values[index][buttonIndex]
        secondPlayerButton.value = coord
        secondPlayerButton.textContent = secondPlayerSide
        secondPlayerMoves.push(secondPlayerButton.value)
        secondPlayerButton.disabled = true
    }
}

function goRandomField(index, allButtonsArray, button) {
    if (nonValuedButtons.length !== 0) {
        const buttonIndex = allButtonsArray.indexOf(button)
        const coord = values[index][buttonIndex]
        button.value = coord
        button.textContent = secondPlayerSide
        secondPlayerMoves.push(button.value)
        button.disabled = true
    }
}

function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
