import React from 'react';
import fetch from 'isomorphic-unfetch';
import Site from '../components/site';

const strapiUrl = 'http://localhost:1337';

class Index extends React.Component {
  render() {
    const { apiDatas } = this.props;

    return (
      <Site lang="fr" strapiUrl={strapiUrl} apiDatas={apiDatas}/>
    );
  }
}

Index.getInitialProps = async function () {
  // hp
  const resHp = await fetch(`${strapiUrl}/homepages/5c829b77e4d80e1b51101436`);
  const hp = await resHp.json();
  // domaines
  const resDomains = await fetch(`${strapiUrl}/domaines?_sort=Ordre:ASC`);
  const domains = await resDomains.json();
  // compétences
  const resSkills = await fetch(`${strapiUrl}/competences?_sort=Ordre:ASC`);
  const skills = await resSkills.json();

  return {
    apiDatas: {
      hp,
      domains,
      skills,
    },
  }
};

export default Index;
