/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  AssignmentIndOutlined,
  Language,
  WebOutlined,
  YouTube,
} from '@material-ui/icons';

export default {
  name: 'Cero',
  title: 'Queen of the Underworld',
  birthday: 'Everyday',
  email: 'nobooliCero@sheIsTheBest.com',
  job: 'Empress',
  phone: '123-456-7890',
  address: 'Castle',

  socialLink: {
    Facebook: {
      link: 'https://www.facebook.com',
      text: 'Facebook',
      icon: <FacebookIcon />,
    },

    Github: {
      link: 'https://www.facebook.com',
      text: 'Github',
      icon: <GitHubIcon />,
    },

    Twitter: {
      link: 'https://www.facebook.com',
      text: 'Twitter',
      icon: <TwitterIcon />,
    },

    LinkedIn: {
      link: 'https://www.facebook.com',
      text: 'LinkedIn',
      icon: <LinkedInIcon />,
    },
  },

  about:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). \n \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',

  work: [
    {
      title: 'Filler1',
      date: '2020-present',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    },
    {
      title: 'Filler2',
      date: '2018-2020',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    },
    {
      title: 'Filler3',
      date: '2016-2019',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    },
    {
      title: 'Filler4',
      date: '2014-2017',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    },
  ],

  education: [
    {
      title: 'Filler1',
      date: '2020-present',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    },
    {
      title: 'Filler2',
      date: '2018-2020',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    },
    {
      title: 'Filler3',
      date: '2016-2019',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    },
  ],

  services: [
    {
      title: 'Ruler of Simps',
      text: 'What do you think I have my basement for?',
      icon: <WebOutlined />,
    },
    {
      title: 'Murderer',
      text: 'Unsolved murder crimes on TV? Half of them I committed',
      icon: <AssignmentIndOutlined />,
    },
    {
      title: 'Butt Kicker',
      text: 'I will kick your butt',
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: 'FRONT-END',
      text: [
        'ReactJS',
        'JavaScript',
        'TypeScript',
        'Bootstrap',
        'Material UI',
        'VueJS',
      ],
    },
    {
      title: 'BACK-END',
      text: ['NodeJS', 'Java', 'Python'],
    },
    {
      title: 'DATABASES',
      text: ['Firebase', 'mongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'CI/CD',
      text: ['GitHub', 'Docker', 'Jenkins', 'Kubernetes', 'Ansible'],
    },
  ],

  projects: [
    {
      tag: 'React',
      image:
        'https://cdn.shopify.com/s/files/1/0768/3211/articles/vlcsnap-2019-07-28-21h29m32s584_1024x1024.jpg?v=1564350799',
      title: 'React project1',
      caption: 'Filler text for now',
      description: 'Project description filler, blah blah blah blah blah',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image:
        'https://cdn.shopify.com/s/files/1/0768/3211/articles/vlcsnap-2019-07-28-21h29m32s584_1024x1024.jpg?v=1564350799',
      title: 'React project2',
      caption: 'Filler text for now',
      description: 'Project description filler, blah blah blah blah blah',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'Python',
      image:
        'https://cdn.shopify.com/s/files/1/0768/3211/articles/vlcsnap-2019-07-28-21h29m32s584_1024x1024.jpg?v=1564350799',
      title: 'python project1',
      caption: 'Filler text for now',
      description: 'Project description filler, blah blah blah blah blah',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'Java',
      image:
        'https://cdn.shopify.com/s/files/1/0768/3211/articles/vlcsnap-2019-07-28-21h29m32s584_1024x1024.jpg?v=1564350799',
      title: 'java project1',
      caption: 'Filler text for now',
      description: 'Project description filler, blah blah blah blah blah',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
  ],
};
