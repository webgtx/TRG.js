
const button = document.querySelector('.button-play');

button.addEventListener('click', () => {
  creatingHero();
  selectClass();
  alert(`Now your hero was created
      Write /help for more info`);
  interfaceHero();
});

function creatingHero() {
  let heroName = prompt('Choose name for your hero');
  if (!heroName == '' || !heroName == 0) {
    hero.name = heroName;
  } else {
    while (heroName == '' || heroName == 0) {
      alert('Pls write your name correct');
      heroName = prompt('Choose name for your hero');
    }
  }

};

function selectClass() {
  let heroClass = prompt(`You can choose 2 classes for your hero
        1) Warrior
        2) Archer`)
  if (heroClass == '1') {
    hero.class = 'Warrior';
    hero.weapon = 'Stone sword'
    hero.items.push('Apple')
  } else if (heroClass == '2') {
    hero.class = 'Archer';
    hero.weapon = 'Wooden bow'
    hero.items.push('Apple')
  } else {
      selectClass();
}
};

function interfaceHero() {
  let commandLine
  do {
    commandLine = prompt('Write your command with /')
    if (commandLine == '/exit') {
      break;
    } else if (commandLine == '/help') {
      alert(`All commands
            /stats - Info about hero
            /items - Your items
            /quest - Your quests from npc
            /exit - Delete this session
            /walk - Explore dungeon`);
    } else if (commandLine == '/stats') {
      alert(`Your stats:
        Name: ${hero.name}
        Class: ${hero.class}
        Weapon: ${hero.weapon}`);
    } else if (commandLine == '/items') {
      alert(`${'Your inventory'.toUpperCase()}
        slot 1: ${hero.items[0]}
        slot 2: ${hero.items[1]}
        slot 3: ${hero.items[2]}
        slot 4: ${hero.items[3]}
        slot 5: ${hero.items[4]}`)
    } else if (commandLine == '/walk') {
      alert('You strolling throught the dark')
      const findingEnemy = randomModule(1, 100)
      if (findingEnemy > 70) {
        alert(`You saw a lot of goblins`);
        fightModule();
      } else {
        alert('Nothing here, maybe later i find them.')
      }
    }
  } while (true);
};

function randomModule(min, max) {
  return Math.floor(Math.random() * (min + max + 1) + min);
}
function fightModule() {

}

const hero = {
  name: '',
  class: '',
  weapon: '',
  items: ['Health Water',],
}

button.click();
