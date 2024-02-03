import { Component, OnInit } from '@angular/core';
import { CardSkills } from './components/card-skills/card-skill.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills: CardSkills[] = [
    {
      classSocialIcons: 'fa-brands fa-angular',
      title: 'Angular'
    },
    {
      classSocialIcons: 'fa-brands fa-react',
      title: 'React'
    },
    {
      classSocialIcons: 'fa-brands fa-node',
      title: 'Node.js'
    },
    {
      classSocialIcons: 'fa-brands fa-js',
      title: 'JavaScript'
    },
    {
      classSocialIcons: 'fa-brands fa-docker',
      title: 'Docker'
    },
    {
      classSocialIcons: 'fa-brands fa-html5',
      title: 'HTML5'
    },
    {
      classSocialIcons: 'fa-brands fa-bootstrap',
      title: 'Bootstrap'
    },
    {
      classSocialIcons: 'fa-brands fa-css3-alt',
      title: 'CSS3'
    },
    {
      classSocialIcons: 'fa-brands fa-git-alt',
      title: 'GIT'
    },
  ]
  tools: CardSkills[] = [
    {
      classSocialIcons: 'fa-brands fa-windows',
      title: 'Windows'
    },
    {
      classSocialIcons: 'fa-brands fa-github',
      title: 'GitHub'
    },
    {
      classSocialIcons: 'fa-brands fa-linux',
      title: 'Linux'
    },
    {
      classSocialIcons: 'fa-brands fa-slack',
      title: 'Slack'
    },
    {
      classSocialIcons: 'fa-brands fa-ubuntu',
      title: 'Ubuntu'
    },
  ]

  formatedSkills: CardSkills[][] = []
  formatedTools: CardSkills[][] = []

  ngOnInit() {
    this.doFormatSocialCard(this.skills, this.formatedSkills)
    this.doFormatSocialCard(this.tools, this.formatedTools)
  }

  //#region === FUNCOES DE CONTROLE DE TELA ===
  
  doFormatSocialCard(items: CardSkills[], formatedVar: CardSkills[][]) {
    if (items && items.length) {
      let newRow: CardSkills[] = [];
      let breakRow: number = 0;
  
      for (let i = 0; i < items.length; i++) {
        breakRow++;
        newRow.push(items[i]);
  
        if (breakRow % 5 == 0) {
          if (breakRow == 5) {
            formatedVar.push(newRow);
          }
          breakRow = 0;
          newRow = [];
        } else if (i == items.length - 1) {
          formatedVar.push(newRow);
        }
      }
    }
  }

  //#endregion

}
