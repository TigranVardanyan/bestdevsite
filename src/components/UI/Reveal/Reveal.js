import baffle from "baffle";

const Reveal = props => {
  const text = baffle('.reveal');
  const loop = () => {
    text.set({
      characters: "▒░▓░ ▓▒<▒/ ░▓░█ █>/ /▓▒░ ░▒█▒",
      speed: 120
    });
    text.start();
    text.reveal(2500);
  }
  setTimeout(loop, 2500)
  setInterval(loop , 8000)

  return (
    <span className={'as456465'}>
      {/*{props.content}*/}
    </span>
  )
}

export default Reveal