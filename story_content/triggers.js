function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cVgjjNSB2J":
        Script1();
        break;
      case "68PtXd1U9Jz":
        Script2();
        break;
      case "5luZ1pZwXde":
        Script3();
        break;
      case "6ebYoIFVWtG":
        Script4();
        break;
      case "6CRsF3c1hct":
        Script5();
        break;
      case "5awH6tgeGOS":
        Script6();
        break;
      case "5WI3GLcp2F0":
        Script7();
        break;
      case "6VduBWTkUU1":
        Script8();
        break;
      case "5x8iObnIezO":
        Script9();
        break;
      case "6YILBioMyAq":
        Script10();
        break;
      case "5ockVWvPimK":
        Script11();
        break;
      case "6NQL1HptMIL":
        Script12();
        break;
      case "5vNw6bJ2s4m":
        Script13();
        break;
      case "6UXteh0GNsC":
        Script14();
        break;
      case "6DaogYmZhCs":
        Script15();
        break;
      case "5w8hG2ZQiqw":
        Script16();
        break;
      case "6PRiY9GtGS1":
        Script17();
        break;
      case "5pqNu04wxUO":
        Script18();
        break;
      case "6HCRgSjh2Dd":
        Script19();
        break;
      case "5e1CY6BkprT":
        Script20();
        break;
      case "5moVolBOSs9":
        Script21();
        break;
      case "6R6xjRJq1q7":
        Script22();
        break;
      case "6cjgIAhrcJ5":
        Script23();
        break;
      case "63tvyF6yTep":
        Script24();
        break;
      case "6D4bkCALd32":
        Script25();
        break;
      case "5bqRIvMM6ek":
        Script26();
        break;
      case "6Dzf8ypXQVW":
        Script27();
        break;
      case "65KZp0ptpGs":
        Script28();
        break;
      case "61BSQrSLfpl":
        Script29();
        break;
      case "5eeTBXdmhko":
        Script30();
        break;
      case "6kW2aiV8vym":
        Script31();
        break;
      case "5pG9pE3ylPS":
        Script32();
        break;
      case "5pVizYDsI7y":
        Script33();
        break;
      case "6mFpWVpxZ7k":
        Script34();
        break;
      case "6qX1YT6RvZL":
        Script35();
        break;
      case "5WJRXhi1NWW":
        Script36();
        break;
      case "5itqpHrZQw8":
        Script37();
        break;
      case "6QxYfhSJxOb":
        Script38();
        break;
      case "5ZOUqueC3Mp":
        Script39();
        break;
      case "5mj4ThcJbec":
        Script40();
        break;
      case "69AemSVZZuV":
        Script41();
        break;
      case "6XZ2ZFJsyNj":
        Script42();
        break;
      case "6OCsPFGuvTW":
        Script43();
        break;
      case "6qRQWCmUNMr":
        Script44();
        break;
      case "6fSSL64vQOj":
        Script45();
        break;
      case "5slmzOtHL3u":
        Script46();
        break;
      case "6RNqOYXFyEX":
        Script47();
        break;
      case "6j4x9LzgFTP":
        Script48();
        break;
      case "6ZAMhPZ5vI6":
        Script49();
        break;
      case "6CJctcmTfYj":
        Script50();
        break;
      case "6UNE5sO2QY6":
        Script51();
        break;
      case "5czrLqaHbcD":
        Script52();
        break;
      case "5sFSfgSx6mg":
        Script53();
        break;
      case "5WKsd7y3Lj4":
        Script54();
        break;
      case "6Io4QK4xdiF":
        Script55();
        break;
      case "60vVVXkDqpc":
        Script56();
        break;
      case "62y7C1MMmh7":
        Script57();
        break;
      case "6IqfwhRFRD7":
        Script58();
        break;
      case "5Z5dbNcCOYd":
        Script59();
        break;
      case "6NXsBVS4Dyi":
        Script60();
        break;
      case "63POHnz3Raf":
        Script61();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6NOVPb8Gdrf');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6c1OWHpcU0T';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '6WqpUhXimFK';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '65iDGqJNrQm';
const teeterAmount = 10;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '67OLepqS5yM';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6St7g1WZCyJ');
const duration = 1000;
const easing = 'ease-out';
const id = '5Wo6yK09rGR';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('6St7g1WZCyJ');
const duration = 1000;
const easing = 'ease-out';
const id = '5Wo6yK09rGR';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6aVwvk2iRLy');
const duration = 1000;
const easing = 'ease-out';
const id = '6W6l26AfBuW';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6aVwvk2iRLy');
const duration = 1000;
const easing = 'ease-out';
const id = '6W6l26AfBuW';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6I38FqlkoQD');
const duration = 1000;
const easing = 'ease-out';
const id = '63gEoze1xIJ';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('6I38FqlkoQD');
const duration = 1000;
const easing = 'ease-out';
const id = '63gEoze1xIJ';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5X65KfbrmXZ');
const duration = 1000;
const easing = 'ease-out';
const id = '6KGqHGPNeeh';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('5X65KfbrmXZ');
const duration = 1000;
const easing = 'ease-out';
const id = '6KGqHGPNeeh';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('67ebEyNPvWW');
const duration = 1000;
const easing = 'ease-out';
const id = '6qx2JccdJ1M';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('67ebEyNPvWW');
const duration = 1000;
const easing = 'ease-out';
const id = '6qx2JccdJ1M';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('5VUm13s6LTF');
const duration = 1000;
const easing = 'ease-out';
const id = '5Xdeqvdg5Pn';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('5VUm13s6LTF');
const duration = 1000;
const easing = 'ease-out';
const id = '5Xdeqvdg5Pn';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6aY7SWb3R5m');
const duration = 750;
const easing = 'ease-out';
const id = '6dDriqt6ub1';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
