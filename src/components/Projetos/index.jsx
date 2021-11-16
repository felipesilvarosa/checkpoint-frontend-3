import "./style.scss";
export default function Projetos() {
	const projects = [
		{
			id: 1,
			nome: "Travel Dog",
			link: "https://jonathancout.github.io/ProjetoFrontEnd/",
			imagem: "./images/pagina_01.png",
			descricao: "Este é um projeto apresentado para a disciplina de Front End I, como avaliação final, no curso Certified Tech Developer, da Digital House.",
		},
		{
			id: 2,
			nome: "To do or not",
			link: "https://felipsrosa.github.io/front-end-2/checkpoint_02/",
			imagem: "./images/pagina_02.png",
			descricao: "Este é um projeto apresentado para a disciplina de Front End 2, como avaliação 01, no curso Certified Tech Developer, da Digital House.",
		},
		{
			id: 3,
			nome: "Pokedex",
			link: "https://felipsrosa.github.io/front-end-2/checkpoint_01/",
			imagem: "./images/pagina_03.png",
			descricao: "Este é um projeto apresentado para a disciplina de Front End 2, como avaliação 03, no curso Certified Tech Developer, da Digital House.",
		},
	];

	return (
		<section id="projetos">
			<ul>
				{projects.map((e) => {
					return (
						<li key={e.id}>
							<h3>{e.nome}</h3>
							<img src={e.imagem} className="image" alt={`imagem do projeto ${e.id}`} />
							<p>{e.descricao}</p>
							<a href={e.link} className="btn btn-primary">
								Clique Aqui
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
