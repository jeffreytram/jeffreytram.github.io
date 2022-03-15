import React from "react"
import ContentLayout from "../components/ContentLayout";

function UniDrive(props) {
  const ListItem = ({ item, description }) => {
    return (
      <tr>
        <td><strong>{item}</strong></td>
        <td>{description}</td>
      </tr>
    )
  };

  const Section = ({ title, period, children }) => {
    return (
      <section style={{ margin: '7em 0' }}>
        <h2>{title}</h2>
        {period && (
          <i>{period}</i>
        )}
        <hr style={{ opacity: '.5' }} />
        {children}
      </section>
    )
  };

  const PrototypePicture = ({ path, width }) => {

    return (
      <img style={{ width: width || '250px' }}
        src={require(`../../static/unidrive/${path}`)}
        alt="unidrive low fidelity paper prototype"
      >
      </img>
    )
  }

  const list = [
    {
      item: 'Client Charter',
      description: 'established a shared understanding between the' +
        'client and our team for the project in terms of both of our' +
        'responsibilities',
    },
    {
      item: 'Vision Statement',
      description: 'the main motivation, target users, and constraints' +
        'for the project',
    },
    {
      item: 'User Research',
      description: 'explained our key questions and issues, choices of' +
        'research methodologies, and key findings',
    },
    {
      item: 'User Stories + Acceptance Criteria',
      description: 'established a set of minimum marketable features to' +
        'make up the minimum viable Product',
    },
    {
      item: 'Low Fidelity UI Prototype',
      description: 'created a paper prototype of the user interface',
    },
    {
      item: 'UX Report',
      description: 'received critic from ourselves, our peers,' +
        'instructors, and client by testing our prototype against a set of' +
        'heuristics (heuristic evaluation)',
    },
    {
      item: 'Initial Prototype',
      description: 'creating a demo of the product and a final presentation' +
        'for our client',
    },
  ];
  return (
    <div>
      <ContentLayout
        title="UniDrive"
        period="January 2020 - November 2020"
        description="UniDrive is a web application our team of six built
        for our client at Sandia National Labs to provide Google Drive
        users a central file organizational structure for all of their
        Google Drive accounts."
        tech={['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'AWS']}
        githubRepo="https://github.com/jeffreytram/UniDrive"
        snapshot="unidrive"
        bgIcon="unidrive-icon"
      >
        <Section title="The Problem">
          <p>
            Google Drive and the Google office web applications are a
            frequent collaboration mechanism for distributed teams. The
            easily accessible drive, the ability to share, and the
            sufficiently functional office web apps makes using other
            options a difficult choice. The difficulty arises when a person
            has many such collaborations, including different years for a
            project each being under a different drive. With all of these
            places to look for files, it becomes tedious.
          </p>
        </Section>

        <Section title="Phase 1: Planning, Preparation, and Research"
          period="January 2020 - April 2020"
        >
          <table style={{ borderSpacing: '0 2.5em' }}>
            {list.map(({ item, description }) => {
              return (
                <ListItem
                  item={item}
                  description={description}
                />
              )
            })}
          </table>
          <h3>Low Fidelity Prototype</h3>
          <div>
            <PrototypePicture path="unidrive-p1.jpg" />
            <PrototypePicture path="unidrive-p2.jpg" />
            <PrototypePicture path="unidrive-p3.jpg" />
            <PrototypePicture path="unidrive-p3-1.jpg" />
            <PrototypePicture path="unidrive-p3-2.jpg" />
            <PrototypePicture path="unidrive-p4.jpg" />
            <PrototypePicture path="unidrive-p4-1.jpg" />
          </div>
          <h3>Digital Prototype</h3>
          <p>
            We created our digital prototype for our project in Figma which can be seen here: <a href="https://www.figma.com/file/Fz6RCL1chYVQEcKkPPqcSW/UniDrive?node-id=0%3A1">
              Figma Digital Prototype
            </a>
          </p>
          <PrototypePicture width="300px" path="unidrive-digital-prototype.png" />
        </Section>

        <Section title="Phase 2: Implementation"
          period="August 2020 - November 2020"
        >
          <ul>
            <li>Sprint 1: Adding multiple Google Drive accounts</li>
            <li>Sprint 2: Automatic syncing of files</li>
            <li>Sprint 3: File interaction</li>
            <li>Sprint 4: File organization</li>
            <li>Sprint 5: Persistence</li>
          </ul>
          <img style={{ width: '100%' }} src={require('../../static/unidrive/unidrive-preview.png')}></img>
        </Section>
      </ContentLayout>
    </div>
  )
}
export default UniDrive;