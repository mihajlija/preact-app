import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<img scr="https://66.media.tumblr.com/99ac276098115a6317a6966e2e30ad39/tumblr_ph838qEHAb1vct3zyo1_640.png"/>
	</div>
);

export default Home;
