import React from 'react';
import fetch from 'isomorphic-unfetch';
import Site from '../components/site';

const strapiUrl = 'http://localhost:1337';

class En extends React.Component {
  render() {
    const { apiDatas } = this.props;

    return (
      <Site lang="en" strapiUrl={strapiUrl} apiDatas={apiDatas} />
    );
  }
}

En.getInitialProps = async function () {
  // hp
  const resHp = await fetch(`${strapiUrl}/homepages/5c823abbf844280cc880d81f`);
  const hp = await resHp.json();
  // loisirs
  const resHobbies = await fetch(`${strapiUrl}/loisirs?_sort=Ordre:ASC`);
  const hobbies = await resHobbies.json();
  // domaines
  const resDomains = await fetch(`${strapiUrl}/domaines?_sort=Ordre:ASC`);
  const domains = await resDomains.json();
  // compétences
  const resSkills = await fetch(`${strapiUrl}/competences?_sort=Ordre:ASC`);
  const skills = await resSkills.json();
  // projets
  const resProjects = await fetch(`${strapiUrl}/projets?_sort=Ordre:ASC`);
  const projects = await resProjects.json();
  // expériences
  const resExperiences = await fetch(`${strapiUrl}/experiences?_sort=Ordre:ASC`);
  const experiences = await resExperiences.json();
  // formations
  const resFormations = await fetch(`${strapiUrl}/formations?_sort=Ordre:ASC`);
  const formations = await resFormations.json();

  return {
    apiDatas: {
      hp,
      hobbies,
      domains,
      skills,
      projects,
      experiences,
      formations,
    },
  }
};

export default En;
