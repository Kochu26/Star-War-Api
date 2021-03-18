import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Info = () => {
	const { store } = useContext(Context);
	const params = useParams();
	let tipos = [store.people, store.planets];
	for (let i = 0; i < tipos.length; i++) {
		let prueba = tipos[i].find(arr => arr.name === params.name);
		if (prueba != undefined) {
			let objeto = prueba;

			return (
				<div className="divInfo container mb-2 align-self-center">
					<Link to="/">
						<span className="btn btn-danger" href="#" role="button">
							Go to home
						</span>
					</Link>
					<div className="row mt-3">
						<div className="col-lg-6 col-12 align-content-center">
							<img
								className="col-12 card-img-topInfo "
								src="https://th.bing.com/th/id/OIF.BumZfIAOocJaTX1vxLjWow?pid=ImgDet&rs=1"
								alt="imagen"
							/>
						</div>
						<div className="col-lg-6 col-12" id="texto">
							<h1 className="text-center">{objeto.name}</h1>
							<span>
								Star Wars is a multi-genre mythology and multimedia franchise created by George Lucas in
								1976. Comprising movies, novels, comics, video games, toys, and numerous television
								series, the Star Wars franchise employs archetypal motifs common to religions, classical
								mythology, and political climax, as well as musical motifs of those same aspects. As one
								of the foremost examples of the space opera subgenre of science fiction, Star Wars has
								become part of mainstream popular culture, as well as being one of the highest-grossing
								series of all time.[1] In 2012, The Walt Disney Company bought the rights to the
								franchise from George Lucas for 4.05 billion dollars. Since then, Disney has split off
								Star Wars into two main categories, those being Star Wars Legends and Star Wars Canon,
								with Canon being the official story of the franchise. Despite the mainline story of the
								franchise, officially known as the Skywalker Saga, reaching its conclusion in 2019 with
								the release of Star Wars: Episode IX The Rise of Skywalker, the franchise is still going
								strong, mainly due to the success of the Disney+ original television series The
								Mandalorian, the final season of Star Wars: The Clone Wars and upcoming projects such as
								Star Wars: The High Republic.
							</span>
						</div>
					</div>

					{objeto.climate != undefined ? (
						<div className="flex-wrap d-flex flex-row justify-content-around" id="propiedades">
							<div className="detalleInfo m-2">
								<span>
									Population: <br /> {objeto.population}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Terrain: <br /> {objeto.terrain}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Diameter: <br /> {objeto.diameter}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Rotation period: <br /> {objeto.rotation_period}
								</span>
							</div>
							<div className="detalleInfo m-2 ">
								<span>
									Orbital period: <br /> {objeto.orbital_period}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Gravity: <br /> {objeto.gravity}
								</span>
							</div>
						</div>
					) : (
						<div className="flex-wrap d-flex flex-row justify-content-around" id="propiedades">
							<div className="detalleInfo m-2">
								<span>
									Height: <br /> {objeto.height}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Mass: <br /> {objeto.mass}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Hair color: <br /> {objeto.hair_color}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Skin color: <br /> {objeto.skin_color}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Eye color: <br /> {objeto.eye_color}
								</span>
							</div>
							<div className="detalleInfo m-2">
								<span>
									Birth year: <br /> {objeto.birth_year}
								</span>
							</div>
						</div>
					)}
					<div className="posicionFooter" />
				</div>
			);
		}
	}
};
