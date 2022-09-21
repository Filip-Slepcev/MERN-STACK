import logo from "../assets/images/logo.svg";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt="jobify" className="logo" />
			</nav>
			<div className="container">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby locavore fashion axe bruh banjo, tumeric brunch church-key poutine
						ethical synth cloud bread street art +1 iPhone. VHS direct trade tilde
						coloring book subway tile. Edison bulb +1 scenester, etsy prism vinyl
						disrupt franzen. Portland keytar poutine heirloom authentic, quinoa
						aesthetic offal skateboard 8-bit tousled occupy.
					</p>
					<button className="btn btn-hero">Login/Register</button>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
