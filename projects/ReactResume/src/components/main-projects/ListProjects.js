import React from "react";
import { useTranslation } from "react-i18next";
// import { projectsData } from "../../data/projectsData";
// import Project from "./Project";

import { ViewProject } from "./ViewProject";

// Images
import bookShelf from "../../img/library.jpg";
import todo from "../../img/todo.jpg";
import csvuploader from "../../img/uploadcsv.jpg";
import portfolio from "../../img/portfolio.jpg";
import uniwar from "../../img/uniwar.jpg";
import attention4 from "../../img/4attention.jpg";
import bulk4 from "../../img/4bulk.jpg";
import realestate from "../../img/realestate.jpg";
import startup from "../../img/startup.jpg";

function ListProjecs() {
	const { t } = useTranslation();
	return (
		<div className="listprojects">
			{/* {projectsData.map(({ id, image, projectName, projectInfo }) => (
        <Project
          key={id}
          image={image}
          projectName={projectName}
          projectInfo={projectInfo}
        />
      ))} */}

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={bookShelf} alt="library" />
				</div>
				<div className="listprojects__card__content">
					<h3>{t("projects.projectsData.0.projectName")} </h3>
					<p>{t("projects.projectsData.0.projectInfo")}</p>
					<ViewProject
						projectLink={"https://youronlinebookshelf.herokuapp.com/"}
						githubLink={"https://github.com/Romson/Book-library"}
					/>
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={todo} alt="todo" />
				</div>
				<div className="listprojects__card__content">
					<h3>{t("projects.projectsData.1.projectName")} </h3>
					<p>{t("projects.projectsData.1.projectInfo")}</p>
					<ViewProject
						projectLink={"https://todo-fullstackapp.herokuapp.com/"}
						githubLink={"https://github.com/Romson/todo-fullstack-app"}
					/>
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={csvuploader} alt="csv-uploader" />
				</div>
				<div className="listprojects__card__content">
					<h3> {t("projects.projectsData.2.projectName")}</h3>
					<p>{t("projects.projectsData.2.projectInfo")}</p>
					<ViewProject
						projectLink={"https://csv-file-uploader.herokuapp.com/"}
						githubLink={"https://github.com/Romson/CSV-file-uploader"}
					/>
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={portfolio} alt="portfolio template" />
				</div>
				<div className="listprojects__card__content">
					<h3> {t("projects.projectsData.3.projectName")}</h3>
					<p>{t("projects.projectsData.3.projectInfo")}</p>
					<ViewProject
						projectLink={"https://portfolioroms.herokuapp.com/"}
						githubLink={"https://github.com/Romson/Creative-Portfolio"}
					/>
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={uniwar} alt="Password Manager<" />
				</div>
				<div className="listprojects__card__content">
					<h3> {t("projects.projectsData.4.projectName")}</h3>
					<p>{t("projects.projectsData.4.projectInfo")}</p>
					<ViewProject
						projectLink={
							"https://github.com/rtlikeone/Python/blob/master/projects/password-manager/README.md"
						}
						githubLink={
							"https://github.com/rtlikeone/Python/tree/master/projects/password-manager"
						}
					/>
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={attention4} alt="4-attention company website" />
				</div>
				<div className="listprojects__card__content">
					<h3> {t("projects.projectsData.5.projectName")}</h3>
					<p>{t("projects.projectsData.5.projectInfo")}</p>
					<ViewProject projectLink={"https://www.4-attention.com/"} />
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={bulk4} alt="4-bulk company website" />
				</div>
				<div className="listprojects__card__content">
					<h3> {t("projects.projectsData.6.projectName")}</h3>
					<p>{t("projects.projectsData.6.projectInfo")}</p>
					<ViewProject projectLink={"https://www.4-bulk.com/"} />
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={realestate} alt="real-estate template" />
				</div>
				<div className="listprojects__card__content">
					<h3> {t("projects.projectsData.7.projectName")}</h3>
					<p>{t("projects.projectsData.7.projectInfo")}</p>
					<ViewProject
						projectLink={"https://realestate-theme.herokuapp.com/"}
						githubLink={"https://github.com/Romson/React-Real-estate-theme"}
					/>
				</div>
			</div>

			<div className="listprojects__card">
				<div className="listprojects__card__image">
					<img src={startup} alt="startup template" />
				</div>
				<div className="listprojects__card__content">
					<h3> {t("projects.projectsData.8.projectName")}</h3>
					<p>{t("projects.projectsData.8.projectInfo")}</p>
					<ViewProject
						projectLink={"https://startup-template.herokuapp.com/"}
						githubLink={"https://github.com/Romson/React-Startup-theme"}
					/>
				</div>
			</div>
		</div>
	);
}

export default ListProjecs;
